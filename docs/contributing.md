# 贡献指南

感谢你对 **Awesome Hub · 开源精选** 的关注！本项目采用**单页展示**方式，所有项目都集中在 `docs/index.md` 一个文件中，按分类分区排列，导航全是页内锚点，**零 404**。欢迎通过提交 Issue 或 Pull Request 的方式推荐优质开源项目。

## 🎯 收录标准

我们希望收录的项目符合以下要求：

- ⭐ **有口碑**：有一定 Star 数和社区认可度
- 🔄 **有维护**：近一年内有维护记录，项目未归档
- 👍 **真的好用**：在同类项目中有特色或优势
- 📜 **开源协议**：使用 OSI 批准的开源协议

## 📝 推荐项目

### 方式一：直接编辑 `docs/index.md`（推荐）

所有项目卡片都写在 `docs/index.md`，找到对应分类区块（如 `## 🤖 AI / 机器学习` 下方的 `<div class="ah-project-grid">` 内），在合适的位置插入 `<ProjectCard />` 组件即可：

```vue
<ProjectCard
  name="owner/repo"
  github="https://github.com/owner/repo"
  description="项目的一句话介绍，突出核心价值，50 字以内最佳"
  lang="TypeScript"
  stars="12.3k"
  updated="3 天前"
  site="https://example.com"
/>
```

**属性说明**：

| 属性 | 必填 | 说明 |
| --- | --- | --- |
| `name` | ✅ | 项目名，推荐用 `owner/repo` 格式 |
| `github` | ✅ | GitHub 仓库完整链接 |
| `description` | ✅ | 一句话中文简介，50 字以内最佳 |
| `lang` | 推荐 | 主要编程语言，会显示彩色标签 |
| `stars` | 推荐 | Star 数量，如 `48.2k`、`123` |
| `updated` | 可选 | 最后更新时间，如 `3 天前` |
| `site` | 可选 | 项目官网/文档地址（没有就不填） |

**支持的编程语言**（会自动匹配颜色标签）：
TypeScript、JavaScript、Python、Go、Rust、Java、Vue、C/C++/C#、Swift、Kotlin、Dart、Ruby、PHP、Shell、Markdown 等。

### 方式二：提 Issue

如果不熟悉 Git 操作，可以直接 [提 Issue](https://github.com/jankoli/awesome-hub/issues/new)，填写项目信息，由维护者整理入库。

## 🔧 本地预览

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 本地预览构建产物
npm run preview
```

## 💡 提交流程

1. Fork 本仓库
2. 创建你的功能分支 (`git checkout -b feat/add-awesome-xxx`)
3. 编辑 `docs/index.md`，在对应分类区块插入 `<ProjectCard />`
4. 运行 `npm run build` 确保构建通过
5. 提交修改 (`git commit -m 'feat: 添加 xxx 项目'`)
6. 推送到分支 (`git push origin feat/add-awesome-xxx`)
7. 发起 Pull Request

提交前请确认：
- 项目符合收录标准
- 分类放置合理
- 所有链接（github 链接、官网链接）正确、简介准确
- `npm run build` 构建无报错

---

再次感谢你的贡献！❤️
