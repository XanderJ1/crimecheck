<script setup lang="ts">
useSeoMeta({
  title: 'Gallery | Crime Check Foundation',
  description:
      'Explore our gallery showcasing awareness campaigns, community outreach, school programs, and workshops across Ghana to advocate for prison reforms and justice.',
  ogTitle: 'Gallery | Meena Breast Cancer Foundation',
  ogDescription:
      'See how Crime Check Foundation is making an impact through outreach, education, and corporate partnerships.',
  ogImage: '/social-share.jpg',
  ogUrl: 'https://www.meenabreastcancerfoundationgh.org/gallery',
  twitterCard: 'summary_large_image',
})



const prismic = usePrismic();
const { data: galleryGroups } = await useAsyncData('gallery', async () => {
  const docs = await prismic.client.getAllByType('gallery')
  return docs.map((doc) => ({
    id: doc.id,
    title: doc.data.title,
    description: doc.data.description,
    images: doc.data.images,
  }))
})

console.log(galleryGroups.value)
const { data: videos } = await useAsyncData('videos', async () => {
  const docs = await prismic.client.getAllByType('videos');
  return docs.map((doc) => ({
    id: doc.id,
    title: doc.data.title,
    videoUrl: doc.data.video?.url || '',
  }));
});

console.log(galleryGroups.value);
</script>

<template>

  <section class=" mx-auto  pb-16">
    <Navbar />
    <!-- Header -->
    <section class="relative bg-gradient-to-r from-slate-800 to-slate-800 text-white py-20">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">Our Gallery</h1>
          <p class="text-xl text-white leading-relaxed">
            Capturing moments of hope, resilience, and community as we fight breast cancer together across Ghana.
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery Groups -->
    <section class="max-w-7xl mx-auto px-4 py-20">
      <div
          v-for="(group, index) in galleryGroups"
          :key="index"
          class="mb-20"
      >
        <!-- Section Header -->
        <div class="text-center mb-10">
          <h2 class="text-3xl font-semibold mb-3 text-gray-900">
            {{ group.title }}
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            {{ group.description }}
          </p>
        </div>

        <!-- Image Grid -->
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <div
              v-for="(image, i) in group.images"
              :key="i"
              class="flex flex-col items-center text-center"
          >
            <NuxtImg
                :src="image.image.url"
                :alt="image.image.alt || image.title"
                class="rounded-xl w-full h-72 object-cover shadow-sm hover:scale-105 transition-transform duration-300"
            />
            <p
                v-if="image.title"
                class="mt-3 text-gray-800 font-semibold"
            >
              {{ image.title }}
            </p>
          </div>

        </div>
      </div>
    </section>


    <section class="max-w-7xl mx-auto px-4 py-20 border-t border-gray-200">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-3">Videos</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Highlights from our events, workshops, and awareness campaigns.
        </p>
      </div>

      <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <div
            v-for="(video, index) in videos"
            :key="video.id"
            class="relative bg-white rounded-xl shadow hover:shadow-lg transition-shadow overflow-hidden"
         >
          <video
              v-if="video.videoUrl"
              controls
              class="w-full h-64 object-cover rounded-t-xl"
          >
            <source :src="video.videoUrl" type="video/mp4" />
          </video>

          <div class="p-4 text-center">
            <h3 class=" ">
              {{ video.title }}
            </h3>

          </div>
        </div>

      </div>
    </section>



  </section>

</template>