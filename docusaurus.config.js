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
                docs: { sidebarPath: require.resolve('./sidebars.js') },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                gtag: {
                    trackingID: 'GTM-P5GG5DH',
                    anonymizeIP: true,
                },
                blog: {
                    blogTitle: "Grumpy's Blog",
                    blogDescription: "Grumpy's Blog",
                    blogSidebarTitle: 'Latest posts',
                    showReadingTime: true,
                    postsPerPage: 3,
                    feedOptions: {
                        type: 'all',
                        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://pun-grumpy.vercel.app/" target="_blank">PunGrumpy</a>, Inc.`,
                    },
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                },
            }),
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'programming-languages',
                path: 'docs/programming-languages',
                routeBasePath: 'programming-languages',
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
                {
                    name: 'og:title',
                    content: 'Grumpy-wiki',
                },
                {
                    name: 'og:description',
                    content: 'Personal knowledge base',
                },
                {
                    name: 'og:image',
                    content:
                        'https://raw.githubusercontent.com/PunGrumpy/Grumpy-wiki/main/static/img/Hero.jpg',
                },
            ],
            navbar: {
                title: "Grumpy's Wiki",
                hideOnScroll: true,
                logo: {
                    alt: 'Site Logo',
                    src: 'img/logo.png',
                    srcDark: 'img/logo-dark.png',
                    href: '/',
                    target: '_self',
                    width: 32,
                    height: 32,
                },
                items: [
                    {
                        position: 'right',
                        label: '👨🏻‍🎓 Programming Languages',
                        to: '/programming-languages',
                    },
                    {
                        position: 'right',
                        label: '📄 Blog',
                        to: '/blog',
                        activeBasePath: 'blog',
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
                copyright: `Copyright © ${new Date().getFullYear()} <a href="https://pun-grumpy.vercel.app/" target="_blank">PunGrumpy</a>, Inc. Built with <a href="https://www.docusaurus.cn/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.<br>Powered by <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                defaultLanguage: 'markdown',
                additionalLanguages: ['git', 'python', 'powershell'],
            },
        }),
};
