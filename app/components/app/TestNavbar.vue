<script setup lang="ts">
defineProps<{ color?: boolean }>()
const route = useRoute()
const isMobileMenuOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const links = [
  { to: '/', label: 'Home' }, { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About Us' }, { to: '/gallery', label: 'Gallery' },
  { to: '/events', label: 'Events' }, { to: '/news', label: 'News' },
  { to: '/donate', label: 'Donate' }, { to: '/volunteer', label: 'Volunteer' },
]
function closeMenu(restoreFocus = false) {
  isMobileMenuOpen.value = false
  if (restoreFocus) menuButton.value?.focus()
}
function onFocusOut(event: FocusEvent) {
  if (!(event.currentTarget as HTMLElement).contains(event.relatedTarget as Node | null)) closeMenu()
}
watch(() => route.fullPath, () => closeMenu())
</script>
<template>
  <div class="site-navigation site-shell relative py-5" :class="color ? 'text-slate-900' : 'text-white'"
       @keydown.esc.stop.prevent="closeMenu(true)" @focusout="onFocusOut">
    <div class="flex items-center justify-between gap-4">
      <NuxtLink to="/" class="nav-brand" aria-label="Crime Check Foundation home" @click="closeMenu()">
        <img class="h-12 w-12 object-contain" src="/images/logo.png" width="64" height="64" alt="" /><span class="brand-name">Crime Check<small>Foundation Ghana</small></span>
      </NuxtLink>
      <nav aria-label="Main navigation" class="hidden xl:flex items-center gap-1">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to"
          class="inline-flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-semibold"
          :class="[link.to === '/donate' ? 'bg-green-700 text-white hover:bg-green-800' : 'hover:underline', route.path === link.to ? 'underline underline-offset-8 decoration-2' : '']">{{ link.label }}</NuxtLink>
      </nav>
      <button ref="menuButton" type="button" class="xl:hidden min-h-11 shrink-0 rounded-lg border border-current px-4 py-2 font-semibold"
        :aria-expanded="isMobileMenuOpen" aria-controls="mobile-navigation" @click="isMobileMenuOpen = !isMobileMenuOpen">{{ isMobileMenuOpen ? 'Close' : 'Menu' }}</button>
    </div>
    <nav v-show="isMobileMenuOpen" id="mobile-navigation" aria-label="Mobile navigation"
      class="mt-4 grid gap-2 rounded-lg bg-white p-4 text-slate-900 shadow-lg xl:hidden">
      <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="min-h-11 rounded-lg px-4 py-3 font-semibold"
        :class="[link.to === '/donate' ? 'bg-green-700 text-white' : 'hover:bg-slate-100', route.path === link.to ? 'underline underline-offset-4' : '']"
        @click="closeMenu()">{{ link.label }}</NuxtLink>
    </nav>
  </div>
</template>
