<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  icon: String,
})
</script>

<template>
  <article class="initiative-card">
    <NuxtImg v-if="icon" loading="lazy" width="40" height="40" class="mb-6 h-10 w-10 object-contain" :src="icon" alt="" />
    <h3>{{ title }}</h3><p>{{ description }}</p>
    <NuxtLink to="/projects" class="text-link">Explore this work<span class="sr-only">: {{ title }}</span><span aria-hidden="true">&rarr;</span></NuxtLink>
  </article>
</template>
