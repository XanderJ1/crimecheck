<script setup lang="ts">
useSeoMeta({ title: 'Donation status | Crime Check Foundation', robots: 'noindex, nofollow' })
const route = useRoute()
const reference = computed(() => typeof route.query.reference === 'string' ? route.query.reference : '')
const { data, status, error, refresh } = await useFetch('/api/paystack-verify', {
  query: { reference }, server: false, retry: 0,
})
const complete = computed(() => data.value?.status === 'success')
const formattedAmount = computed(() => new Intl.NumberFormat('en-GH', { style: 'currency', currency: 'GHS' }).format((data.value?.amount || 0) / 100))
const outcome = computed(() => {
  switch (data.value?.status) {
    case 'failed': return 'Paystack reports that this payment failed.'
    case 'abandoned': return 'This checkout has not been completed.'
    case 'reversed': return 'Paystack reports that this payment was reversed.'
    default: return 'Your payment has not been confirmed yet. Check again before making another payment.'
  }
})
</script>
<template>
  <section class="mx-auto mt-12 max-w-2xl space-y-6 rounded-xl bg-white p-6 shadow md:p-10">
    <h1 class="text-3xl font-bold">Donation status</h1>
    <p v-if="status === 'pending' || status === 'idle'" role="status">Checking your donation with Paystack…</p>
    <p v-else-if="error" role="alert" class="text-red-800">{{ error.data?.statusMessage || 'We couldn’t confirm your donation. Please check again before making another payment.' }}</p>
    <div v-else-if="complete" role="status" class="space-y-3">
      <h2 class="text-2xl font-semibold text-green-800">Thank you for your donation</h2>
      <p>Your {{ formattedAmount }} payment has been confirmed by Paystack.</p>
    </div>
    <p v-else role="status">{{ outcome }}</p>
    <p v-if="reference" class="break-all text-sm">Reference: {{ reference }}</p>
    <button v-if="!complete" type="button" :disabled="status === 'pending'" class="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white disabled:opacity-60" @click="refresh()">Check again</button>
    <p>For help, call <a class="underline" href="tel:+233242074276">+233 242 074 276</a> and quote your reference.</p>
    <NuxtLink to="/donate" class="inline-block py-3 text-blue-800 underline">Return to donation options</NuxtLink>
  </section>
</template>
