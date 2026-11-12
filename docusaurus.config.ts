import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import axisparkCodeTheme from './src/prism-theme';

const config: Config = {
    title: 'AxiSpark.js',
    tagline: 'The Ultimate Node.js Framework',
    favicon: 'img/icon.svg',
    baseUrl: '/',
    url: 'https://axisparkjs.com',
    future: {
        v4: true
    },

    // GitHub pages deployment config.
    organizationName: 'axisparkjs-org',
    projectName: 'website',

    onBrokenLinks: 'throw',
    i18n: {
        defaultLocale: 'en',
        locales: ['en']
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Released versions are snapshots in versioned_docs/ (see versions.json). The latest one is
                    // served at /docs, the older ones at /docs/<version> and `docs/` at /docs/next.
                    versions: {
                        current: { label: 'Next', path: 'next', banner: 'unreleased' }
                    }
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true
                    },
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn'
                },
                theme: {
                    customCss: './src/css/custom.css'
                }
            } satisfies Preset.Options
        ]
    ],

    themeConfig: {
        // Replace with your project's social card
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: true,
            respectPrefersColorScheme: false
        },
        navbar: {
            title: 'AxiSpark.js',
            logo: {
                alt: 'AxiSpark.js Logo',
                src: 'img/icon.svg'
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Docs'
                },
                {
                    type: 'docSidebar',
                    docsPluginId: 'api',
                    sidebarId: 'api',
                    position: 'left',
                    label: 'API'
                },
                { to: '/changelog', label: 'Changelog', position: 'left' },
                { to: '/blog', label: 'Blog', position: 'left' },
                // Selects the version of the guides and of the API reference at the same time
                // (src/theme/NavbarItem/VersionDropdownNavbarItem.tsx).
                { type: 'custom-versionDropdown', position: 'right' },
                {
                    href: 'https://github.com/axisparkjs-org/axispark',
                    label: 'GitHub',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} AxiSpark.js`
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: axisparkCodeTheme
        }
    } satisfies Preset.ThemeConfig,

    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'api',
                path: 'api',
                routeBasePath: 'api',
                sidebarPath: './sidebars-api.ts',
                includeCurrentVersion: true,
                // Same versions as the guides (api_versions.json), so both always change together.
                versions: {
                    current: { label: 'Next', path: 'next', banner: 'unreleased' }
                }
            }
        ]
    ],

    headTags: [
        { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' } }
    ],
    stylesheets: [
        'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400..800&family=Instrument+Sans:wght@400..700&family=JetBrains+Mono:wght@400;500&display=swap'
    ],

    themes: ['@docusaurus/theme-mermaid'],
    markdown: {
        mermaid: true
    }
};

export default config;
