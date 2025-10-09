<script setup lang="ts">
 const props = defineProps({
   title: {
     type: String,
   },
   message: String,
 })
</script>

<template>
  <div class="border border-gray-400 p-8 rounded-xl mb-5">
  <div class="flex gap-3 mb-4">
    <i class="bg-blue-500 border p-3 rounded-full border-blue-500"></i>
    <h4 class="font-bold text-xl">Our {{ props.title }}</h4>
  </div>
  <p>{{props.message}} </p>
</div>
</template>

<style scoped>

</style>