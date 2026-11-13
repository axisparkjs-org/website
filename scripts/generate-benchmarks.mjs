#!/usr/bin/env node
// Generates the /benchmarks pages from the results of the benchmarks repository, which is checked out in ./benchmarks
// like axispark for the API reference. The data is not committed here: it is generated in every build.
//
// - src/pages/benchmarks/index.mdx: evolution of the transversal scenarios and of every package, release after release.
// - src/pages/benchmarks/<version>.mdx: report of a release, with the change from the previous release.
// - static/benchmarks/data.json: compact series for the <BenchmarkChart package="..." /> charts of the guides.
//
// Only the `release` and `backfill` runs are shown, and only the results of the same machine (fingerprint) and Node.js
// major are compared, like the comparison of the benchmarks repository (runner/compare.ts).
//
// Without the benchmarks repository, the pages say that there are no results yet: the build never fails because of it.
//
// Usage: node scripts/generate-benchmarks.mjs [path to the benchmarks repository]

import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const benchmarks = resolve(root, process.argv[2] ?? 'benchmarks');
const indexPath = join(benchmarks, 'results', 'index.json');
const pagesDir = join(root, 'src/pages/benchmarks');
const dataPath = join(root, 'static/benchmarks/data.json');

// Same rule as runner/compare.ts: significant when |Δ| > max(5 %, 3 × rme), regression above +15 %.
const WARN = 5;
const REGRESSION = 15;
const SHOWN_KINDS = new Set(['release', 'backfill']);

// --------------------------------------------------------------------------------------------------------------------
// Results
// --------------------------------------------------------------------------------------------------------------------

function parseVersion(version) {
    const [, major, minor, patch, pre = ''] = version.match(/^(\d+)\.(\d+)\.(\d+)(?:-(.+))?$/) ?? [];
    return [Number(major), Number(minor), Number(patch), pre];
}

function compareVersions(a, b) {
    const [pa, pb] = [parseVersion(a), parseVersion(b)];
    for (let i = 0; i < 3; i++) if (pa[i] !== pb[i]) return pa[i] - pb[i];
    if (pa[3] === pb[3]) return 0;
    if (!pa[3]) return 1;
    if (!pb[3]) return -1;
    return pa[3] < pb[3] ? -1 : 1;
}

function loadResults() {
    if (!existsSync(indexPath)) {
        console.warn(`${indexPath} does not exist: check out the benchmarks repository in ./benchmarks. The pages say there are no results.`);
        return [];
    }
    const index = JSON.parse(readFileSync(indexPath, 'utf8'));
    return index.results
        .filter((entry) => SHOWN_KINDS.has(entry.kind))
        .map((entry) => ({ entry, result: JSON.parse(readFileSync(join(benchmarks, 'results', entry.file), 'utf8')) }));
}

const environmentId = (fingerprint, node) => `${fingerprint}/node-${node}`;

/**
 * Environments of the results, the newest first. The reference environment is the one of the newest release: its
 * machine, with the highest Node.js version measured.
 */
function environments(results) {
    const byId = new Map();
    for (const { entry } of results) {
        const id = environmentId(entry.fingerprint, entry.node);
        const env = byId.get(id) ?? { id, fingerprint: entry.fingerprint, node: entry.node, latest: entry.version, releases: 0 };
        env.releases++;
        if (compareVersions(entry.version, env.latest) > 0) env.latest = entry.version;
        byId.set(id, env);
    }
    return [...byId.values()].sort((a, b) => compareVersions(b.latest, a.latest) || b.node - a.node || b.releases - a.releases);
}

// --------------------------------------------------------------------------------------------------------------------
// Data of the charts
// --------------------------------------------------------------------------------------------------------------------

/**
 * Compact series: `values[environment][taskId]` is a list of `[version, p50 ns, ratio | null, heap bytes | null]`,
 * from the oldest release to the newest.
 */
