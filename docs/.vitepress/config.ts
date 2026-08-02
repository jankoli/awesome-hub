import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Awesome Hub · 开源精选',
  description: '600+ curated open-source projects across Frontend, Backend, AI, DevOps, Database, Mobile, Design & Productivity.',
  lang: 'zh-CN',
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
          { text: '🎨 前端开发', link: '/#🎨-前端开发' },
          { text: '⚙️ 后端开发', link: '/#⚙️-后端开发' },
          { text: '🤖 AI / 机器学习', link: '/#🤖-ai-机器学习' },
          { text: '🚀 DevOps', link: '/#🚀-devops' },
          { text: '💾 数据库', link: '/#💾-数据库' },
          { text: '📱 移动开发', link: '/#📱-移动开发' },
          { text: '✨ 设计资源', link: '/#✨-设计资源' },
          { text: '🛠️ 效率工具', link: '/#🛠️-效率工具' },
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
