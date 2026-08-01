# 🎉 Awesome Hub · 开源精选

> 精心收集的优质开源项目导航，**单页展示全部 48 个精选项目**，涵盖前端、后端、AI、DevOps、数据库、移动开发、设计资源、效率工具全品类，助你发现好用的轮子。

[![GitHub Pages](https://github.com/jankoli/awesome-hub/actions/workflows/deploy.yml/badge.svg)](https://github.com/jankoli/awesome-hub/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🌐 访问地址

**👉 https://jankoli.github.io/awesome-hub/**

（单页展示所有项目 + 顶部快速跳转导航，再也不会点错 404 了）

## 🌟 特色

- 🏠 **单页展示**：所有项目都在首页，滚动浏览或顶部快速跳转，零跳转 404
- 🚀 **持续更新**：维护者定期筛选优质项目入库，紧跟开源前沿
- 📁 **八大分类**：前端、后端、AI、DevOps、数据库、移动开发、设计资源、效率工具
- 💯 **精挑细选**：只收录口碑好、维护活跃、真的好用的开源项目
- 🎨 **精美卡片**：每个项目信息卡片化，语言（带配色）、Star、更新时间、官网一眼即知
- 🔍 **站内搜索**：VitePress 内置本地搜索，右上角按名称/标签秒搜项目

## 📂 收录分类

| 分类 | 代表项目 |
| --- | --- |
| 🎨 前端开发 | Vue、React、Vite、VS Code、Ant Design、Element Plus |
| ⚙️ 后端开发 | Spring Boot、Gin、Express、FastAPI、Actix-web、gRPC |
| 🤖 AI / 机器学习 | Dify、LangChain、Transformers、PyTorch、SD WebUI、Ollama |
| 🚀 DevOps | Docker、Kubernetes、Prometheus、Grafana、ArgoCD、Jenkins |
| 💾 数据库 | PostgreSQL、Redis、ClickHouse、Kafka、MongoDB、Prisma |
| 📱 移动开发 | Flutter、React Native、Compose Multiplatform、Lottie、Material UI |
| ✨ 设计资源 | Bootstrap Icons、Lucide、Font Awesome、Tailwind CSS、Astro、shadcn/ui |
| 🛠️ 效率工具 | fzf、Windows Terminal、Warp、AppFlowy、RustDesk、Obsidian |

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:5173/awesome-hub/）
npm run dev

# 构建生产版本（输出到 docs/.vitepress/dist）
npm run build

# 本地预览构建产物
npm run preview
```

### 部署到 GitHub Pages

仓库内置了 `.github/workflows/deploy.yml` 自动部署工作流：

1. 在仓库 **Settings → Pages** 中将 **Source** 设为 **GitHub Actions**
2. 将代码推送到 `main` 分支
3. 等待几分钟即可访问：`https://jankoli.github.io/awesome-hub/`

## 📝 贡献项目

欢迎推荐优质开源项目！请查看 [贡献指南](./docs/contributing.md) 了解详细流程。

### 快速添加

编辑 `docs/index.md`，在对应分类的 `<div class="ah-project-grid">` 区块内插入 `<ProjectCard />` 组件：

```vue
<ProjectCard
  name="owner/repo"
  github="https://github.com/owner/repo"
  description="项目的一句话介绍，突出核心优势"
  lang="TypeScript"
  stars="12.3k"
  updated="3 天前"
  site="https://example.com"
/>
```

## 📄 开源协议

MIT © Awesome Hub · 开源精选
