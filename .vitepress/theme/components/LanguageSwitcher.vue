<script setup lang="ts">
import { ref, onMounted } from 'vue'

type Lang = 'zh-CN' | 'en' | 'ja' | 'ko' | 'ru'

const currentLang = ref<Lang>('zh-CN')

const langs: { code: Lang; label: string; short: string }[] = [
  { code: 'zh-CN', label: '中文', short: '中' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ja', label: '日本語', short: '日' },
  { code: 'ko', label: '한국어', short: '한' },
  { code: 'ru', label: 'Русский', short: 'RU' },
]

const translations: Record<Lang, Record<string, string>> = {
  'zh-CN': {
    'nav.home': '首页',
    'nav.quickJump': '快速跳转',
    'nav.contributing': '贡献指南',
    'hero.text': '开源精选',
    'hero.tagline': '600+ 精选优质开源项目，涵盖前端、后端、AI、DevOps、数据库、移动开发、设计资源、效率工具全品类，助你发现好用的轮子。',
    'hero.action.explore': '👇 直接往下看 600+ 精选',
    'hero.action.guide': '贡献指南',
    'cat.frontend': '🎨 前端开发',
    'cat.backend': '⚙️ 后端开发',
    'cat.ai': '🤖 AI / 机器学习',
    'cat.devops': '🚀 DevOps',
    'cat.database': '💾 数据库',
    'cat.mobile': '📱 移动开发',
    'cat.design': '✨ 设计资源',
    'cat.productivity': '🛠️ 效率工具',
    'footer.message': '基于 MIT 协议开源 · 用 ❤️ 维护',
    'footer.copyright': '© 2026 Awesome Hub · 开源精选',
    'search.placeholder': '搜索项目...',
  },
  'en': {
    'nav.home': 'Home',
    'nav.quickJump': 'Quick Jump',
    'nav.contributing': 'Contributing',
    'hero.text': 'Open Source',
    'hero.tagline': '600+ curated open-source projects across Frontend, Backend, AI, DevOps, Database, Mobile, Design & Productivity.',
    'hero.action.explore': '👇 Browse 600+ Projects',
    'hero.action.guide': 'Contributing Guide',
    'cat.frontend': '🎨 FRONTEND DEVELOPMENT',
    'cat.backend': '⚙️ BACKEND DEVELOPMENT',
    'cat.ai': '🤖 AI / MACHINE LEARNING',
    'cat.devops': '🚀 DEVOPS',
    'cat.database': '💾 DATABASE',
    'cat.mobile': '📱 MOBILE DEVELOPMENT',
    'cat.design': '✨ DESIGN RESOURCES',
    'cat.productivity': '🛠️ PRODUCTIVITY TOOLS',
    'footer.message': 'Open source under MIT License · Made with ❤️',
    'footer.copyright': '© 2026 Awesome Hub · Open Source',
    'search.placeholder': 'Search projects...',
  },
  'ja': {
    'nav.home': 'ホーム',
    'nav.quickJump': 'クイックジャンプ',
    'nav.contributing': '貢献ガイド',
    'hero.text': 'オープンソース',
    'hero.tagline': '600+ の厳選オープンソースプロジェクト。フロントエンド、バックエンド、AI、DevOps、データベース、モバイル、デザイン、生産性ツールを網羅。',
    'hero.action.explore': '👇 600+ プロジェクトを見る',
    'hero.action.guide': '貢献ガイド',
    'cat.frontend': '🎨 フロントエンド開発',
    'cat.backend': '⚙️ バックエンド開発',
    'cat.ai': '🤖 AI / 機械学習',
    'cat.devops': '🚀 DevOps',
    'cat.database': '💾 データベース',
    'cat.mobile': '📱 モバイル開発',
    'cat.design': '✨ デザインリソース',
    'cat.productivity': '🛠️ 生産性ツール',
    'footer.message': 'MIT ライセンスでオープンソース · ❤️ で維持',
    'footer.copyright': '© 2026 Awesome Hub · オープンソース',
    'search.placeholder': 'プロジェクトを検索...',
  },
  'ko': {
    'nav.home': '홈',
    'nav.quickJump': '빠른 이동',
    'nav.contributing': '기여 가이드',
    'hero.text': '오픈소스',
    'hero.tagline': '600+ 엄선된 오픈소스 프로젝트. 프론트엔드, 백엔드, AI, DevOps, 데이터베이스, 모바일, 디자인, 생산성 도구를 망라.',
    'hero.action.explore': '👇 600+ 프로젝트 보기',
    'hero.action.guide': '기여 가이드',
    'cat.frontend': '🎨 프론트엔드 개발',
    'cat.backend': '⚙️ 백엔드 개발',
    'cat.ai': '🤖 AI / 머신러닝',
    'cat.devops': '🚀 DevOps',
    'cat.database': '💾 데이터베이스',
    'cat.mobile': '📱 모바일 개발',
    'cat.design': '✨ 디자인 리소스',
    'cat.productivity': '🛠️ 생산성 도구',
    'footer.message': 'MIT 라이선스 오픈소스 · ❤️로 유지',
    'footer.copyright': '© 2026 Awesome Hub · 오픈소스',
    'search.placeholder': '프로젝트 검색...',
  },
  'ru': {
    'nav.home': 'Главная',
    'nav.quickJump': 'Быстрый переход',
    'nav.contributing': 'Руководство',
    'hero.text': 'Open Source',
    'hero.tagline': '600+ отобранных open-source проектов: Frontend, Backend, AI, DevOps, базы данных, мобильная разработка, дизайн и инструменты.',
    'hero.action.explore': '👇 Смотреть 600+ проектов',
    'hero.action.guide': 'Руководство',
    'cat.frontend': '🎨 FRONTEND РАЗРАБОТКА',
    'cat.backend': '⚙️ BACKEND РАЗРАБОТКА',
    'cat.ai': '🤖 AI / МАШИННОЕ ОБУЧЕНИЕ',
    'cat.devops': '🚀 DEVOPS',
    'cat.database': '💾 БАЗЫ ДАННЫХ',
    'cat.mobile': '📱 МОБИЛЬНАЯ РАЗРАБОТКА',
    'cat.design': '✨ ДИЗАЙН РЕСУРСЫ',
    'cat.productivity': '🛠️ ИНСТРУМЕНТЫ',
    'footer.message': 'Open source под MIT лицензией · Сделано с ❤️',
    'footer.copyright': '© 2026 Awesome Hub · Open Source',
    'search.placeholder': 'Поиск проектов...',
  },
}

function applyTranslations(lang: Lang) {
  const t = translations[lang]
  if (!t) return

  // Nav items
  document.querySelectorAll('.VPNavBarMenuLink').forEach(el => {
    const text = el.textContent?.trim() || ''
    for (const [, v] of Object.entries(translations)) {
      if (v['nav.home'] === text) { el.textContent = t['nav.home']; break }
      if (v['nav.contributing'] === text) { el.textContent = t['nav.contributing']; break }
    }
  })

  // Quick jump dropdown
  document.querySelectorAll('.VPFlyout .button-text').forEach(el => {
    const text = el.textContent?.trim() || ''
    for (const [, v] of Object.entries(translations)) {
      if (v['nav.quickJump'] === text) { el.textContent = t['nav.quickJump']; break }
    }
  })

  // Hero
  const heroText = document.querySelector('.VPHero .text') as HTMLElement
  const heroTagline = document.querySelector('.VPHero .tagline') as HTMLElement
  const heroActions = document.querySelectorAll('.VPHero .VPButton')
  if (heroText) heroText.textContent = t['hero.text']
  if (heroTagline) heroTagline.textContent = t['hero.tagline']
  heroActions.forEach((btn, i) => {
    if (i === 0) btn.textContent = t['hero.action.explore']
    if (i === 1) btn.textContent = t['hero.action.guide']
  })

  // Category headings
  const headingMap: Record<string, string> = {
    '🎨': 'cat.frontend', '⚙️': 'cat.backend', '🤖': 'cat.ai',
    '🚀': 'cat.devops', '💾': 'cat.database', '📱': 'cat.mobile',
    '✨': 'cat.design', '🛠️': 'cat.productivity',
  }
  document.querySelectorAll('h2').forEach(el => {
    const text = el.textContent || ''
    for (const [emoji, key] of Object.entries(headingMap)) {
      if (text.includes(emoji)) {
        const countMatch = text.match(/\(\d+\)/)
        const count = countMatch ? ` ${countMatch[0]}` : ''
        el.textContent = t[key] + count
        break
      }
    }
  })

  // Search
  const searchEl = document.querySelector('.DocSearch-Button-Placeholder') as HTMLElement
  if (searchEl) searchEl.textContent = t['search.placeholder']

  // Footer
  const footerMsg = document.querySelector('.VPFooter .message') as HTMLElement
  const footerCopy = document.querySelector('.VPFooter .copyright') as HTMLElement
  if (footerMsg) footerMsg.textContent = t['footer.message']
  if (footerCopy) footerCopy.textContent = t['footer.copyright']

  document.documentElement.lang = lang
}

function switchLang(lang: Lang) {
  currentLang.value = lang
  localStorage.setItem('ah-lang', lang)
  applyTranslations(lang)
  setTimeout(() => applyTranslations(lang), 100)
  setTimeout(() => applyTranslations(lang), 300)
}

onMounted(() => {
  const saved = localStorage.getItem('ah-lang') as Lang | null
  if (saved && translations[saved]) {
    currentLang.value = saved
  }
  setTimeout(() => applyTranslations(currentLang.value), 200)
  setTimeout(() => applyTranslations(currentLang.value), 500)
})
</script>

<template>
  <div class="ah-lang-bar">
    <button
      v-for="lang in langs"
      :key="lang.code"
      class="ah-lang-pill"
      :class="{ active: lang.code === currentLang }"
      @click="switchLang(lang.code)"
    >
      <span class="ah-lang-short">{{ lang.short }}</span>
      <span class="ah-lang-label">{{ lang.label }}</span>
    </button>
  </div>
</template>

<style scoped>
.ah-lang-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
}

.ah-lang-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border: 1.5px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  line-height: 1.4;
}

.ah-lang-pill:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  transform: translateY(-1px);
}

.ah-lang-pill.active {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-1);
  color: #fff;
}

.ah-lang-pill.active .ah-lang-short {
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
}

.ah-lang-short {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-2);
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .ah-lang-label {
    display: none;
  }
  .ah-lang-pill {
    padding: 6px 10px;
  }
}
</style>
