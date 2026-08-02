<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-info-after>
      <LanguageSwitcher />
    </template>
  </Layout>
</template>
