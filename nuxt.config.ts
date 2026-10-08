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
                {
                    innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KVZ75HQ3');`,
                    tagPriority: 'critical'
                }
            ],
            noscript: [
                {
                    innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KVZ75HQ3" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
                    tagPosition: 'bodyOpen'
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
