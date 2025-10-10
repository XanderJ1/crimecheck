<script setup lang="ts">
import Navbar from '~/components/app/Navbar.vue';
import Footer from "~/components/app/Footer.vue";

</script>

<template>
    <div class="bg-gray-100">
      <Navbar color/>
      <main class="container mt-20">
        <NuxtPage />
      </main>
    </div>


  <Footer />
</template>