<script setup lang="ts">
defineProps<{
  items: Array<{
    icon: string
    title: string
    description: string
    link: string
    count?: string
  }>
}>()
</script>

<template>
  <div class="ah-category-grid">
    <a
      v-for="cat in items"
      :key="cat.link"
      :href="cat.link"
      class="ah-category-card"
    >
      <div class="ah-category-icon"><span>{{ cat.icon }}</span></div>
      <h3>{{ cat.title }}</h3>
      <p>{{ cat.description }}</p>
      <span v-if="cat.count" class="ah-category-count"><span>{{ cat.count }}</span></span>
    </a>
  </div>
</template>
