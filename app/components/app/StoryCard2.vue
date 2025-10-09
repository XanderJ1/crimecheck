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
  <div class="grid grid-cols-2 p-2 items-center gap-8">
    <img class="w-120 rounded-xl" :src="image" alt="" />
    <div class="flex flex-col ml-15 gap-4">
      <h3>{{ title }}</h3>
      <p>{{story}}</p>
      <h4>{{ name }}</h4>
    </div>

  </div>

</template>

<style scoped>

</style>