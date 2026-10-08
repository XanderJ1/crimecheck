<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; description: string }>()
</script>

<template>
  <header class="ccf-page-intro">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h1>{{ title }}</h1>
    <p class="ccf-page-description">{{ description }}</p>
    <div v-if="$slots.default" class="ccf-page-actions"><slot /></div>
  </header>
</template>
