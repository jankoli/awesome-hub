<script setup lang="ts">
defineProps<{
  name: string
  github: string
  description: string
  lang?: string
  stars?: string
  updated?: string
  site?: string
}>()

const langClass = (lang?: string) => {
  if (!lang) return ''
  const map: Record<string, string> = {
    TypeScript: 'ah-lang-ts',
    TS: 'ah-lang-ts',
    JavaScript: 'ah-lang-js',
    JS: 'ah-lang-js',
    Python: 'ah-lang-py',
    PY: 'ah-lang-py',
    Go: 'ah-lang-go',
    Golang: 'ah-lang-go',
    Rust: 'ah-lang-rs',
    RS: 'ah-lang-rs',
    Java: 'ah-lang-java',
    Vue: 'ah-lang-vue',
    C: 'ah-lang-c',
    'C++': 'ah-lang-cpp',
    'C#': 'ah-lang-cs',
    CS: 'ah-lang-cs',
    Swift: 'ah-lang-swift',
    Kotlin: 'ah-lang-kt',
    KT: 'ah-lang-kt',
    Dart: 'ah-lang-dart',
    Ruby: 'ah-lang-rb',
    RB: 'ah-lang-rb',
    PHP: 'ah-lang-php',
    Shell: 'ah-lang-shell',
    Markdown: 'ah-lang-md',
    MD: 'ah-lang-md',
    JSON: 'ah-lang-json',
    SCSS: 'ah-lang-scss',
    CSS: 'ah-lang-scss',
  }
  return map[lang] || ''
}
</script>

<template>
  <div class="ah-project-card">
    <div class="ah-project-head">
      <a :href="github" target="_blank" rel="noopener noreferrer" class="ah-project-name">{{ name }}</a>
      <span v-if="lang" class="ah-lang-tag" :class="langClass(lang)">{{ lang }}</span>
    </div>
    <p class="ah-project-desc">{{ description }}</p>
    <div class="ah-project-meta">
      <span v-if="stars" class="ah-meta-item ah-meta-star">★ {{ stars }}</span>
      <span v-if="updated" class="ah-meta-item ah-meta-updated">🕐 {{ updated }}</span>
      <a v-if="site" :href="site" target="_blank" rel="noopener noreferrer" class="ah-site-link">官网 →</a>
    </div>
  </div>
</template>
