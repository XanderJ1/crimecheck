<script setup lang="ts">
import Navbar from '~/components/app/Navbar.vue';
import Footer from "~/components/app/Footer.vue";
import TestNavbar from "~/components/app/TestNavbar.vue";

</script>

<template>
  <div class="bg-gray-100">
    <header>
      <TestNavbar color />
    </header>
    <main class="container mx-auto mt-20 px-4" role="main">
      <slot />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>