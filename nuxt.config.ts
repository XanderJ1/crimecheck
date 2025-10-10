import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    nitro: {
        preset: 'node-server'
    },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','primeicons/primeicons.css', '@fontsource/atkinson-hyperlegible/700.css', "@fontsource-variable/inter"],
  modules: ['@primevue/nuxt-module', '@nuxt/image'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})