import {  repositoryName } from "./slicemachine.config.json";
import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  nitro: {
      preset: process.env.NITRO_PRESET || 'node-server',
  },
    app: {
        head: {
            link: [
                {
                    key: 'canonical',
                    rel: 'canonical',
                    href: "https://crimecheckfoundationgh.org"
                },
                { rel: 'icon', type: 'image/png', href: '/images/logo.png' }
            ]
        }
    },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','primeicons/primeicons.css', '@fontsource/atkinson-hyperlegible/700.css', "@fontsource-variable/inter"],
  modules: ['@primevue/nuxt-module', '@nuxt/image', "@nuxtjs/prismic"],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  prismic: {
    endpoint: repositoryName
  }
})