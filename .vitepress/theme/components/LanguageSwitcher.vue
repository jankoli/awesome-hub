<script setup lang="ts">
import { ref, onMounted } from 'vue'

type Lang = 'zh-CN' | 'en' | 'ja' | 'ko' | 'ru'

const currentLang = ref<Lang>('zh-CN')

const langs: { code: Lang; label: string; short: string; gtl: string }[] = [
  { code: 'zh-CN', label: '中文', short: '中', gtl: 'zh-CN' },
  { code: 'en', label: 'English', short: 'EN', gtl: 'en' },
  { code: 'ja', label: '日本語', short: '日', gtl: 'ja' },
  { code: 'ko', label: '한국어', short: '한', gtl: 'ko' },
  { code: 'ru', label: 'Русский', short: 'RU', gtl: 'ru' },
]

// Google Translate language code mapping
const gtLangMap: Record<Lang, string> = {
  'zh-CN': 'zh-CN',
  'en': 'en',
  'ja': 'ja',
  'ko': 'ko',
  'ru': 'ru',
}

// UI translations (for elements Google Translate might miss or for instant UI switch)
const uiTranslations: Record<Lang, Record<string, string>> = {
  'zh-CN': {
    'nav.home': '首页',
    'nav.quickJump': '快速跳转',
    'nav.contributing': '贡献指南',
    'hero.text': '开源精选',
    'hero.tagline': '600+ 精选优质开源项目，涵盖前端、后端、AI、DevOps、数据库、移动开发、设计资源、效率工具全品类，助你发现好用的轮子。',
    'hero.action.explore': '👇 直接往下看 600+ 精选',
    'hero.action.guide': '贡献指南',
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
    'footer.message': 'Open source под MIT лицензией · Сделано с ❤️',
    'footer.copyright': '© 2026 Awesome Hub · Open Source',
    'search.placeholder': 'Поиск проектов...',
  },
}

function applyUITranslations(lang: Lang) {
  const t = uiTranslations[lang]
  if (!t) return

  // Nav items
  document.querySelectorAll('.VPNavBarMenuLink').forEach(el => {
    const text = el.textContent?.trim() || ''
    for (const [, v] of Object.entries(uiTranslations)) {
      if (v['nav.home'] === text) { el.textContent = t['nav.home']; break }
      if (v['nav.contributing'] === text) { el.textContent = t['nav.contributing']; break }
    }
  })

  // Quick jump dropdown
  document.querySelectorAll('.VPFlyout .button-text').forEach(el => {
    const text = el.textContent?.trim() || ''
    for (const [, v] of Object.entries(uiTranslations)) {
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

  // Search
  const searchEl = document.querySelector('.DocSearch-Button-Placeholder') as HTMLElement
  if (searchEl) searchEl.textContent = t['search.placeholder']

  // Footer
  const footerMsg = document.querySelector('.VPFooter .message') as HTMLElement
  const footerCopy = document.querySelector('.VPFooter .copyright') as HTMLElement
  if (footerMsg) footerMsg.textContent = t['footer.message']
  if (footerCopy) footerCopy.textContent = t['footer.copyright']
}

// ===== Google Translate integration =====
let gtLoaded = false

function loadGoogleTranslate() {
  if (gtLoaded) return
  // Add the Google Translate widget as a hidden element
  const existing = document.getElementById('google_translate_element')
  if (existing) {
    gtLoaded = true
    return
  }

  // Create hidden container for Google Translate
  const container = document.createElement('div')
  container.id = 'google_translate_element'
  container.style.cssText = 'position:absolute;left:-9999px;top:-9999px;opacity:0;pointer-events:none;'
  document.body.appendChild(container)

  // Load Google Translate script
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  document.head.appendChild(script)

  // Define init callback
  ;(window as any).googleTranslateElementInit = () => {
    new (window as any).google.translate.TranslateElement({
      pageLanguage: 'zh-CN',
      includedLanguages: 'en,ja,ko,ru,zh-CN',
      layout: 0,
      autoDisplay: false,
    }, 'google_translate_element')
    gtLoaded = true
  }

  gtLoaded = true
}

function setGoogleTranslateLang(lang: Lang) {
  if (lang === 'zh-CN') {
    // Restore original language - reload page to clear translation
    const cookieName = 'googtrans'
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.github.io;`
    // Also try to remove via the select
    const gtSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement
    if (gtSelect) {
      gtSelect.value = 'zh-CN'
      gtSelect.dispatchEvent(new Event('change', { bubbles: true }))
    }
    // Apply UI translations directly
    applyUITranslations('zh-CN')
    return
  }

  // Wait for Google Translate to be ready, then set language
  const trySetLang = (attempts: number) => {
    const gtSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement
    if (gtSelect) {
      gtSelect.value = gtLangMap[lang]
      gtSelect.dispatchEvent(new Event('change', { bubbles: true }))
      // Also apply UI translations as backup
      setTimeout(() => applyUITranslations(lang), 500)
    } else if (attempts > 0) {
      setTimeout(() => trySetLang(attempts - 1), 300)
    } else {
      // Fallback: just apply UI translations
      applyUITranslations(lang)
    }
  }
  trySetLang(10)
}

function switchLang(lang: Lang) {
  currentLang.value = lang
  localStorage.setItem('ah-lang', lang)

  // Apply UI translations immediately
  applyUITranslations(lang)

  // Use Google Translate for full page translation (including project descriptions)
  if (lang === 'zh-CN') {
    setGoogleTranslateLang('zh-CN')
  } else {
    loadGoogleTranslate()
    setTimeout(() => setGoogleTranslateLang(lang), 200)
  }
}

onMounted(() => {
  const saved = localStorage.getItem('ah-lang') as Lang | null
  if (saved && uiTranslations[saved]) {
    currentLang.value = saved
  }

  // Apply UI translations on load
  setTimeout(() => applyUITranslations(currentLang.value), 200)
  setTimeout(() => applyUITranslations(currentLang.value), 500)

  // If saved language is not Chinese, trigger Google Translate
  if (currentLang.value !== 'zh-CN') {
    setTimeout(() => {
      loadGoogleTranslate()
      setTimeout(() => setGoogleTranslateLang(currentLang.value), 500)
    }, 300)
  }
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

/* Hide Google Translate banner */
:global(.goog-te-banner-frame) { display: none !important; }
:global(.goog-tooltip) { display: none !important; }
:global(.goog-tooltip:hover) { display: none !important; }
:global(body { top: 0 !important; }) 
:global(.skiptranslate) { display: none !important; }

@media (max-width: 640px) {
  .ah-lang-label {
    display: none;
  }
  .ah-lang-pill {
    padding: 6px 10px;
  }
}
</style>
