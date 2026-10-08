<script setup lang="ts">
import Navbar from '~/components/app/Navbar.vue';
import Footer from "~/components/app/Footer.vue";
import TestNavbar from "~/components/app/TestNavbar.vue";

</script>

<template>
  <div class="bg-[#faf9f6]">
    <header class="bg-white border-b border-slate-200">
      <TestNavbar color />
    </header>
    <main id="main-content" tabindex="-1" class="site-shell ccf-page-main" role="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>