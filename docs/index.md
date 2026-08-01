---
layout: home

hero:
  name: Awesome Hub
  text: 开源精选
  tagline: 精心收集的优质开源项目导航，涵盖前端、后端、AI、DevOps、数据库、移动开发等全品类，助你发现好用的轮子。
  actions:
    - theme: brand
      text: 开始探索
      link: /frontend
    - theme: alt
      text: 贡献项目
      link: /contributing

features:
  - icon: 🚀
    title: 持续更新
    details: 维护者定期筛选优质项目入库，紧跟开源前沿
  - icon: 📁
    title: 分类清晰
    details: 8 大领域细分，各场景各技术栈一目了然
  - icon: 💯
    title: 精挑细选
    details: 只收录口碑好、维护活跃、真的好用的开源项目
---

<script setup>
const categories = [
  { icon: '🎨', title: '前端开发', description: 'UI 框架、构建工具、组件库、可视化方案等', link: '/frontend', count: '6 个示例' },
  { icon: '⚙️', title: '后端开发', description: 'Web 框架、微服务、RPC、API 工具等', link: '/backend', count: '6 个示例' },
  { icon: '🤖', title: 'AI / 机器学习', description: 'LLM 框架、AI 应用、模型库、训练工具', link: '/ai-ml', count: '6 个示例' },
  { icon: '🚀', title: 'DevOps', description: '容器、K8s、CI/CD、监控、云原生', link: '/devops', count: '6 个示例' },
  { icon: '💾', title: '数据库', description: '关系型、NoSQL、NewSQL、缓存、ORM', link: '/database', count: '6 个示例' },
  { icon: '📱', title: '移动开发', description: '跨端框架、原生 SDK、UI 组件库', link: '/mobile', count: '6 个示例' },
  { icon: '✨', title: '设计资源', description: '图标库、配色、设计系统、素材', link: '/design', count: '6 个示例' },
  { icon: '🛠️', title: '效率工具', description: 'CLI 工具、编辑器、笔记、生产力', link: '/tools', count: '6 个示例' },
]
</script>

<div class="ah-section-title">📂 浏览分类</div>
<div class="ah-section-desc">选择你感兴趣的领域，探索精选的开源项目</div>

<CategoryGrid :items="categories" />
