<script setup lang="ts">
import TestNavbar from './TestNavbar.vue'
defineProps<{ color?: boolean }>()
</script>
<template><TestNavbar :color="color" /></template>
