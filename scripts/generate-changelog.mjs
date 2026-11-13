#!/usr/bin/env node
// Generates the /changelog page (src/pages/changelog.mdx) from the CHANGELOG.md of the axispark
// repository, which is checked out in ./axispark like for the API reference.
//
// The page is a timeline (src/components/Changelog): every release shows its features as highlights, then
// the full list of changes. A feature that starts with a short bold title (`- **MCP server.** New ...`) is
// highlighted with that title; otherwise the title is the first words of the entry.
//
// Every release links to the guides and the API reference of its documentation version (<major>.<minor>,
// see versions.json), and to its benchmarks report when scripts/generate-benchmarks.mjs has generated it (run it
// first). The changesets that are not released yet are listed first as "Unreleased", linked to
// the "Next" documentation, so the staging site shows what is coming in the next version.
//
// Usage: node scripts/generate-changelog.mjs [path to the axispark repository]

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const axispark = resolve(root, process.argv[2] ?? 'axispark');
const changelogPath = join(axispark, 'CHANGELOG.md');
const outputPath = join(root, 'src/pages/changelog.mdx');

if (!existsSync(changelogPath)) {
    console.error(`${changelogPath} does not exist: check out the axispark repository in ./axispark first`);
    process.exit(1);
}

const versions = JSON.parse(readFileSync(join(root, 'versions.json'), 'utf8'));
const benchmarksDir = join(root, 'src/pages/benchmarks');

function benchmarksLink(version) {
    return version && existsSync(join(benchmarksDir, `${version}.mdx`)) ? `/benchmarks/${version}` : undefined;
}
const [latest] = versions;

function documentationLinks(docsVersion) {
    if (docsVersion === 'current') return { docs: '/docs/next/intro', api: '/api/next/' };
    if (!versions.includes(docsVersion)) return {};
    const path = docsVersion === latest ? '' : `/${docsVersion}`;
    return { docs: `/docs${path}/intro`, api: `/api${path}/` };
}

// The entries are written for GitHub: escape the characters that MDX reads as JSX or expressions, except
// inside code spans and code blocks.
function escapeMdx(markdown) {
    let fenced = false;
    return markdown
        .split('\n')
        .map((line) => {
            if (/^\s*(```|~~~)/.test(line)) {
                fenced = !fenced;
                return line;
            }
            if (fenced) return line;
            return line
                .split(/(`+[^`]*?`+)/)
                .map((part, index) => (index % 2 ? part : part.replace(/([{}<>])/g, '\\$1')))
                .join('');
        })
        .join('\n');
}

function formatDate(date) {
    return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
    });
}

// Top-level items of a markdown list, with their continuation lines.
function listItems(markdown) {
    const items = [];
    for (const line of markdown.split('\n')) {
        if (/^- /.test(line)) items.push(line.slice(2));
        else if (items.length && /^\s+\S/.test(line)) items[items.length - 1] += ` ${line.trim()}`;
    }
    return items;
}

// First sentence of an entry, without breaking on the dots of code spans such as `a.b`.
function firstSentence(text) {
    let code = false;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === '`') code = !code;
        if (!code && text[i] === '.' && (i === text.length - 1 || /\s/.test(text[i + 1]))) return text.slice(0, i + 1);
    }
    return text;
}

function highlight(item) {
    const bold = item.match(/^\*\*(.+?)\*\*\s*([\s\S]*)$/);
    const packages = [...new Set(item.match(/@axisparkjs\/[\w-]+/g) ?? [])].slice(0, 3);
    if (bold) return { title: bold[1].replace(/\.$/, ''), summary: firstSentence(bold[2]), packages };

    // No title: the first words of the entry, up to the first clause.
    const sentence = firstSentence(item);
    let title = sentence.split(/[,:;]|\.(?:\s|$)| with | to | that | which /)[0].trim();
    if (title.length > 48) title = `${title.slice(0, 48).replace(/\s+\S*$/, '')}…`;
    return { title, summary: sentence, packages };
}

