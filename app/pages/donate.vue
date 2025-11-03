<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useRouter, useHead } from '#imports'

const router = useRouter()

// SEO setup
useHead({
  title: 'Donate | Crime Check Foundation Ghana',
  meta: [
    { name: 'description', content: "Support Crime Check Foundation’s justice reform and humanitarian initiatives in Ghana. Make a donation to impact lives today." },
    { property: 'og:title', content: 'Donate to Crime Check Foundation' },
    { property: 'og:description', content: 'Your donation helps drive justice reform and humanitarian support in Ghana.' },
    { property: 'og:type', content: 'website' }
  ]
})

definePageMeta({
  layout: 'default',
})

// ✅ Donation form data
const form = reactive({
  name: '',
  email: '',
  amount: '',
  message: ''
})

const presetAmounts = [50, 100, 200, 500]
const selectedAmount = ref<number | 'custom' | null>(null)
const paymentMethod = ref<'momo' | 'card' | 'bank'>('momo')

watch(selectedAmount, (val) => {
  if (typeof val === 'number') {
    form.amount = String(val)
  }
})

// ✅ Paystack integration
const loading = ref(false)
const error = ref<string | null>(null)
const result = ref<any>(null)

async function initPayment(e: Event) {

  e.preventDefault()
  loading.value = true
  error.value = null
  result.value = null

  try {
    const koboAmount = Number(form.amount) * 100 // Paystack uses lowest currency unit
    const res = await $fetch('/api/paystack-init', {
      method: 'POST',
      body: {
        email: form.email,
        amount: koboAmount,
        name: form.name,
        message: form.message
      },
    })
    result.value = res
  } catch (err: any) {
    error.value = err?.data?.message || err?.message || 'Payment initialization failed'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="relative">
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white"></div>

    <div class="max-w-5xl mx-auto px-4 pt-8 md:pt-12">
      <header class="text-center md:text-left mb-8">
        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Support Our Mission
        </h1>
        <p class="mt-3 text-gray-600 max-w-2xl">
          Your generosity fuels justice reform, legal advocacy, and humanitarian relief across Ghana.
        </p>
      </header>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Donation + Paystack Form -->
        <form @submit="initPayment"
              class="lg:col-span-2 bg-white/90 backdrop-blur rounded-2xl shadow-lg ring-1 ring-gray-200 p-6 md:p-8 flex flex-col gap-5">
          <fieldset>
            <legend class="block text-sm font-medium text-gray-700 mb-2">Choose an amount</legend>
            <div class="flex flex-wrap gap-3">
              <template v-for="amt in presetAmounts" :key="amt">
                <input :id="`amount-${amt}`" type="radio" class="sr-only" v-model="selectedAmount" :value="amt" />
                <label :for="`amount-${amt}`"
                       :class="[
                         'cursor-pointer px-4 py-2 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-blue-400',
                         selectedAmount === amt ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                       ]">
                  GHS {{ amt }}
                </label>
              </template>

              <input id="amount-custom" class="sr-only" type="radio" v-model="selectedAmount" value="custom" />
              <label for="amount-custom"
                     :class="[
                       'cursor-pointer px-4 py-2 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-blue-400',
                       selectedAmount === 'custom' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                     ]">
                Custom
              </label>
            </div>
          </fieldset>

          <!-- Inputs -->
          <label>
            <span class="text-sm font-medium text-gray-700">Full Name</span>
            <input v-model="form.name" type="text" required
                   class="h-11 w-full rounded-lg border-gray-300 bg-gray-50 px-3 shadow-sm focus:ring-2 focus:ring-blue-400"
                   placeholder="Jane Doe" />
          </label>

          <label>
            <span class="text-sm font-medium text-gray-700">Email</span>
            <input v-model="form.email" type="email" required
                   class="h-11 w-full rounded-lg border-gray-300 bg-gray-50 px-3 shadow-sm focus:ring-2 focus:ring-blue-400"
                   placeholder="you@example.com" />
          </label>

          <label>
            <span class="text-sm font-medium text-gray-700">Amount (GHS)</span>
            <input v-model="form.amount" type="number" min="1" step="0.01" required
                   class="h-11 w-full rounded-lg border-gray-300 bg-gray-50 px-3 shadow-sm focus:ring-2 focus:ring-blue-400"
                   placeholder="100" />
          </label>

          <label class="flex flex-col">
            <span class="text-sm mb-3 font-medium text-gray-700">Message (optional)</span>
            <textarea v-model="form.message" rows="3"
                      class="rounded-lg border-gray-300 bg-gray-50 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-400"
                      placeholder="A note with your donation..."></textarea>
          </label>

          <!-- Submit -->
          <button :disabled="loading" type="submit"
                  class="mt-2 inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-5 py-3 rounded-lg border border-blue-600 hover:bg-blue-700 disabled:opacity-50">
            <i class="pi pi-lock text-sm opacity-90"></i>
            {{ loading ? 'Processing...' : 'Donate Securely' }}
          </button>

          <p class="text-xs text-gray-500">Note: Payments are securely processed via Paystack.</p>

          <!-- Error / Result -->
          <p v-if="error" class="text-red-600 text-sm mt-2">{{ error }}</p>
          <div v-if="result?.data?.authorization_url" class="mt-4 text-center">
            <a :href="result.data.authorization_url" target="_blank"
               class="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
              Continue Payment
            </a>
          </div>
        </form>

        <!-- Sidebar -->
        <aside class="bg-white/90 backdrop-blur m- rounded-2xl shadow-lg ring-1 ring-gray-200 p-6 md:p-8 flex flex-col gap-5">
          <h2 class="text-xl font-semibold">Other Ways to Give</h2>
          <ul class="space-y-2 text-gray-700">
            <li>
              <span class="block text-sm text-gray-500">Bank Transfer</span>
              <span class="font-medium">ADB Bank</span><br />
              <span class="text-sm">Acc: Crime Check Foundation</span><br />
              <span class="text-sm">Branch : Lapaz branch</span><br />

              <span class="text-sm">Acc No: 1141010138774101</span>
            </li>
            <li>
              <span class="block text-sm text-gray-500">Mobile Money</span>
              <span class="font-medium">MTN MoMo - 0248895381</span><br />

              <span class="font-medium">MTN MoMo - 0242074276</span>
            </li>
            <li>
              <span class="block text-sm text-gray-500">In-kind donations</span>
              <span>Contact us for arrangements.</span><br />
              <span class="font-medium">0242074276 </span>

            </li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>
