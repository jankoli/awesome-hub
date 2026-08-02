import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Awesome Hub · 开源精选',
  description: '600+ curated open-source projects across Frontend, Backend, AI, DevOps, Database, Mobile, Design & Productivity.',
  lang: 'zh-CN',
  cleanUrls: true,
  base: '/awesome-hub/',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ],

  themeConfig: {
    logo: '/favicon.svg',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '快速跳转',
        items: [
          { text: '🎨 FRONTEND DEVELOPMENT', link: '/#🎨-frontend-development' },
          { text: '⚙️ BACKEND DEVELOPMENT', link: '/#⚙️-backend-development' },
          { text: '🤖 AI / MACHINE LEARNING', link: '/#🤖-ai-machine-learning' },
          { text: '🚀 DEVOPS', link: '/#🚀-devops' },
          { text: '💾 DATABASE', link: '/#💾-database' },
          { text: '📱 MOBILE DEVELOPMENT', link: '/#📱-mobile-development' },
          { text: '✨ DESIGN RESOURCES', link: '/#✨-design-resources' },
          { text: '🛠️ PRODUCTIVITY TOOLS', link: '/#🛠️-productivity-tools' },
        ],
      },
      { text: '贡献指南', link: '/contributing' },
      {
        text: 'GitHub',
        link: 'https://github.com/jankoli/awesome-hub',
      },
    ],

    sidebar: false,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jankoli/awesome-hub' },
    ],

    footer: {
      message: '基于 MIT 协议开源 · 用 ❤️ 维护',
      copyright: '© 2026 Awesome Hub · 开源精选',
    },

    search: {
      provider: 'local',
    },
  },
})
