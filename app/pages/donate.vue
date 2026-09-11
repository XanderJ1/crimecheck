<script setup lang="ts">
import DonationForm from '~/components/app/DonationForm.vue'

useHead({
  title: 'Donate | Crime Check Foundation Ghana',
  meta: [
    { name: 'description', content: "Support Crime Check Foundation's justice reform and humanitarian initiatives in Ghana. Make a donation to impact lives today." },
    { property: 'og:title', content: 'Donate to Crime Check Foundation' },
    { property: 'og:description', content: 'Your donation helps drive justice reform and humanitarian support in Ghana.' },
    { property: 'og:type', content: 'website' },
  ],
})

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <DonationForm />
</template>
