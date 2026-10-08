<script setup lang="ts">
import Modal from '~/components/app/Modal.vue'
useSeoMeta({ title: 'News | Crime Check Foundation', description: 'News and stories from our justice reform and humanitarian work across Ghana.', ogImage: 'https://crimecheckfoundationgh.org/images/logo.png' })
const prismic = usePrismic()
const { data: news, status, error, refresh } = await useAsyncData('news', async () => {
  const docs = await prismic.client.getAllByType('news', { fetchOptions: { signal: AbortSignal.timeout(10000) } })
  return docs.map(doc => ({ id: doc.id, title: doc.data.title || 'Foundation update', story: doc.data.story, image: doc.data.image }))
}, { default: () => [] })
const selectedId = ref<string | null>(null)
const selected = computed(() => news.value?.find(item => item.id === selectedId.value))
function closeModal() { selectedId.value = null }
</script>
<template>
  <section class="pb-12">
    <AppPageIntro eyebrow="News & stories" title="Voices worth listening to." description="Updates and stories from our work for justice, prison reform, and humanitarian support across Ghana." />
    <p v-if="status === 'pending'" role="status" class="ccf-feedback">Loading news…</p>
    <div v-else-if="error" role="alert" class="ccf-feedback ccf-feedback-error">
      <p>We couldn’t load the news. Please try again.</p>
      <button type="button" class="mt-4 rounded border border-current px-4 py-3" @click="refresh()">Retry news</button>
    </div>
    <div v-else-if="news?.length" class="grid gap-6 pb-12 sm:grid-cols-2 lg:grid-cols-3">
      <article v-for="item in news" :key="item.id" class="ccf-media-card ccf-news-card">
        <button type="button" class="flex h-full w-full flex-col text-left" aria-haspopup="dialog" @click="selectedId = item.id">
          <NuxtImg v-if="item.image?.url" :src="item.image.url" :alt="item.image.alt || ''" width="600" height="360" sizes="100vw sm:50vw lg:33vw" loading="lazy" class="aspect-[5/3] w-full object-cover" />
          <span class="block p-5 text-xl font-semibold text-slate-900">{{ item.title }}</span>
          <span class="mt-auto block px-5 pb-5 font-semibold text-green-800 underline underline-offset-4">Read story</span>
        </button>
      </article>
    </div>
    <p v-else role="status" class="py-10">No news has been published yet. Please check back for updates.</p>
    <Modal :show="!!selected" :close="closeModal" :title="selected?.title || 'News story'">
      <template v-if="selected">
        <NuxtImg v-if="selected.image?.url" :src="selected.image.url" :alt="selected.image.alt || ''" width="900" sizes="100vw md:800px" class="mb-6 max-h-96 w-full rounded-lg object-contain" />
        <PrismicRichText v-if="selected.story?.length" :field="selected.story" class="story-content" />
        <p v-else>More details will be available soon.</p>
      </template>
    </Modal>
  </section>
</template>
<style scoped>
.story-content :deep(p), .story-content :deep(ul), .story-content :deep(ol) { margin-block: 1rem; line-height: 1.7; }
.story-content :deep(a) { color: #1e40af; text-decoration: underline; }
.story-content :deep(ul) { list-style: disc; padding-left: 1.5rem; }
.story-content :deep(ol) { list-style: decimal; padding-left: 1.5rem; }
</style>
