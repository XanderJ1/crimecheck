<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  image: String,
  reverse: Boolean,
})
</script>

<template>
  <article class="ccf-programme" :class="{ 'ccf-programme-reverse': reverse }">
    <img loading="lazy" :src="image" alt="" width="800" height="600" />
    <div><h3>{{ title }}</h3><p>{{ description }}</p></div>
  </article>
</template>
