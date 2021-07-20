/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'codeamigo',
  tagline: 'Learn to code, interactively, from the community',
  url: 'https://codeamigo.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'codeamigo', // Usually your GitHub org/user name.
  projectName: 'codeamigo', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'codeamigo',
      logo: {
        alt: 'codeamigo Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/writing-tests/react',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/codeamigo/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Writing Tests',
              to: 'docs/writing-tests/react',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/codeamigo_dev',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/codeamigo'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} codeamigo LLC, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/codeamigo/docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/codeamigo/docs/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
