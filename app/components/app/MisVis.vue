<script setup lang="ts">
 const props = defineProps({
   title: {
     type: String,
   },
   message: String,
 })
</script>

<template><article class="ccf-value-card"><p class="eyebrow">Our purpose</p><h3 class="text-2xl font-semibold mb-4">{{ title }}</h3><p>{{ message }}</p></article></template>
