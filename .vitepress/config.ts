import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Awesome Hub · 开源精选',
  description: '精心收集的优质开源项目导航，涵盖前端、后端、AI、DevOps、数据库、移动开发等全品类',
  lang: 'zh-CN',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ],

  themeConfig: {
    logo: '/favicon.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '前端开发', link: '/frontend' },
      { text: '后端开发', link: '/backend' },
      { text: 'AI / 机器学习', link: '/ai-ml' },
      {
        text: '更多分类',
        items: [
          { text: 'DevOps', link: '/devops' },
          { text: '数据库', link: '/database' },
          { text: '移动开发', link: '/mobile' },
          { text: '设计资源', link: '/design' },
          { text: '效率工具', link: '/tools' },
        ],
      },
      { text: '贡献指南', link: '/contributing' },
      {
        text: 'GitHub',
        link: 'https://github.com/',
      },
    ],

    sidebar: {
      '/': [
        {
          text: '分类导航',
          items: [
            { text: '🎨 前端开发', link: '/frontend' },
            { text: '⚙️ 后端开发', link: '/backend' },
            { text: '🤖 AI / 机器学习', link: '/ai-ml' },
            { text: '🚀 DevOps', link: '/devops' },
            { text: '💾 数据库', link: '/database' },
            { text: '📱 移动开发', link: '/mobile' },
            { text: '✨ 设计资源', link: '/design' },
            { text: '🛠️ 效率工具', link: '/tools' },
          ],
        },
        {
          text: '关于',
          items: [
            { text: '贡献指南', link: '/contributing' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/' },
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
