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
    site: {
        url: 'https://crimecheckfoundationgh.org',
        name: 'Crime Check Foundation Ghana',
        description: 'Transforming lives through restoring justice — view our projects, stories, and events.',
    },

    sitemap: {
        strictNuxtContentPaths: true,
        sources: [
            { type: 'pages' }, // automatically generate URLs for your Nuxt pages
        ],
    },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','primeicons/primeicons.css', '@fontsource/atkinson-hyperlegible/700.css', "@fontsource-variable/inter"],
  modules: ['@primevue/nuxt-module', '@nuxtjs/seo', '@nuxt/image', "@nuxtjs/prismic"],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  css: {
      devSourcemap: false,
  },
  },

  prismic: {
    endpoint: repositoryName
  }
})