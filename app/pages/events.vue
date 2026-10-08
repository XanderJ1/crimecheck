<script setup lang="ts">
useSeoMeta({ title: 'Events | Crime Check Foundation', description: 'Outreach programs, community forums, and advocacy campaigns across Ghana.' })
const prismic = usePrismic()
const { data: events, status, error, refresh } = await useAsyncData('events', async () => {
  const docs = await prismic.client.getAllByType('event', { fetchOptions: { signal: AbortSignal.timeout(10000) } })
  return docs.map(doc => ({ id: doc.id, ...doc.data }))
}, { default: () => [] })
// Ghana uses UTC. Include all events dated today and keep server/client grouping identical.
const today = useState('events-today', () => new Date().toISOString().slice(0, 10))
const groups = computed(() => {
  const dated = (events.value || []).filter(event => event.date)
  return [
    { title: 'Upcoming Events', items: dated.filter(event => event.date! >= today.value).sort((a, b) => a.date!.localeCompare(b.date!)), empty: 'No upcoming events at the moment. Check back soon.' },
    { title: 'Past Events', items: dated.filter(event => event.date! < today.value).sort((a, b) => b.date!.localeCompare(a.date!)), empty: 'No past events have been published yet.' },
    { title: 'Dates to be confirmed', items: (events.value || []).filter(event => !event.date), empty: '' },
  ]
})
function fmt(date: string) {
  return new Intl.DateTimeFormat('en-GH', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(date))
}
</script>
<template>
  <section class="pb-12">
    <AppPageIntro eyebrow="Events & gatherings" title="Come together for change." description="Explore outreach programmes, community forums, and advocacy campaigns across Ghana." />
    <p v-if="status === 'pending'" role="status" class="ccf-feedback">Loading events…</p>
    <div v-else-if="error" role="alert" class="ccf-feedback ccf-feedback-error">
      <p>We couldn’t load events. Please try again.</p>
      <button type="button" class="mt-4 rounded border border-current px-4 py-3" @click="refresh()">Retry events</button>
    </div>
    <template v-else>
      <template v-for="group in groups" :key="group.title">
        <section v-if="group.items.length || group.empty" class="ccf-content-section">
          <h2 class="ccf-section-title">{{ group.title }}</h2>
          <div v-if="group.items.length" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article v-for="event in group.items" :id="`event-${event.id}`" :key="event.id" class="ccf-media-card">
              <NuxtImg v-if="event.image?.url" :src="event.image.url" :alt="event.image.alt || ''" width="600" height="360" sizes="100vw md:50vw lg:33vw" loading="lazy" class="aspect-[5/3] w-full object-cover" />
              <div class="space-y-3 p-6">
                <h3 class="text-xl font-bold">{{ event.title || 'Foundation event' }}</h3>
                <p v-if="event.date" class="ccf-event-date"><time :datetime="event.date">{{ fmt(event.date) }}</time></p>
                <p v-else>Date to be confirmed</p>
                <p v-if="event.location" class="text-sm text-slate-600">{{ event.location }}</p>
                <details v-if="event.description">
                  <summary class="cursor-pointer py-3 font-semibold text-green-800">Event details<span class="sr-only">: {{ event.title }}</span></summary>
                  <p class="whitespace-pre-line leading-relaxed">{{ event.description }}</p>
                </details>
                <NuxtLink to="/#contact" class="inline-block py-3 text-green-800 underline">Contact us about this event</NuxtLink>
              </div>
            </article>
          </div>
          <p v-else class="ccf-feedback">{{ group.empty }}</p>
        </section>
      </template>
    </template>
  </section>
</template>
