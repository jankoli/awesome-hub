<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

type Lang = 'en' | 'zh-CN' | 'zh-TW' | 'ja'

const currentLang = ref<Lang>('zh-CN')
const isOpen = ref(false)

const langs: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'zh-CN', label: '简体中文', flag: '🇨🇳' },
  { code: 'zh-TW', label: '繁體中文', flag: '🇭🇰' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
]

const translations: Record<Lang, Record<string, string>> = {
  'en': {
    'nav.home': 'Home',
    'nav.quickJump': 'Quick Jump',
    'nav.contributing': 'Contributing',
    'hero.text': 'Open Source精选',
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
    'footer.copyright': '© 2026 Awesome Hub · Open Source精选',
    'search.placeholder': 'Search projects...',
  },
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
  'zh-TW': {
    'nav.home': '首頁',
    'nav.quickJump': '快速跳轉',
    'nav.contributing': '貢獻指南',
    'hero.text': '開源精選',
    'hero.tagline': '600+ 精選優質開源項目，涵蓋前端、後端、AI、DevOps、資料庫、行動開發、設計資源、效率工具全品類，助你發現好用的輪子。',
    'hero.action.explore': '👇 直接往下看 600+ 精選',
    'hero.action.guide': '貢獻指南',
    'cat.frontend': '🎨 前端開發',
    'cat.backend': '⚙️ 後端開發',
    'cat.ai': '🤖 AI / 機器學習',
    'cat.devops': '🚀 DevOps',
    'cat.database': '💾 資料庫',
    'cat.mobile': '📱 行動開發',
    'cat.design': '✨ 設計資源',
    'cat.productivity': '🛠️ 效率工具',
    'footer.message': '基於 MIT 協議開源 · 用 ❤️ 維護',
    'footer.copyright': '© 2026 Awesome Hub · 開源精選',
    'search.placeholder': '搜尋項目...',
  },
  'ja': {
    'nav.home': 'ホーム',
    'nav.quickJump': 'クイックジャンプ',
    'nav.contributing': '貢献ガイド',
    'hero.text': 'オープンソース厳選',
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
    'footer.copyright': '© 2026 Awesome Hub · オープンソース厳選',
    'search.placeholder': 'プロジェクトを検索...',
  },
}

function applyTranslations(lang: Lang) {
  const t = translations[lang]
  if (!t) return

  // Translate nav items
  document.querySelectorAll('.VPNavBarMenuLink').forEach(el => {
    const text = el.textContent?.trim() || ''
    if (text === '首页' || text === '首頁' || text === 'Home' || text === 'ホーム') {
      el.textContent = t['nav.home']
    } else if (text === '贡献指南' || text === '貢獻指南' || text === 'Contributing' || text === '貢献ガイド') {
      el.textContent = t['nav.contributing']
    }
  })

  // Translate "快速跳转" dropdown trigger
  document.querySelectorAll('.VPNavBarMenuGroup .button-text, .VPFlyout .button-text').forEach(el => {
    const text = el.textContent?.trim() || ''
    if (text.includes('快速跳转') || text.includes('快速跳轉') || text.includes('Quick Jump') || text.includes('ジャンプ')) {
      el.textContent = t['nav.quickJump']
    }
  })

  // Translate hero text
  const heroName = document.querySelector('.VPHero .name')
  const heroText = document.querySelector('.VPHero .text')
  const heroTagline = document.querySelector('.VPHero .tagline')
  const heroActions = document.querySelectorAll('.VPHero .VPButton')

  if (heroText) heroText.textContent = t['hero.text']
  if (heroTagline) heroTagline.textContent = t['hero.tagline']
  heroActions.forEach((btn, i) => {
    if (i === 0) btn.textContent = t['hero.action.explore']
    if (i === 1) btn.textContent = t['hero.action.guide']
  })

  // Translate category headings
  const headingMap: Record<string, string> = {
    '🎨': 'cat.frontend',
    '⚙️': 'cat.backend',
    '🤖': 'cat.ai',
    '🚀': 'cat.devops',
    '💾': 'cat.database',
    '📱': 'cat.mobile',
    '✨': 'cat.design',
    '🛠️': 'cat.productivity',
  }

  document.querySelectorAll('h2').forEach(el => {
    const text = el.textContent || ''
    for (const [emoji, key] of Object.entries(headingMap)) {
      if (text.includes(emoji)) {
        // Preserve the count suffix
        const countMatch = text.match(/\(\d+\)/)
        const count = countMatch ? ` ${countMatch[0]}` : ''
        el.innerHTML = el.innerHTML.replace(/<span[^>]*>.*?<\/span>/g, `<span>${t[key]}${count}</span>`)
        // Fallback: direct text replacement
        if (!el.innerHTML.includes('<span>')) {
          el.textContent = t[key] + count
        }
        break
      }
    }
  })

  // Translate search placeholder
  const searchInput = document.querySelector('.DocSearch-Button-Placeholder') as HTMLElement
  if (searchInput) {
    searchInput.textContent = t['search.placeholder']
  }

  // Translate footer
  const footerMsg = document.querySelector('.VPFooter .message')
  const footerCopyright = document.querySelector('.VPFooter .copyright')
  if (footerMsg) footerMsg.textContent = t['footer.message']
  if (footerCopyright) footerCopyright.textContent = t['footer.copyright']

  // Update html lang
  document.documentElement.lang = lang
}

