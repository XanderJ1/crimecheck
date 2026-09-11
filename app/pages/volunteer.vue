<script setup lang="ts">
import { reactive, ref } from 'vue'

useHead({
  title: 'Volunteer | Crime Check Foundation Ghana',
  meta: [
    {
      name: 'description',
      content: 'Volunteer with Crime Check Foundation Ghana to support justice reform, prison outreach, humanitarian aid, and community advocacy.',
    },
    { property: 'og:title', content: 'Volunteer with Crime Check Foundation' },
    { property: 'og:description', content: 'Join Crime Check Foundation as a volunteer and help advance justice reform and humanitarian support in Ghana.' },
    { property: 'og:type', content: 'website' },
  ],
  link: [
    { rel: 'canonical', href: 'https://crimecheckfoundationgh.org/volunteer' },
  ],
})

definePageMeta({
  layout: 'default',
})

const opportunities = [
  {
    title: 'Prison Outreach',
    description: 'Support visits, donations, reintegration programs, and follow-up care for incarcerated and formerly incarcerated people.',
  },
  {
    title: 'Legal Advocacy',
    description: 'Help with research, community education, documentation, and public awareness around justice reform initiatives.',
  },
  {
    title: 'Community Support',
    description: 'Assist with humanitarian outreach, health support drives, education support, and village or street charity programs.',
  },
  {
    title: 'Media & Storytelling',
    description: 'Contribute photography, video, writing, design, or social media support to amplify stories of transformation.',
  },
]

const form = reactive({
  name: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
})

const loading = ref(false)
const error = ref<string | null>(null)
const success = ref<string | null>(null)

async function submitVolunteerApplication() {
  loading.value = true
  error.value = null
  success.value = null

  try {
    const response = await $fetch<{ id: string; message: string }>('/api/volunteer', {
      method: 'POST',
      body: form,
    })

    success.value = `${response.message}. Reference: ${response.id}`
    form.name = ''
    form.email = ''
    form.phone = ''
    form.interest = ''
    form.message = ''
  } catch (err: any) {
    error.value = err?.data?.message || err?.message || 'Unable to submit your application right now.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="relative -mx-4 -mt-20 bg-slate-900 text-white">
    <div class="max-w-7xl mx-auto px-4 py-20 md:py-28">
      <div class="max-w-3xl">
        <p class="text-sm font-semibold uppercase tracking-wide text-blue-300">Volunteer</p>
        <h1 class="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
          Give your time to restore dignity and hope.
        </h1>
        <p class="mt-5 text-lg text-slate-300 leading-relaxed">
          Join Crime Check Foundation's work in justice reform, prison support, humanitarian aid, and community advocacy across Ghana.
        </p>
      </div>
    </div>
  </section>

  <section class="max-w-7xl mx-auto py-16">
    <div class="grid lg:grid-cols-2 gap-10 items-start">
      <div>
        <h2 class="text-3xl font-bold text-gray-900">Ways to Help</h2>
        <p class="mt-3 text-gray-600 leading-relaxed">
          Volunteers can support the foundation in the field, online, or behind the scenes. Choose the area that best matches your skills and availability.
        </p>

        <div class="mt-8 grid sm:grid-cols-2 gap-5">
          <article
            v-for="opportunity in opportunities"
            :key="opportunity.title"
            class="bg-white rounded-lg shadow ring-1 ring-gray-200 p-5"
          >
            <h3 class="font-bold text-lg text-gray-900">{{ opportunity.title }}</h3>
            <p class="mt-2 text-sm text-gray-600 leading-relaxed">{{ opportunity.description }}</p>
          </article>
        </div>
      </div>

      <form
        class="bg-white rounded-lg shadow-lg ring-1 ring-gray-200 p-6 md:p-8 flex flex-col gap-5"
        @submit.prevent="submitVolunteerApplication"
      >
        <div>
          <h2 class="text-2xl font-bold text-gray-900">Volunteer Application</h2>
          <p class="mt-2 text-sm text-gray-600">Send your details and the team will follow up with next steps.</p>
        </div>

        <label>
          <span class="text-sm font-medium text-gray-700">Full Name</span>
          <input
            v-model="form.name"
            name="name"
            type="text"
            required
            class="mt-1 h-11 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Jane Doe"
          />
        </label>

        <label>
          <span class="text-sm font-medium text-gray-700">Email</span>
          <input
            v-model="form.email"
            name="email"
            type="email"
            required
            class="mt-1 h-11 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
          />
        </label>

        <label>
          <span class="text-sm font-medium text-gray-700">Phone</span>
          <input
            v-model="form.phone"
            name="phone"
            type="tel"
            class="mt-1 h-11 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="+233 ..."
          />
        </label>

        <label>
          <span class="text-sm font-medium text-gray-700">Area of Interest</span>
          <select
            v-model="form.interest"
            name="interest"
            required
            class="mt-1 h-11 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select an area</option>
            <option>Prison Outreach</option>
            <option>Legal Advocacy</option>
            <option>Community Support</option>
            <option>Media & Storytelling</option>
            <option>General Volunteering</option>
          </select>
        </label>

        <label class="flex flex-col">
          <span class="text-sm font-medium text-gray-700">Tell us about your availability or skills</span>
          <textarea
            v-model="form.message"
            name="message"
            rows="4"
            required
            class="mt-1 rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Share how you would like to help..."
          ></textarea>
        </label>

        <button
          :disabled="loading"
          type="submit"
          class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
        >
          {{ loading ? 'Sending...' : 'Send Application' }}
        </button>

        <p v-if="success" class="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
          {{ success }}
        </p>
        <p v-if="error" class="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {{ error }}
        </p>
      </form>
    </div>
  </section>
</template>
