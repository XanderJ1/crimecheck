<script setup lang="ts">

useSeoMeta({
  title: 'News | Meena Breast Cancer Foundation',
  description:
      'Explore our gallery showcasing breast cancer awareness campaigns, community outreach, school programs, and workshops across Ghana.',
  ogTitle: 'News | Meena Breast Cancer Foundation',
  ogDescription:
      'See how Meena Breast Cancer Foundation is making an impact through outreach, education, and corporate partnerships.',
  ogImage: '/social-share.jpg',
  ogUrl: 'https://www.meenabreastcancerfoundationgh.org/gallery',
  twitterCard: 'summary_large_image',
})

const prismic = usePrismic();
const { data: galleryGroups } = await useAsyncData('news', async () => {
  const docs = await prismic.client.getAllByType('news');
  return docs.map((doc) => ({
    id: doc.id,
    uid: doc.uid,
    title: doc.data.title,
    story: doc.data.story,
    image: doc.data.image, // usually has { url, alt, dimensions }
  }));
});


// Modal state
const isModalOpen = ref(false)
const selectedNews = ref(null)
const selectedNewsIndex = ref(0)

const openModal = (newsItem, index) => {
  selectedNews.value = newsItem
  selectedNewsIndex.value = index
  isModalOpen.value = true
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  selectedNews.value = null
  document.body.style.overflow = 'auto'
}

const nextNews = () => {
  if (selectedNewsIndex.value < galleryGroups.value.length - 1) {
    selectedNewsIndex.value++
    selectedNews.value = galleryGroups.value[selectedNewsIndex.value]
  }
}

const previousNews = () => {
  if (selectedNewsIndex.value > 0) {
    selectedNewsIndex.value--
    selectedNews.value = galleryGroups.value[selectedNewsIndex.value]
  }
}

// Keyboard navigation
const handleKeydown = (e) => {
  if (!isModalOpen.value) return

  if (e.key === 'Escape') closeModal()
  if (e.key === 'ArrowRight') nextNews()
  if (e.key === 'ArrowLeft') previousNews()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'auto'
})
</script>

<template>
  <section class="mx-auto pb-16">
    <Navbar />

    <!-- Header -->
    <section class="relative bg-gradient-to-r from-slate-800 to-slate-800 text-white py-20">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">News</h1>
          <p class="text-xl text-slate-300 leading-relaxed">
            Capturing moments of hope, resilience, and community as we fight breast cancer together across Ghana.
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery Groups -->
    <section class="max-w-7xl mx-auto px-4 py-20">
      <!-- Section Header -->
      <div class="text-center mb-10">
        <h2 class="text-3xl font-semibold mb-3 text-gray-900">
          News & Stories
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Latest news and inspiring stories from our mission
        </p>
      </div>

      <!-- Image Grid -->
      <div v-if="galleryGroups && galleryGroups.length > 0" class="flex gap-6">
        <div
            v-for="(newsItem, index) in galleryGroups"
            :key="newsItem.id"
            class="flex flex-col items-center  text-center cursor-pointer"
            @click="openModal(newsItem, index)"
        >
          <div class="relative w-100 rounded-xl">
            <NuxtImg
                v-if="newsItem.image?.url"
                :src="newsItem.image.url"
                :alt="newsItem.image?.alt || newsItem.title"
                class="w-120 h-72 mr-16 object-cover shadow-sm group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">

            </div>
          </div>
          <p class="mt-3 text-gray-800 font-semibold line-clamp-2">
            {{ newsItem.title }}
          </p>
        </div>
      </div>

      <!-- Debug info - remove this after testing -->
      <div v-else class="text-center py-10">
        <p class="text-gray-500">No news items found. Total items: {{ galleryGroups?.length || 0 }}</p>
      </div>
    </section>

    <!-- Modal -->
    <Teleport to="body">
      <Transition
          enter-active-class="transition-opacity duration-300"
          leave-active-class="transition-opacity duration-300"
          enter-from-class="opacity-0"
          leave-to-class="opacity-0"
      >
        <div
            v-if="isModalOpen && selectedNews"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            @click.self="closeModal"
        >
          <!-- Close Button -->
          <button
              @click="closeModal"
              class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close modal"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <!-- Previous Button -->
          <button
              v-if="selectedNewsIndex > 0"
              @click="previousNews"
              class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
              aria-label="Previous story"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <!-- Next Button -->
          <button
              v-if="selectedNewsIndex < galleryGroups.length - 1"
              @click="nextNews"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
              aria-label="Next story"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          <!-- Modal Content -->
          <div class="max-w-6xl w-full max-h-[90vh] overflow-hidden bg-white rounded-lg shadow-2xl">
            <div class="grid md:grid-cols-2 gap-0 h-full">
              <!-- Image Section -->
              <div class="relative bg-gray-100 min-h-[300px] md:min-h-[500px]">
                <NuxtImg
                    v-if="selectedNews.image?.url"
                    :src="selectedNews.image.url"
                    :alt="selectedNews.image?.alt || selectedNews.title"
                    class="w-full h-full object-cover"
                />
              </div>

              <!-- Story Section -->
              <div class="p-8 flex flex-col overflow-y-auto max-h-[90vh]">
                <div class="mb-4">
                  <span class="text-sm text-pink-600 font-semibold uppercase tracking-wide">
                    Story {{ selectedNewsIndex + 1 }} of {{ galleryGroups.length }}
                  </span>
                </div>

                <h3 class="text-3xl font-bold text-gray-900 mb-6">
                  {{ selectedNews.title }}
                </h3>

                <div class="prose prose-lg text-gray-700 leading-relaxed">
                  <template v-if="selectedNews.story">
                    <!-- If story is an array of rich text blocks -->
                    <template v-if="Array.isArray(selectedNews.story)">
                      <p v-for="(block, idx) in selectedNews.story" :key="idx">
                        {{ block.text }}
                      </p>
                    </template>
                    <!-- If story is already a string -->
                    <div v-else-if="typeof selectedNews.story === 'string'" v-html="selectedNews.story"></div>
                    <!-- If story is an object with text property -->
                    <p v-else-if="selectedNews.story.text">
                      {{ selectedNews.story.text }}
                    </p>
                    <!-- Fallback: try to stringify -->
                    <p v-else>
                      {{ JSON.stringify(selectedNews.story) }}
                    </p>
                  </template>
                  <p v-else class="text-gray-500 italic">
                    No story available for this item.
                  </p>
                </div>

                <!-- Navigation Dots -->
                <div class="mt-auto pt-8 flex gap-2 flex-wrap">
                  <button
                      v-for="(item, idx) in galleryGroups"
                      :key="item.id"
                      @click="selectedNewsIndex = idx; selectedNews = item"
                      :class="[
                        'w-3 h-3 rounded-full transition-all',
                        idx === selectedNewsIndex ? 'bg-pink-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                      ]"
                      :aria-label="`Go to story ${idx + 1}`"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.prose {
  max-width: none;
}

.prose p {
  margin-bottom: 1rem;
  line-height: 1.75;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>