function chartData(results, envs) {
    const tasks = new Map();
    const values = {};
    for (const { entry, result } of results) {
        const env = environmentId(entry.fingerprint, entry.node);
        values[env] ??= {};
        for (const task of result.tasks) {
            if (!tasks.has(task.id)) {
                tasks.set(task.id, { id: task.id, package: task.package, suite: task.suite, task: task.task, tier: task.tier, baseline: task.baseline ?? null });
            }
            (values[env][task.id] ??= []).push([result.axispark.version, task.latencyNs.p50, task.baselineRatio ?? null, task.heapBytes ?? null]);
        }
    }
    for (const series of Object.values(values)) for (const points of Object.values(series)) points.sort((a, b) => compareVersions(a[0], b[0]));
    return {
        schema: 1,
        releases: [...new Set(results.map(({ entry }) => entry.version))].sort(compareVersions),
        environments: envs.map(({ id, fingerprint, node }) => ({ id, fingerprint, node })),
        tasks: [...tasks.values()].sort((a, b) => a.package.localeCompare(b.package) || a.suite.localeCompare(b.suite)),
        values
    };
}

// --------------------------------------------------------------------------------------------------------------------
// Reports
// --------------------------------------------------------------------------------------------------------------------

function classify(previous, current) {
    if (!previous) return { delta: null, classification: 'new' };
    const delta = ((current.latencyNs.p50 - previous.latencyNs.p50) / previous.latencyNs.p50) * 100;
    const noise = Math.max(WARN, 3 * Math.max(previous.latencyNs.rme, current.latencyNs.rme));
    let classification = 'stable';
    if (Math.abs(delta) > noise) classification = delta < 0 ? 'improvement' : delta > Math.max(REGRESSION, noise) ? 'regression' : 'warning';
    return { delta: Math.round(delta * 10) / 10, classification };
}

/** Report of one release in one environment, compared with the previous release of the same environment. */
function environmentReport({ entry, result }, results) {
    const previous = results
        .filter(
            (other) =>
                other.entry.fingerprint === entry.fingerprint && other.entry.node === entry.node && compareVersions(other.entry.version, entry.version) < 0
        )
        .sort((a, b) => compareVersions(b.entry.version, a.entry.version))[0];
    const before = new Map((previous?.result.tasks ?? []).map((task) => [task.id, task]));
    const packages = new Map();
    // Tasks that are the reference of another task of their suite (`raw-*`): shown apart in the tables.
    const references = new Set(result.tasks.filter((task) => task.baseline).map((task) => `${task.suite}/${task.baseline}`));
    for (const task of result.tasks) {
        const old = before.get(task.id);
        const { delta, classification } = classify(old, task);
        const row = {
            id: task.id,
            suite: task.suite,
            task: task.task,
            tier: task.tier,
            p50: task.latencyNs.p50,
            rme: task.latencyNs.rme,
            ops: task.throughputOps.p50,
            ratio: task.baselineRatio ?? null,
            baseline: task.baseline ?? null,
            reference: references.has(`${task.suite}/${task.task}`),
            heap: task.heapBytes ?? null,
            previousP50: old?.latencyNs.p50 ?? null,
            delta,
            classification: previous ? classification : 'none'
        };
        packages.set(task.package, [...(packages.get(task.package) ?? []), row]);
    }
    const summary = { improvement: 0, stable: 0, warning: 0, regression: 0, new: 0 };
    for (const rows of packages.values()) for (const row of rows) if (row.classification in summary) summary[row.classification]++;
    return {
        id: environmentId(entry.fingerprint, entry.node),
        kind: entry.kind,
        runId: result.run.id,
        env: result.env,
        sha: result.axispark.sha,
        previous: previous?.entry.version ?? null,
        summary,
        errors: result.errors ?? [],
        packages: [...packages.entries()]
            .sort(([a], [b]) => (a === 'scenarios' ? -1 : b === 'scenarios' ? 1 : a.localeCompare(b)))
            .map(([name, rows]) => ({ name, rows }))
    };
}

// --------------------------------------------------------------------------------------------------------------------
// Pages
// --------------------------------------------------------------------------------------------------------------------