function highlights(body) {
    const features = body.match(/^### Features\s*\n([\s\S]*?)(?=^### |(?![\s\S]))/m);
    return features ? listItems(features[1]).map(highlight) : [];
}

// Releases of the page, in order, for the bar that jumps to each one (ReleaseNav).
const navigation = [];

function release({ id, title, version, date, kind, links, latest: isLatest, body }) {
    navigation.push({ id, title, kind });
    const props = {
        id,
        title,
        version,
        date,
        kind,
        ...links,
        latest: isLatest || undefined,
        highlights: highlights(body)
    };
    const attributes = Object.entries(props)
        .filter(([, value]) => value !== undefined && value !== '')
        .map(([name, value]) => (typeof value === 'string' ? `${name}=${JSON.stringify(value)}` : `${name}={${JSON.stringify(value)}}`))
        .join(' ');
    return `<Release ${attributes}>\n\n${escapeMdx(body.trim())}\n\n</Release>\n`;
}

function releases(changelog) {
    const sections = changelog.split(/^## /m).slice(1);
    return sections.map((section, index) => {
        const [heading, ...rest] = section.split('\n');
        const [, version, date] = heading.match(/^(\d+\.\d+\.\d+(?:-[\w.]+)?)(?: \((\d{4}-\d{2}-\d{2})\))?/) ?? [];
        if (!version) throw new Error(`Unexpected release heading in CHANGELOG.md: ## ${heading}`);
        const [major, minor, patch] = version.split('.');
        return release({
            id: `v${version}`,
            title: version,
            version,
            date: date && `Released on ${formatDate(date)}`,
            kind: patch !== '0' ? 'patch' : minor === '0' ? 'major' : 'minor',
            links: { ...documentationLinks(`${major}.${minor}`), benchmarks: benchmarksLink(version) },
            latest: index === 0,
            body: rest.join('\n')
        });
    });
}

function unreleased() {
    const dir = join(axispark, '.changeset');
    if (!existsSync(dir)) return '';

    const groups = { major: [], minor: [], patch: [] };
    for (const file of readdirSync(dir)
        .filter((name) => name.endsWith('.md') && name !== 'README.md')
        .sort()) {
        const match = readFileSync(join(dir, file), 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
        if (!match || !match[2].trim()) continue;
        const bumps = [...match[1].matchAll(/:\s*["']?(major|minor|patch)["']?\s*$/gm)].map((m) => m[1]);
        const bump = ['major', 'minor', 'patch'].find((level) => bumps.includes(level));
        if (!bump) continue;
        const [first, ...rest] = match[2].trim().split(/\r?\n/);
        groups[bump].push([`- ${first}`, ...rest.map((line) => (line.trim() ? `  ${line}` : ''))].join('\n'));
    }

    const titles = {
        major: 'Breaking changes',
        minor: 'Features',
        patch: 'Improvements and fixes'
    };
    const body = Object.entries(groups)
        .filter(([, items]) => items.length)
        .map(([bump, items]) => `### ${titles[bump]}\n\n${items.join('\n')}\n`)
        .join('\n');

    return body
        ? release({
              id: 'unreleased',
              title: 'Unreleased',
              date: 'Coming in the next release',
              kind: 'unreleased',
              links: documentationLinks('current'),
              body
          })
        : '';
}

const changelog = readFileSync(changelogPath, 'utf8');
const timeline = [unreleased(), ...releases(changelog)].filter(Boolean).join('\n');

const page = `---
# Generated by scripts/generate-changelog.mjs from the CHANGELOG.md of axispark. Do not edit.
title: Changelog
description: New features, improvements and fixes in every release of AxiSpark.js.
hide_table_of_contents: true
wrapperClassName: axc-page
---

import Release from '@site/src/components/Changelog/Release';
import ReleaseNav from '@site/src/components/Changelog/ReleaseNav';

<div className="axc-intro">

# Changelog

New features, improvements and fixes in every release of AxiSpark.js. All the \`@axisparkjs/*\` packages are
released together with the same version. To read the documentation of the version you program with, pick it
in the version selector of the navigation bar.

</div>

<ReleaseNav releases={${JSON.stringify(navigation)}} />

<div className="axc-timeline">

${timeline}
</div>
`;

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, page.trimEnd() + '\n');
console.log(`Changelog page generated from ${changelogPath}`);
