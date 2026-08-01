# 🎉 Awesome Hub · 开源精选

> 精心收集的优质开源项目导航，涵盖前端、后端、AI、DevOps、数据库、移动开发等全品类，助你发现好用的轮子。

[![GitHub Pages](https://github.com/your-username/awesome-hub/actions/workflows/deploy.yml/badge.svg)](https://github.com/your-username/awesome-hub/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🌟 特色

- 🚀 **持续更新**：维护者定期筛选优质项目入库，紧跟开源前沿
- 📁 **分类清晰**：8 大领域细分，各场景各技术栈一目了然
- 💯 **精挑细选**：只收录口碑好、维护活跃、真的好用的开源项目
- 🎨 **精美卡片**：每个项目信息卡片化，语言、Star、更新时间一眼即知
- 🔍 **站内搜索**：VitePress 内置本地搜索，快速按名称查找项目

## 📂 收录分类

| 分类 | 说明 |
| --- | --- |
| 🎨 [前端开发](https://your-username.github.io/awesome-hub/frontend) | UI 框架、构建工具、组件库、可视化方案 |
| ⚙️ [后端开发](https://your-username.github.io/awesome-hub/backend) | Web 框架、微服务、RPC、API 工具 |
| 🤖 [AI / 机器学习](https://your-username.github.io/awesome-hub/ai-ml) | LLM 框架、AI 应用、模型库、训练工具 |
| 🚀 [DevOps](https://your-username.github.io/awesome-hub/devops) | 容器、K8s、CI/CD、监控、云原生 |
| 💾 [数据库](https://your-username.github.io/awesome-hub/database) | 关系型、NoSQL、NewSQL、缓存、ORM |
| 📱 [移动开发](https://your-username.github.io/awesome-hub/mobile) | 跨端框架、原生 SDK、UI 组件 |
| ✨ [设计资源](https://your-username.github.io/awesome-hub/design) | 图标库、配色、设计系统、素材 |
| 🛠️ [效率工具](https://your-username.github.io/awesome-hub/tools) | CLI 工具、编辑器、笔记、生产力 |

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:5173）
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
3. 等待几分钟即可访问：`https://<你的用户名>.github.io/awesome-hub/`

## 📝 贡献项目

欢迎推荐优质开源项目！请查看 [贡献指南](./docs/contributing.md) 了解详细流程。

### 快速添加

编辑对应分类的 `.md` 文件，插入 `<ProjectCard />` 组件：

```vue
<ProjectCard
  name="owner/repo"
  github="https://github.com/owner/repo"
  description="项目的一句话介绍"
  lang="TypeScript"
  stars="12.3k"
  updated="3 天前"
  site="https://example.com"
/>
```

## 📄 开源协议

MIT © Awesome Hub · 开源精选
