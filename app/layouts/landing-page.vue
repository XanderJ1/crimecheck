<script setup lang="ts">
import Navbar from "~/components/app/Navbar.vue";
import AppFooter from "~/components/app/Footer.vue";
</script>

<template>
  <main role="main">
    <slot />
  </main>
  <AppFooter />
</template>

<style scoped>
/* optional fine-tuning */
</style>
