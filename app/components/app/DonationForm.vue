<script setup lang="ts">
import { reactive, ref, computed, watch } from 'vue'
import { donationSubunits } from '~~/shared/utils/donation'

interface GivingMethod {
  label: string
  lines: string[]
}

const props = withDefaults(defineProps<{
  givingMethods?: GivingMethod[]
}>(), {
  givingMethods: () => [
    {
      label: 'Bank Transfer',
      lines: [
        'ADB Bank',
        'Acc: Crime Check Foundation',
        'Branch : Lapaz branch',
        'Acc No: 1141010138774101',
      ],
    },
    {
      label: 'Mobile Money',
      lines: [
        'MTN MoMo - 0248895381',
        'MTN MoMo - 0242074276',
      ],
    },
    {
      label: 'In-kind donations',
      lines: [
        'Contact us for arrangements.',
        '0242074276',
      ],
    },
  ],
})

const form = reactive({
  name: '',
  email: '',
  amount: '',
  message: '',
})

const presetAmounts = [50, 100, 200, 500]
const selectedAmount = computed<number | 'custom'>({
  get: () => presetAmounts.includes(Number(form.amount)) ? Number(form.amount) : 'custom',
  set: (value) => { form.amount = typeof value === 'number' ? String(value) : '' },
})

const loading = ref(false)
const error = ref<string | null>(null)
const result = ref<{ authorizationUrl: string; reference: string } | null>(null)
watch(form, () => { result.value = null })

async function initPayment() {
  if (loading.value) return
  loading.value = true
  error.value = null
  result.value = null
  const submittedForm = JSON.stringify(form)

  try {
    const amount = donationSubunits(form.amount)
    if (amount === null) {
      error.value = 'Enter an amount from GHS 1 to GHS 100,000 with up to two decimal places.'
      return
    }
    const res = await $fetch('/api/paystack-init', {
      method: 'POST',
      body: {
        email: form.email,
        amount,
        name: form.name,
        message: form.message,
      },
    })
    if (JSON.stringify(form) === submittedForm) result.value = res
    else error.value = 'Your details changed while checkout was opening. Please submit the updated details.'
  } catch (err: any) {
    error.value = err?.data?.statusMessage || 'We couldn’t open checkout. Please try again.'
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
        <form
          class="lg:col-span-2 bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 md:p-8 flex flex-col gap-5"
          @submit.prevent="initPayment"
        >
          <p class="text-sm text-slate-700">All fields are required except the message. Online donations: GHS 1–100,000. For larger gifts, please contact us.</p>
          <p class="text-sm"><NuxtLink to="/projects" class="text-blue-800 underline">Explore the projects your gift supports</NuxtLink>.</p>
          <fieldset>
            <legend class="block text-sm font-medium text-gray-700 mb-2">Choose an amount</legend>
            <div class="flex flex-wrap gap-3">
              <template v-for="amt in presetAmounts" :key="amt">
                <input :id="`amount-${amt}`" v-model="selectedAmount" name="donation-amount" type="radio" class="sr-only" :value="amt" />
                <label
                  :for="`amount-${amt}`"
                  :class="[
                    'cursor-pointer px-4 py-2 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-blue-400',
                    selectedAmount === amt ? 'bg-green-700 text-white border-green-700' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400',
                  ]"
                >
                  GHS {{ amt }}
                </label>
              </template>

              <input id="amount-custom" v-model="selectedAmount" name="donation-amount" class="sr-only" type="radio" value="custom" />
              <label
                for="amount-custom"
                :class="[
                  'cursor-pointer px-4 py-2 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-blue-400',
                  selectedAmount === 'custom' ? 'bg-green-700 text-white border-green-700' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400',
                ]"
              >
                Custom
              </label>
            </div>
          </fieldset>

          <label>
            <span class="text-sm font-medium text-gray-700">Full Name</span>
            <input
              v-model="form.name"
              autocomplete="name" name="name" maxlength="120"
              type="text"
              required
              class="h-11 w-full rounded-lg border border-gray-300 bg-white px-3 shadow-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Jane Doe"
            />
          </label>

          <label>
            <span class="text-sm font-medium text-gray-700">Email</span>
            <input
              v-model="form.email"
              autocomplete="email" name="email" maxlength="160"
              type="email"
              required
              class="h-11 w-full rounded-lg border border-gray-300 bg-white px-3 shadow-sm focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </label>

          <label>
            <span class="text-sm font-medium text-gray-700">Amount (GHS)</span>
            <input
              v-model="form.amount"
              type="number"
              min="1"
              max="100000"
              step="0.01"
              required
              class="h-11 w-full rounded-lg border border-gray-300 bg-white px-3 shadow-sm focus:ring-2 focus:ring-blue-400"
              placeholder="100"
            />
          </label>

          <label class="flex flex-col">
            <span class="text-sm mb-3 font-medium text-gray-700">Message (optional)</span>
            <textarea
              v-model="form.message"
              maxlength="2000"
              rows="3"
              class="rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-400"
              placeholder="A note with your donation..."
            ></textarea>
          </label>

          <button
            :disabled="loading"
            type="submit"
            class="mt-2 inline-flex items-center justify-center gap-2 bg-green-700 text-white font-semibold px-5 py-3 rounded-lg border border-green-700 hover:bg-green-800 disabled:opacity-50"
          >
            <i class="pi pi-lock text-sm opacity-90"></i>
            {{ loading ? 'Processing...' : 'Donate Securely' }}
          </button>

          <p class="text-sm text-gray-700">Payments are processed by Paystack. You can leave checkout before completing payment. <NuxtLink to="/privacy" class="underline">How we use your information</NuxtLink>.</p>

          <p v-if="error" role="alert" class="text-red-800 text-sm mt-2">{{ error }}</p>
          <p role="status" class="text-sm text-slate-700">{{ loading ? 'Opening Paystack checkout…' : '' }}</p>
          <div v-if="result?.authorizationUrl" class="mt-4 space-y-3 text-center">
            <p role="status">Checkout is ready. Your donation is not complete until Paystack confirms payment.</p>
            <a
              :href="result.authorizationUrl"
              class="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800"
            >
              Continue Payment
            </a>
            <p><NuxtLink :to="{ path: '/donation-result', query: { reference: result.reference } }" class="text-blue-800 underline">Already paid? Check this donation</NuxtLink></p>
          </div>
        </form>

        <aside class="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 md:p-8 flex flex-col gap-5">
          <h2 class="text-xl font-semibold">Other Ways to Give</h2>
          <ul class="space-y-2 text-gray-700">
            <li v-for="method in props.givingMethods" :key="method.label">
              <span class="block text-sm text-gray-500">{{ method.label }}</span>
              <template v-for="(line, index) in method.lines" :key="`${method.label}-${line}`">
                <span :class="index === 0 ? 'font-medium' : 'text-sm'">{{ line }}</span><br />
              </template>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>
<style scoped>
input[type='radio']:focus-visible + label {
  outline: 3px solid #1d4ed8;
  outline-offset: 3px;
}
</style>
