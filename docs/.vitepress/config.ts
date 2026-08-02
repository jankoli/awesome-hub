import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Awesome Hub · 开源精选',
  description: '678+ curated open-source projects with 10k+ stars. Frontend, Backend, AI/ML, DevOps, Database, Mobile, Design & Productivity. Best awesome list for developers.',
  lang: 'zh-CN',
  base: '/awesome-hub/',

  sitemap: {
    hostname: 'https://jankoli.github.io/awesome-hub/',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('404'))
    },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],

    // SEO Meta Tags
    ['meta', { name: 'description', content: '678+ curated open-source projects with 10k+ stars across Frontend, Backend, AI/ML, DevOps, Database, Mobile, Design & Productivity. The best awesome list for developers.' }],
    ['meta', { name: 'keywords', content: 'awesome, awesome-list, open-source, curated, frontend, backend, ai, machine-learning, devops, database, mobile, design, productivity, developer-tools, github-stars, best-projects, navigation, resources' }],
    ['meta', { name: 'author', content: 'jankoli' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }],

    // Open Graph Tags
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Awesome Hub · 678+ Curated Open-Source Projects' }],
    ['meta', { property: 'og:description', content: '678+ curated open-source projects with 10k+ stars. Frontend, Backend, AI/ML, DevOps, Database, Mobile, Design & Productivity.' }],
    ['meta', { property: 'og:url', content: 'https://jankoli.github.io/awesome-hub/' }],
    ['meta', { property: 'og:image', content: 'https://opengraph.githubassets.com/77a652d2d097a4390025f83bfe1aaf5d7e88e9e1de9cac85d6bca803dc3af30c/jankoli/awesome-hub' }],
    ['meta', { property: 'og:site_name', content: 'Awesome Hub · 开源精选' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:locale:alternate', content: 'en_US' }],
    ['meta', { property: 'og:locale:alternate', content: 'ja_JP' }],
    ['meta', { property: 'og:locale:alternate', content: 'ko_KR' }],
    ['meta', { property: 'og:locale:alternate', content: 'ru_RU' }],

    // Twitter Card Tags
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Awesome Hub · 678+ Curated Open-Source Projects' }],
    ['meta', { name: 'twitter:description', content: '678+ curated open-source projects with 10k+ stars. Frontend, Backend, AI/ML, DevOps, Database, Mobile, Design & Productivity.' }],
    ['meta', { name: 'twitter:image', content: 'https://opengraph.githubassets.com/77a652d2d097a4390025f83bfe1aaf5d7e88e9e1de9cac85d6bca803dc3af30c/jankoli/awesome-hub' }],

    // Canonical URL
    ['link', { rel: 'canonical', href: 'https://jankoli.github.io/awesome-hub/' }],

    // Structured Data (JSON-LD)
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Awesome Hub · 开源精选',
      'description': '678+ curated open-source projects with 10k+ stars across 8 categories.',
      'url': 'https://jankoli.github.io/awesome-hub/',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://jankoli.github.io/awesome-hub/?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    })],
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