function documentationVersion(version) {
    const [major, minor] = parseVersion(version);
    return `${major}.${minor}`;
}

function frontMatter(title, description) {
    return `---
# Generated by scripts/generate-benchmarks.mjs from the results of the benchmarks repository. Do not edit.
title: ${JSON.stringify(title)}
description: ${JSON.stringify(description)}
hide_table_of_contents: true
wrapperClassName: axb-page
---
`;
}

function overviewPage(data, reports) {
    const releases = reports.map(({ version, environments: envs }) => ({
        version,
        kind: envs[0].kind,
        environments: envs.map((env) => env.id),
        summary: envs[0].summary,
        previous: envs[0].previous
    }));
    return `${frontMatter('Benchmarks', 'Performance of every AxiSpark.js release, measured with the packages published on npm.')}
import BenchmarksOverview from '@site/src/components/Benchmarks/Overview';

<div className="axb-intro">

# Benchmarks

Every release of AxiSpark.js is measured with the packages published on npm, like an application installs them. The
suites cover every package and five scenarios of complete applications. Each one runs three times in a new process and
the report keeps the median. Where there is a reference without the framework (Express, Fastify, Socket.IO, TypeORM,
the clients of the brokers…), the **ratio** is the overhead of AxiSpark.js: it varies much less between machines than
the absolute time. The suites and the raw results are in the [benchmarks repository](https://github.com/axisparkjs-org/benchmark).

</div>

<BenchmarksOverview data={${JSON.stringify(data)}} releases={${JSON.stringify(releases)}} />
`;
}

function reportPage(version, envs, isLatest) {
    const docs = documentationVersion(version);
    return `${frontMatter(`Benchmarks of ${version}`, `Performance report of AxiSpark.js ${version}, compared with the previous release.`)}
import BenchmarkReport from '@site/src/components/Benchmarks/Report';

<div className="axb-intro">

# AxiSpark.js ${version}

Performance report of the release, compared with the previous release measured in the same machine and Node.js version.
The changes below max(5 %, 3 × the margin of error) are noise. See the [changes of the release](/changelog#v${version})
or the [evolution of every release](/benchmarks).

</div>

<BenchmarkReport version=${JSON.stringify(version)} docsVersion=${JSON.stringify(docs)} latest={${isLatest}} environments={${JSON.stringify(envs)}} />
`;
}

function emptyPage() {
    return `${frontMatter('Benchmarks', 'Performance of every AxiSpark.js release, measured with the packages published on npm.')}
<div className="axb-intro">

# Benchmarks

Every release of AxiSpark.js is measured with the packages published on npm. There are no results yet: they appear here
after the next release.

</div>
`;
}

// --------------------------------------------------------------------------------------------------------------------

const results = loadResults();
const envs = environments(results);
const data = chartData(results, envs);

rmSync(pagesDir, { recursive: true, force: true });
mkdirSync(pagesDir, { recursive: true });
mkdirSync(join(dataPath, '..'), { recursive: true });
writeFileSync(dataPath, JSON.stringify(data));

if (results.length === 0) {
    writeFileSync(join(pagesDir, 'index.mdx'), emptyPage());
    console.log('Benchmarks pages generated without results');
} else {
    const order = new Map(envs.map((env, index) => [env.id, index]));
    const reports = data.releases
        .toReversed()
        .map((version) => ({
            version,
            environments: results
                .filter(({ entry }) => entry.version === version)
                .map((item) => environmentReport(item, results))
                .sort((a, b) => order.get(a.id) - order.get(b.id))
        }));
    for (const [index, { version, environments: reportEnvs }] of reports.entries()) {
        writeFileSync(join(pagesDir, `${version}.mdx`), reportPage(version, reportEnvs, index === 0));
    }
    writeFileSync(join(pagesDir, 'index.mdx'), overviewPage(data, reports));
    console.log(`Benchmarks pages generated: ${reports.length} releases, ${envs.length} environments, ${data.tasks.length} tasks`);
}
