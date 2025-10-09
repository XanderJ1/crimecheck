<script setup lang="ts">
import Navbar from "~/components/app/Navbar.vue";
import AppFooter from "~/components/app/Footer.vue";
</script>

<template>
<div class="relative bg-[url('/assets/images/people.jpg')] bg-center bg-cover h-screen">
  <Navbar />
  <slot />
  <AppFooter />
</div>

</template>

<style scoped>
/* optional fine-tuning */
</style>
