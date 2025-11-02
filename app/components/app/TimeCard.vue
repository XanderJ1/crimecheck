<script setup lang="ts">
const props = defineProps({
  year: String,
  highlight: String,
  event: String,
})
</script>

<template>
    <div class="flex flex-col gap-2 p-4 rounded-xl border border-gray-400">
      <h3 class="xl font-bold">2018</h3>
      <h4 class="bold font-bold">Our Launch</h4>
      <p>Crime Checkwas launched and we had our first event. </p>
    </div>
</template>

<style scoped>

</style>