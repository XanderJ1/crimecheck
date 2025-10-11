<script setup lang="ts">
const router = useRouter()

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

function submit(e: Event) {
  e.preventDefault()
  const methodLabel = paymentMethod.value === 'momo' ? 'Mobile Money' : paymentMethod.value === 'card' ? 'Card' : 'Bank Transfer';
  router.push('/paystack-test')
  // alert(`Thank you, ${form.name || 'Donor'}!\nDonation amount: ${form.amount ? 'GHS ' + form.amount : '—'}\nMethod: ${methodLabel}\n(Integrate a payment gateway in production.)`)
}
</script>

<template>
  <section class="relative">
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white"></div>

    <!-- Hero -->
    <div class="max-w-5xl mx-auto px-4 pt-8 md:pt-12">
      <header class="text-center md:text-left mb-8">
        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">Support Our Mission</h1>
        <p class="mt-3 text-gray-600 max-w-2xl">Your generosity fuels justice reform, legal advocacy, and humanitarian relief across Ghana.</p>
      </header>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Donation Card -->
        <form @submit="submit" aria-labelledby="donation-form-title" class="lg:col-span-2 bg-white/90 backdrop-blur rounded-2xl shadow-lg ring-1 ring-gray-200 p-6 md:p-8 flex flex-col gap-5">
          <h2 id="donation-form-title" class="sr-only">Donation Form</h2>
          <!-- Preset amounts -->
          <fieldset class="space-y-2">
            <legend id="amount-legend" class="block text-sm font-medium text-gray-700 mb-2">Choose an amount</legend>
            <div role="radiogroup" aria-labelledby="amount-legend" class="flex flex-wrap gap-3">
              <template v-for="amt in presetAmounts" :key="amt">
                <input :id="`amount-${amt}`" class="sr-only" type="radio" name="donation-amount" :value="amt" v-model="selectedAmount" />
                <label :for="`amount-${amt}`"
                       :class="[
                         'cursor-pointer px-4 py-2 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-blue-400',
                         selectedAmount === amt ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                       ]">
                  GHS {{ amt }}
                </label>
              </template>
              <input id="amount-custom" class="sr-only" type="radio" name="donation-amount" value="custom" v-model="selectedAmount" />
              <label for="amount-custom"
                     :class="[
                       'cursor-pointer px-4 py-2 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-blue-400',
                       selectedAmount === 'custom' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                     ]">
                Custom
              </label>
            </div>
          </fieldset>

          <!-- Name -->
          <label class="flex flex-col gap-1">
            <span class="text-sm font-medium text-gray-700">Full Name</span>
            <input v-model="form.name" type="text" required
                   class="h-11 rounded-lg border-gray-300 bg-gray-50 px-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
                   placeholder="Jane Doe" />
          </label>

          <!-- Email -->
          <label class="flex flex-col gap-1">
            <span class="text-sm font-medium text-gray-700">Email</span>
            <input v-model="form.email" type="email" required
                   class="h-11 rounded-lg border-gray-300 bg-gray-50 px-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
                   placeholder="you@example.com" />
          </label>

          <!-- Amount -->
          <label class="flex flex-col gap-1">
            <span class="text-sm font-medium text-gray-700">Amount (GHS)</span>
            <input v-model="form.amount" type="number" min="1" step="0.01" required
                   class="h-11 rounded-lg border-gray-300 bg-gray-50 px-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
                   placeholder="100" />
          </label>

          <!-- Payment method -->
          <fieldset class="space-y-2">
            <legend class="block text-sm font-medium text-gray-700 mb-2">Payment Method</legend>
            <div class="flex flex-wrap gap-3">
              <input class="sr-only" type="radio" id="pm-momo" name="paymentMethod" value="momo" v-model="paymentMethod" />
              <label for="pm-momo"
                     :class="[
                       'cursor-pointer px-4 py-2 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-blue-400',
                       paymentMethod === 'momo' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                     ]">MTN MoMo</label>

              <input class="sr-only" type="radio" id="pm-card" name="paymentMethod" value="card" v-model="paymentMethod" />
              <label for="pm-card"
                     :class="[
                       'cursor-pointer px-4 py-2 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-blue-400',
                       paymentMethod === 'card' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                     ]">Card</label>

              <input class="sr-only" type="radio" id="pm-bank" name="paymentMethod" value="bank" v-model="paymentMethod" />
              <label for="pm-bank"
                     :class="[
                       'cursor-pointer px-4 py-2 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-blue-400',
                       paymentMethod === 'bank' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                     ]">Bank</label>
            </div>
          </fieldset>

          <!-- Message -->
          <label class="flex flex-col gap-1">
            <span class="text-sm font-medium text-gray-700">Message (optional)</span>
            <textarea v-model="form.message" rows="4"
                      class="rounded-lg border-gray-300 bg-gray-50 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
                      placeholder="A note with your donation..."></textarea>
          </label>

          <!-- Submit -->
          <button type="submit"
                  class="mt-2 inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-5 py-3 rounded-lg border border-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <i class="pi pi-lock text-sm opacity-90"></i>
            Donate Securely
          </button>
          <p class="text-xs text-gray-500">Note: This is a demo form. Connect a payment provider to process donations.</p>
        </form>

        <!-- Aside -->
        <aside class="bg-white/90 backdrop-blur rounded-2xl shadow-lg ring-1 ring-gray-200 p-6 md:p-8 flex flex-col gap-5">
          <h2 class="text-xl font-semibold">Other Ways to Give</h2>
          <ul class="space-y-2 text-gray-700">
            <li>
              <span class="block text-sm text-gray-500">Bank Transfer</span>
              <span class="font-medium">GCB Bank</span><br />
              <span class="text-sm">Acc: Crime Check Foundation</span><br />
              <span class="text-sm">Acc No: 00-0000000</span>
            </li>
            <li>
              <span class="block text-sm text-gray-500">Mobile Money</span>
              <span class="font-medium">MTN MoMo — 024 XXX XXXX</span>
            </li>
            <li>
              <span class="block text-sm text-gray-500">In‑kind donations</span>
              <span>Contact us for pickup arrangements.</span>
            </li>
          </ul>
          <NuxtLink to="/about" class="inline-flex items-center text-blue-700 hover:underline">Learn more about our initiatives</NuxtLink>
          <div class="flex items-center gap-2 text-xs text-gray-500">
            <i class="pi pi-shield"></i>
            <span>Your information is encrypted and kept private.</span>
          </div>
        </aside>
      </div>

      <!-- Impact strip -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 mb-16">
        <div class="rounded-xl bg-white shadow ring-1 ring-gray-200 p-4 text-center">
          <div class="text-2xl font-bold text-gray-900">10k+</div>
          <div class="text-xs text-gray-500">Lives impacted</div>
        </div>
        <div class="rounded-xl bg-white shadow ring-1 ring-gray-200 p-4 text-center">
          <div class="text-2xl font-bold text-gray-900">50+</div>
          <div class="text-xs text-gray-500">Cases supported</div>
        </div>
        <div class="rounded-xl bg-white shadow ring-1 ring-gray-200 p-4 text-center">
          <div class="text-2xl font-bold text-gray-900">20+</div>
          <div class="text-xs text-gray-500">Legal reforms</div>
        </div>
        <div class="rounded-xl bg-white shadow ring-1 ring-gray-200 p-4 text-center">
          <div class="text-2xl font-bold text-gray-900">100%</div>
          <div class="text-xs text-gray-500">Transparent use</div>
        </div>
      </div>
    </div>
  </section>
</template>
