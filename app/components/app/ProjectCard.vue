<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  image: String,
  reverse: Boolean,
})
</script>

<template>
  <div class="flex flex-col md:flex-row items-center gap-8" :class="{ 'md:flex-row-reverse': reverse }">
    <div class="md:w-1/2 flex-col gap-6 items-center">
      <h3 class="font bold text-2xl mb-20">{{title}}</h3>
      <p>{{ description }}</p>
    </div>
    <div class="md:w-1/2 flex-col gap-6 items-center">
      <img class="w-200 h-120 rounded " :src="image" alt="" />
    </div>
  </div>
</template>

<style scoped>

</style>