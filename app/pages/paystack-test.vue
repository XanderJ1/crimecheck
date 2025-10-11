<script setup lang="ts">
const form = reactive({
  email: 'customer@email.com',
  amount: '500000', // Paystack expects the lowest currency unit
})

const loading = ref(false)
const error = ref<string | null>(null)
const result = ref<any>(null)

async function initPayment(e: Event) {
  e.preventDefault()
  loading.value = true
  error.value = null
  result.value = null
  try {
    const res = await $fetch('/api/paystack-init', {
      method: 'POST',
      body: { email: form.email, amount: form.amount },
    })
    result.value = res
  } catch (err: any) {
    error.value = err?.data?.message || err?.message || 'Request failed'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="max-w-xl mx-auto py-10">
    <h1 class="text-2xl font-bold mb-4">Paystack Initialize (Test)</h1>
    <form @submit="initPayment" class="space-y-3">
      <label class="block">
        <span class="text-sm">Email</span>
        <input v-model="form.email" type="email" required class="w-full h-10 px-3 border rounded" />
      </label>
      <label class="block">
        <span class="text-sm">Amount (lowest unit)</span>
        <input v-model="form.amount" type="number" min="1" required class="w-full h-10 px-3 border rounded" />
      </label>
      <button :disabled="loading" type="submit" class="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50">
        {{ loading ? 'Initializing…' : 'Initialize Payment' }}
      </button>
    </form>

    <div v-if="error" class="mt-4 text-red-600">Error: {{ error }}</div>

    <div v-if="result" class="mt-6 space-y-2">
      <p class="text-green-700" v-if="result.status">Status: {{ result.status }}</p>
      <p v-if="result.message">Message: {{ result.message }}</p>
      <div v-if="result.data?.authorization_url" class="mt-2">
        <a :href="result.data.authorization_url" target="_blank" class="text-blue-700 underline">Open Checkout</a>
      </div>
      <details class="mt-4">
        <summary class="cursor-pointer">Raw response</summary>
        <pre class="bg-gray-100 p-3 rounded overflow-auto text-xs">{{ result }}</pre>
      </details>
    </div>
  </section>
</template>
