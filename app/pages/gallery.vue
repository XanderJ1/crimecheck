<script setup lang="ts">
import Navbar from '~/components/app/Navbar.vue'

useSeoMeta({
  title: 'Gallery | Crime Check Foundation',
  description:
      'Explore our gallery showcasing awareness campaigns, community outreach, school programs, and workshops across Ghana to advocate for prison reforms and justice.',
  ogTitle: 'Gallery | Crime Check Foundation',
  ogDescription:
      'See how Crime Check Foundation is making an impact through outreach, education, and corporate partnerships.',
  ogImage: 'https://crimecheckfoundationgh.org/images/logo.png',
  ogUrl: 'https://crimecheckfoundationgh.org/gallery',
  twitterCard: 'summary_large_image',
})



const prismic = usePrismic();
const { data: galleryGroups, status: galleryStatus, error: galleryError, refresh: refreshGallery } = await useAsyncData('gallery', async () => {
  const docs = await prismic.client.getAllByType('gallery', { fetchOptions: { signal: AbortSignal.timeout(10000) } })
  return docs.map((doc) => ({
    id: doc.id,
    title: doc.data.title,
    description: doc.data.description,
    images: doc.data.images,
  }))
}, { default: () => [] })

const { data: videos, status: videoStatus, error: videoError, refresh: refreshVideos } = await useAsyncData('videos', async () => {
  const docs = await prismic.client.getAllByType('videos', { fetchOptions: { signal: AbortSignal.timeout(10000) } });
  return docs.map((doc) => ({
    id: doc.id,
    title: doc.data.title,
    videoUrl: doc.data.video?.url || '',
    captionsUrl: doc.data.captions && 'url' in doc.data.captions ? doc.data.captions.url : '',
    transcript: doc.data.transcript,
  }));
}, { default: () => [] });
</script>

<template>

  <section class=" mx-auto  pb-16">
<AppPageIntro eyebrow="Gallery" title="Moments that tell our story." description="See our justice reform, prison support, and humanitarian work through photos and films from the field." />
    <!-- Gallery Groups -->
    <section class="ccf-content-section">
      <p v-if="galleryStatus === 'pending'" role="status" class="ccf-feedback col-span-full">Loading gallery…</p>
      <div v-else-if="galleryError" role="alert" class="ccf-feedback ccf-feedback-error col-span-full">
        <p>We couldn’t load the gallery.</p>
        <button type="button" class="mt-3 rounded border border-current px-4 py-3" @click="refreshGallery()">Retry gallery</button>
      </div>
      <p v-else-if="!galleryGroups?.length" role="status" class="ccf-feedback col-span-full">No photos have been published yet.</p>
      <div
          v-for="(group, index) in galleryGroups"
          :key="index"
          class="mb-20"
      >
        <!-- Section Header -->
        <div class="ccf-gallery-heading">
          <h2 class="text-3xl font-semibold mb-3 text-gray-900">
            {{ group.title }}
          </h2>
          <p class="text-slate-600 max-w-2xl leading-relaxed">
            {{ group.description }}
          </p>
        </div>

        <!-- Image Grid -->
        <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div
              v-for="(image, i) in group.images"
              :key="i"
              class="ccf-media-card"
          >
            <NuxtImg
                v-if="image.image?.url"
                :src="image.image.url"
                :alt="image.image.alt || image.title || ''"
                width="600" height="400" sizes="100vw sm:50vw lg:33vw" loading="lazy"
                class="w-full aspect-[4/3] object-cover"
            />
            <p
                v-if="image.title"
                class="p-5 text-slate-800 font-semibold"
            >
              {{ image.title }}
            </p>
          </div>

        </div>
      </div>
    </section>


    <section class="ccf-content-section border-t border-slate-200">
      <div class="ccf-gallery-heading">
        <h2 class="text-4xl font-bold mb-3">Videos</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Highlights from our events, workshops, and awareness campaigns.
        </p>
      </div>

      <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <p v-if="videoStatus === 'pending'" role="status" class="ccf-feedback col-span-full">Loading videos…</p>
        <div v-else-if="videoError" role="alert" class="ccf-feedback ccf-feedback-error col-span-full">
          <p>We couldn’t load videos.</p>
          <button type="button" class="mt-3 rounded border border-current px-4 py-3" @click="refreshVideos()">Retry videos</button>
        </div>
        <p v-else-if="!videos?.length" role="status" class="ccf-feedback col-span-full">No videos have been published yet.</p>
        <div
            v-for="(video, index) in videos"
            :key="video.id"
            class="ccf-media-card"
         >
          <video
              v-if="video.videoUrl"
              controls
              preload="none"
              :crossorigin="video.captionsUrl ? 'anonymous' : undefined"
              :aria-label="video.title || 'Foundation video'"
              class="w-full aspect-video object-contain bg-slate-900"
          >
            <source :src="video.videoUrl" type="video/mp4" />
            <track v-if="video.captionsUrl" kind="captions" :src="video.captionsUrl" srclang="en" label="English" default />
          </video>

          <div class="p-5">
            <h3 class="text-lg font-semibold">
              {{ video.title }}
            </h3>
            <details v-if="video.transcript?.length" class="mt-4 text-left">
              <summary class="cursor-pointer py-3 text-blue-800 underline">Read transcript</summary>
              <PrismicRichText :field="video.transcript" class="space-y-3 leading-relaxed" />
            </details>

          </div>
        </div>

      </div>
    </section>



  </section>

</template>
