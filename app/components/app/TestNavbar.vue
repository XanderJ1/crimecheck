<script setup>
import { ref } from 'vue'

const props = defineProps({
  color: Boolean,
})

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="mx-auto z-20 max-w-7xl px-4 flex items-center justify-between py-4">
    <!-- Logo -->
    <div>
      <NuxtLink to="/" class="font-bold text-white" @click="closeMobileMenu">
        <img class="w-15 md:w-20" src="/images/logo.png" alt="Crime Check Foundation Logo" />
      </NuxtLink>
    </div>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center text-xl gap-8" :class="color ? 'text-black' : 'text-white'">
      <NuxtLink to="/" class="font-bold hover:opacity-80 transition-opacity">Home</NuxtLink>
      <NuxtLink to="/projects" class="font-bold hover:opacity-80 transition-opacity">Projects</NuxtLink>
      <NuxtLink to="/about" class="font-bold hover:opacity-80 transition-opacity">About Us</NuxtLink>
      <NuxtLink to="/gallery" class="font-bold hover:opacity-80 transition-opacity">Gallery</NuxtLink>
      <NuxtLink to="/news" class="font-bold hover:opacity-80 transition-opacity">News</NuxtLink>
      <NuxtLink to="/donate" class="bg-blue-600 px-5 py-2 border border-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
        Donate
      </NuxtLink>
    </nav>

    <!-- Mobile Menu Button -->
    <button
        @click="toggleMobileMenu"
        class="md:hidden p-2 rounded-lg hover:bg-gray-100/10 transition-colors"
        :class="color ? 'text-black' : 'text-white'"
        aria-label="Toggle mobile menu"
        aria-expanded="isMobileMenuOpen"
    >
      <svg v-if="!isMobileMenuOpen" class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div
          v-if="isMobileMenuOpen"
          class="fixed inset-0 bg-black/50 z-40 md:hidden"
          @click="closeMobileMenu"
      ></div>
    </Transition>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <nav
          v-if="isMobileMenuOpen"
          class="fixed top-0 right-0 bottom-0 w-64 bg-white opacity-90 shadow-xl z-50 md:hidden"
      >
        <div class="flex flex-col h-full">
          <!-- Mobile Menu Header -->
          <div class="flex items-center justify-between p-4 border-b">
            <span class="font-bold text-gray-900">Menu</span>
            <button
                @click="closeMobileMenu"
                class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
            >
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Mobile Menu Links -->
          <div class="flex z-15 flex-col gap-1 p-4 flex-1">
            <NuxtLink
                to="/"
                class="px-4 py-3 rounded-lg text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
                @click="closeMobileMenu"
            >
              Home
            </NuxtLink>
            <NuxtLink
                to="/projects"
                class="px-4 py-3 rounded-lg text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
                @click="closeMobileMenu"
            >
              Projects
            </NuxtLink>
            <NuxtLink
                to="/about"
                class="px-4 py-3 rounded-lg text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
                @click="closeMobileMenu"
            >
              About Us
            </NuxtLink>
            <NuxtLink
                to="/events"
                class="px-4 py-3 rounded-lg text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
                @click="closeMobileMenu"
            >
              Events
            </NuxtLink>
            <NuxtLink
                to="/news"
                class="px-4 py-3 rounded-lg text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
                @click="closeMobileMenu"
            >
              News
            </NuxtLink>

            <!-- Donate Button in Mobile Menu -->
            <NuxtLink
                to="/donate"
                class="mt-4 px-4 py-3 rounded-lg bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 transition-colors"
                @click="closeMobileMenu"
            >
              Donate
            </NuxtLink>
          </div>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
/* Fade transition for overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide transition for mobile menu */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>