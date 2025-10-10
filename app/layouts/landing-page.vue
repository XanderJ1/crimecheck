<script setup lang="ts">
import Navbar from "~/components/app/Navbar.vue";
import AppFooter from "~/components/app/Footer.vue";
</script>

<template>

      <slot />
      <AppFooter />
</template>

<style scoped>
/* optional fine-tuning */
</style>