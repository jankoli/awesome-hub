# 贡献指南

感谢你对 **Awesome Hub · 开源精选** 的关注！欢迎通过提交 Issue 或 Pull Request 的方式推荐优质开源项目。

## 🎯 收录标准

我们希望收录的项目符合以下要求：

- ⭐ **有口碑**：有一定 Star 数和社区认可度
- 🔄 **有维护**：近一年内有维护记录，项目未归档
- 👍 **真的好用**：在同类项目中有特色或优势
- 📜 **开源协议**：使用 OSI 批准的开源协议

## 📝 推荐项目

### 方式一：编辑 Markdown 文件（推荐）

每个分类对应 `docs/` 目录下的一个 `.md` 文件，在合适的位置插入 `<ProjectCard />` 组件即可：

```vue
<ProjectCard
  name="owner/repo"
  github="https://github.com/owner/repo"
  description="项目的一句话介绍，突出核心价值"
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
| `site` | 可选 | 项目官网/文档地址 |

**支持的编程语言**（会自动匹配颜色标签）：
TypeScript、JavaScript、Python、Go、Rust、Java、Vue、C/C++/C#、Swift、Kotlin、Dart、Ruby、PHP、Shell、Markdown 等。

### 方式二：提 Issue

如果不熟悉 Git 操作，可以直接 [提 Issue](https://github.com/)，填写项目信息，由维护者整理入库。

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
3. 提交修改 (`git commit -m 'feat: 添加 xxx 项目'`)
4. 推送到分支 (`git push origin feat/add-awesome-xxx`)
5. 发起 Pull Request

提交前请确认：
- 项目符合收录标准
- 分类放置合理
- 链接正确、简介准确
- `npm run build` 构建通过

---

再次感谢你的贡献！❤️
