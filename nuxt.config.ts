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
            htmlAttrs: { lang: 'en' },
          script: [
            { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-5NKWRYBZ2N' },
            {
              innerHTML: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-5NKWRYBZ2N');`
            }
          ],
            link: [
                { rel: 'icon', type: 'image/png', href: '/images/logo.png' }
            ]
        }
    },
    site: {
        url: 'https://crimecheckfoundationgh.org',
        name: 'Crime Check Foundation Ghana',
        description: 'Transforming lives through restoring justice — view our projects, stories, and events.',
    },

    sitemap: { exclude: ['/paystack-test', '/donation-result', '/preview'] },
    routeRules: {
      '/paystack-test': { redirect: { to: '/donate', statusCode: 301 } },
      '/donation-result': { robots: 'noindex, nofollow', headers: { 'Cache-Control': 'no-store', 'Referrer-Policy': 'no-referrer' } },
      '/api/paystack-verify': { headers: { 'Cache-Control': 'no-store' } },
    },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','primeicons/primeicons.css', '@fontsource/atkinson-hyperlegible/700.css', "@fontsource-variable/inter"],
  modules: ['@primevue/nuxt-module', '@nuxtjs/seo', '@nuxt/image', "@nuxtjs/prismic"],
  image: { domains: ['s3.eu-north-1.amazonaws.com', 'images.prismic.io'] },
  // Share images are explicit assets; no page uses the generated-image service.
  ogImage: { enabled: false },

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
