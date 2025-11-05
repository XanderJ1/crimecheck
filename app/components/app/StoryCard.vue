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
  <div class="grid md:grid-cols-2 p-2 items-center gap-8 col-start-2" :class="{'': reversed}">
    <div class="flex flex-col row-start-2 md:row-start-1 md:ml-15 gap-4">
      <h3 class="font-bold text-xl mb-4">{{ title }}</h3>
      <p>{{story}}</p>
    </div>

    <img class="w-120 h-120 rounded-xl" :src="image" alt="" />
  </div>

</template>

<style scoped>

</style>