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
  <div class="grid md:grid-cols-2 p-2 items-center">
    <img class="flex w-130 rounded-xl justify-end" :src="image" alt="" />
      <div class="flex flex-col md:ml-15 gap-4">
      <h3 class="font-bold text-xl mb-4 mt-2">{{ title }}</h3>
      <p>{{story}}</p>
    </div>

  </div>

</template>

<style scoped>

</style>