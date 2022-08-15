// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
// const config = {};

module.exports = {
    title: 'Grumpy',
    tagline: 'For Freedom',
    url: 'https://grumpy-wiki.netlify.app',
    baseUrl: '/',
    onBrokenLinks: 'log',
    onBrokenMarkdownLinks: 'log',
    favicon: 'img/favicon.ico',
    i18n: {
        defaultLocale: 'en',
        locales: ['th', 'en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'dev',
                path: 'wiki/dev',
                routeBasePath: 'dev',
                sidebarPath: require.resolve('./sidebars.js'),
                editUrl: 'https://github.com/PunGrumpy/Grumpy-wiki/tree/main/',
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
                breadcrumbs: true,
            },
        ],
    ],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            metadata: [
                {
                    name: 'keywords',
                    content: 'PunGrumpy, wiki, blog, java, python, javascript',
                },
            ],
            navbar: {
                title: "👻 Grumpy's Wiki",
                hideOnScroll: true,
                // logo: {
                //     alt: 'Site Logo',
                //     src: 'img/ghost.png',
                //     srcDark: 'img/ghost-dark.png',
                //     href: 'https://grumpy-wiki.netlify.app/',
                //     target: '_self',
                //     width: 32,
                //     height: 32,
                // },
                items: [
                    {
                        position: 'right',
                        label: '👨🏻‍🎓 Wiki - dev',
                        to: '/dev',
                    },
                    {
                        position: 'right',
                        label: '👨🏻 Contact',
                        to: '/contact',
                    },
                ],
            },
            footer: {
                style: 'light',
                copyright: `Copyright © ${new Date().getFullYear()} PunGrumpy, Inc. Built with <a href="https://www.docusaurus.cn/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.<br>Powered by <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                defaultLanguage: 'markdown',
                additionalLanguages: ['git'],
            },
        }),
};
