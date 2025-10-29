<script setup lang="ts">

useHead({
  title: 'Events & Outreach | Crime Check Foundation Ghana',
  meta: [
    {
      name: 'description',
      content: 'Discover upcoming and past events by Crime Check Foundation Ghana, including justice advocacy, humanitarian aid, and prison reform programs.',
    },
    { name: 'keywords', content: 'Crime Check Foundation, Ghana, justice reform events, humanitarian outreach, prison reform Ghana, vagrancy law forums' },
    { property: 'og:title', content: 'Events & Outreach | Crime Check Foundation Ghana' },
    { property: 'og:description', content: 'Join Crime Check Foundation events driving justice reform and humanitarian impact across Ghana.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' },

  ],
  link: [
    { rel: 'canonical', href: 'https://crimecheckfoundationgh.org/events' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "Crime Check Foundation Events",
        "description": "Justice reform, humanitarian outreach, and advocacy programs organized by Crime Check Foundation across Ghana.",
        "organizer": {
          "@type": "Organization",
          "name": "Crime Check Foundation",
          "url": "https://crimecheckfoundationgh.org"
        },
        "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
          "@type": "Place",
          "name": "Various locations across Ghana"
        }
      }),
    },
  ],
})


definePageMeta({
  layout: 'default',
})

// Simple in-page data for demonstration purposes.
// Replace with API data or content files when integrating a backend/CMS.
interface EventItem {
  id: number
  title: string
  date: string // ISO date
  location: string
  image?: string
  description: string
  cta?: { label: string; to: string }
}

const today = new Date()

const events = ref<EventItem[]>([
  {
    id: 1,
    title: 'Legal Aid Outreach – Kumasi Central Prison',
    date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14).toISOString(),
    location: 'Kumasi, Ashanti Region',
    image: 'https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/prisoners.jpg',
    description: 'Free legal screening and support for remand prisoners, including documentation and case follow-ups.',
    cta: { label: 'Volunteer', to: '/donate' }
  },
  {
    id: 2,
    title: 'Community Forum on Vagrancy Laws',
    date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30).toISOString(),
    location: 'Cape Coast, Central Region',
    image: 'https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/donate.jpeg',
    description: 'Public dialogue on the impact of vagrancy laws and pathways to reform with local leaders and citizens.',
    cta: { label: 'RSVP', to: '/donate' }
  },
  {
    id: 3,
    title: 'Reintegration Skills Workshop',
    date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 21).toISOString(),
    location: 'Accra, Greater Accra',
    image: 'https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/oppong.jpeg',
    description: 'Hands-on training to support successful reintegration for formerly incarcerated individuals.',
  },
  {
    id: 5,
    title: 'Legal Aid Outreach – Kumasi Central Prison',
    date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14).toISOString(),
    location: 'Kumasi, Ashanti Region',
    image: 'https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/prisoners.jpg',
    description: 'Free legal screening and support for remand prisoners, including documentation and case follow-ups.',
    cta: { label: 'Volunteer', to: '/donate' }
  }
])

const upcoming = computed(() =>
  events.value
    .filter(e => new Date(e.date) >= today)
    .sort((a, b) => +new Date(a.date) - +new Date(b.date))
)

const past = computed(() =>
  events.value
    .filter(e => new Date(e.date) < today)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
)

function fmt(d: string) {
  try {
    return new Date(d).toLocaleDateString(undefined, {
      weekday: 'short', day: '2-digit', month: 'short', year: 'numeric'
    })
  } catch {
    return d
  }
}
</script>

<template>
  <section class="relative">
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white"></div>

    <div class="max-w-6xl mx-auto px-4 pt-8 md:pt-12">
      <header class="mb-8 text-center md:text-left">
        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">Events</h1>
        <p class="mt-3 text-gray-600 max-w-2xl">Join our outreach programs, community forums, and advocacy campaigns across Ghana.</p>
        
      </header>

      <main class="grid lg:grid-cols-3 gap-8" role="main">
        <!-- Upcoming events list -->
        <section class="lg:col-span-3 space-y-6" aria-labelledby="upcoming-heading">
          <h2 id="upcoming-heading" class="text-xl font-semibold text-gray-900">Upcoming Events</h2>

          <div v-if="upcoming.length" class="grid sm:grid-cols-3 gap-6">
            <article v-for="event in upcoming" :key="event.id" class="bg-white/90 backdrop-blur rounded-2xl shadow-lg ring-1 ring-gray-200 overflow-hidden">
              <NuxtImg v-if="event.image" :src="event.image" alt="" class="h-40 w-full object-cover" />
              <div class="p-5 flex flex-col gap-2">
                <h3 class="text-lg font-bold text-gray-900">{{ event.title }}</h3>
                <p class="text-sm text-gray-600">{{ fmt(event.date) }} • {{ event.location }}</p>
                <p class="text-gray-700 text-sm mt-1">{{ event.description }}</p>
                <div class="mt-3">
                  <NuxtLink v-if="event.cta" :to="event.cta.to" class="inline-flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-lg bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <i class="pi pi-calendar-plus text-xs"></i>
                    {{ event.cta.label }}
                  </NuxtLink>
                </div>
              </div>
            </article>
          </div>
          <p v-else class="text-gray-600">No upcoming events at the moment. Check back soon.</p>
        </section>
        
      </main>

      <!-- Past events -->
      <section class="mt-12 mb-16" aria-labelledby="past-heading">
        <h2 id="past-heading" class="text-xl font-semibold text-gray-900">Past Events</h2>
        <div v-if="past.length" class="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article v-for="event in past" :key="event.id" class="bg-white rounded-xl shadow ring-1 ring-gray-200 overflow-hidden">
            <NuxtImg v-if="event.image" :src="event.image" alt="" class="h-36 w-full object-cover" />
            <div class="p-4">
              <h3 class="font-semibold text-gray-900">{{ event.title }}</h3>
              <p class="text-sm text-gray-600">{{ fmt(event.date) }} • {{ event.location }}</p>
              <p class="text-sm text-gray-700 mt-1 line-clamp-3">{{ event.description }}</p>
            </div>
          </article>
        </div>
        <p v-else class="text-gray-600 mt-2">No past events recorded yet.</p>
      </section>
    </div>
  </section>
</template>
