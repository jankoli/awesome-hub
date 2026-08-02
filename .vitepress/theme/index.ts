import DefaultTheme from 'vitepress/theme'
import './style.css'
import type { Theme } from 'vitepress'
import ProjectCard from './components/ProjectCard.vue'
import CategoryGrid from './components/CategoryGrid.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import CustomLayout from './components/CustomLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app }) {
    app.component('ProjectCard', ProjectCard)
    app.component('CategoryGrid', CategoryGrid)
    app.component('LanguageSwitcher', LanguageSwitcher)
  },
} satisfies Theme