function switchLang(lang: Lang) {
  currentLang.value = lang
  localStorage.setItem('ah-lang', lang)
  isOpen.value = false
  applyTranslations(lang)
  // Re-apply after Vue re-renders
  setTimeout(() => applyTranslations(lang), 100)
  setTimeout(() => applyTranslations(lang), 300)
}

onMounted(() => {
  const saved = localStorage.getItem('ah-lang') as Lang | null
  if (saved && translations[saved]) {
    currentLang.value = saved
  }
  // Apply after page load
  setTimeout(() => applyTranslations(currentLang.value), 200)
  setTimeout(() => applyTranslations(currentLang.value), 500)
})
</script>

<template>
  <div class="ah-lang-switcher">
    <button class="ah-lang-btn" @click="isOpen = !isOpen" :aria-expanded="isOpen">
      <span class="ah-lang-flag">{{ langs.find(l => l.code === currentLang)?.flag }}</span>
      <span class="ah-lang-label">{{ langs.find(l => l.code === currentLang)?.label }}</span>
      <svg class="ah-lang-arrow" :class="{ open: isOpen }" width="10" height="6" viewBox="0 0 10 6">
        <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <Transition name="ah-lang-dropdown">
      <ul v-if="isOpen" class="ah-lang-dropdown">
        <li v-for="lang in langs" :key="lang.code">
          <button
            :class="{ active: lang.code === currentLang }"
            @click="switchLang(lang.code)"
          >
            <span>{{ lang.flag }}</span>
            <span>{{ lang.label }}</span>
          </button>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.ah-lang-switcher {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.ah-lang-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.ah-lang-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.ah-lang-flag {
  font-size: 15px;
}

.ah-lang-arrow {
  transition: transform 0.2s ease;
  opacity: 0.6;
}

.ah-lang-arrow.open {
  transform: rotate(180deg);
}

.ah-lang-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 6px;
  padding: 6px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  list-style: none;
  z-index: 100;
  min-width: 150px;
}

.ah-lang-dropdown li {
  margin: 0;
}

.ah-lang-dropdown button {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--vp-c-text-1);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  text-align: left;
}

.ah-lang-dropdown button:hover {
  background: var(--vp-c-bg-soft);
}

.ah-lang-dropdown button.active {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-1);
  background-color: rgba(102, 126, 234, 0.1);
}

.ah-lang-dropdown-transition-enter-active,
.ah-lang-dropdown-transition-leave-active {
  transition: all 0.2s ease;
}

.ah-lang-dropdown-transition-enter-from,
.ah-lang-dropdown-transition-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

@media (max-width: 768px) {
  .ah-lang-label {
    display: none;
  }
  .ah-lang-btn {
    padding: 5px 8px;
  }
}
</style>
