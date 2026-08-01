import DefaultTheme from 'vitepress/theme'
import './style.css'
import type { Theme } from 'vitepress'
import ProjectCard from './components/ProjectCard.vue'
import CategoryGrid from './components/CategoryGrid.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProjectCard', ProjectCard)
    app.component('CategoryGrid', CategoryGrid)
  },
} satisfies Theme
