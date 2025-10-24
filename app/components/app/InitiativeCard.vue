<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  icon: String,
})
</script>

<template>
<div class="flex flex-col md:basis-1/4 items-center rounded justify-center p-8 border border-gray-300">
  <NuxtImg class="mb-4" :src="icon" alt="human" />
  <div class="flex flex-col gap-3">
    <h3 class="font-bold text-center text-xl">{{title}}</h3>
    <p class="text-center">{{description}}</p>
    <NuxtLink to="/projects" class="text-xl text-center text-blue-500">Learn more</NuxtLink>
  </div>
</div>
</template>

<style scoped>

</style>