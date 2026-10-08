<script setup lang="ts">

const props = defineProps({
  title: String,
  image: String,
  story: String,
  name: String,
  reversed: Boolean,
})
</script>

<template>
  <article class="ccf-story-card" >
    <img loading="lazy" :src="image" alt="" width="800" height="600" />
    <div><h3>{{ title }}</h3><p>{{ story }}</p></div>
  </article>
</template>
