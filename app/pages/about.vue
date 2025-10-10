<script setup lang="ts">

import Navbar from "~/components/app/Navbar.vue";

definePageMeta({
  layout: 'about-page',
})
</script>

<template>
  <main>
    <section class="bg-slate-800 text-white px-2">
      <Navbar />
        <h1 class="text-6xl font-bold text-center md:text-start mb-12 max-w-7xl mx-auto mt-18">About Us</h1>
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 justify-between items-center">
            <h3 class="text-2xl text-center md:text-start mb-8 pb-8 leading-relaxed">We are an NGO dedicated to justice reform and advocacy, crime prevention and support for vulnerable groups. We believe in building a world where everyone has the opportunity to thrive.</h3>
        </div>
    </section>
    <div class="px-2">
        <h2 class="text-5xl max-w-7xl mx-auto text-left mt-20  mb-8 ">Our Story</h2>
        <p class="text max-w-7xl mx-auto space-y-4 text-slate-600 text-lg leading-relaxed">CrimeCheck Foundation was born from a vision to transform how communities address crime and justice. We recognized that traditional approaches often fail the most vulnerable, and that lasting change requires both grassroots engagement and systemic reform. Our journey began with a simple belief: that everyone deserves safety, dignity, and the chance to build a better future. Today, we work across multiple fronts—from direct support services to policy advocacy—always keeping the needs of vulnerable populations at the heart of everything we do.</p>
    </div>

    <section class="max-w-7xl px-2 mx-auto">
      <h2 class="text-5xl max-w-7xl text-center mt-20 mb-10">Our Core Values</h2>

      <div class="grid md:grid-cols-4 gap-8 mx-auto">
        <AppValueCard title="Justice" image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/scale.svg" message="We advocate for fair and equitable treatment for all, especially those marginalized"/>
        <AppValueCard title="Compassion" image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/compassion.svg" message="We approach every individual with empathy, understanding their unique circumstances and challenges."/>
        <AppValueCard title="Empowerment" image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/scale.svg" message="We believe in giving people the tools and support to rebuild their lives and reach their full potential." />
        <AppValueCard title="Community" image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/globe.svg" message="We foster strong, supportive communities where everyone looks out for one another." />
      </div>
    </section>

    <section class="max-w-7xl px-2 mx-auto">
      <h2 class="text-4xl  mt-20 mb-10">Our Mission and Vision</h2>
      <div class="grid-cols-1 gap-8">
        <AppMisVis title="Mission" message="To prevent crime, advocate for justice reform, and provide comprehensive support to vulnerable groups through
        community-based programs, policy advocacy, and direct services that address the root causes of crime and inequality.
        "/>
        <AppMisVis title="Vision" message="A world where every person, regardless of their background or circumstances, has access to justice, safety, and
        the opportunity to thrive in supportive communities free from the cycle of crime and poverty."
        />
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4">
      <h2 class="text-4xl font-bold mt-20 mb-12">Timeline</h2>
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gray-300"></div>

        <!-- Timeline items -->
        <div class="space-y-8">
          <div class="relative flex gap-6">
            <!-- Green dot -->
            <div class="relative z-10 flex-shrink-0 w-4 h-4 rounded-full bg-green-500 mt-1"></div>

            <!-- Content card -->
            <div class="flex-1 bg-white rounded-lg shadow p-6 -mt-1">
              <p class="text-sm text-gray-500 mb-2">2015</p>
              <h3 class="text-lg font-semibold mb-3">Foundation Established</h3>
              <p class="text-gray-600 leading-relaxed">CrimeCheck Foundation was founded with a mission to support vulnerable groups affected by crime.</p>
            </div>
          </div>

          <div class="relative flex gap-6">
            <div class="relative z-10 flex-shrink-0 w-4 h-4 rounded-full bg-green-500 mt-1"></div>
            <div class="flex-1 bg-white rounded-lg shadow p-6 -mt-1">
              <p class="text-sm text-gray-500 mb-2">2017</p>
              <h3 class="text-lg font-semibold mb-3">First Community Program</h3>
              <p class="text-gray-600 leading-relaxed">Launched our first crime prevention workshop series, reaching over 500 community members.</p>
            </div>
          </div>

          <div class="relative flex gap-6">
            <div class="relative z-10 flex-shrink-0 w-4 h-4 rounded-full bg-green-500 mt-1"></div>
            <div class="flex-1 bg-white rounded-lg shadow p-6 -mt-1">
              <p class="text-sm text-gray-500 mb-2">2019</p>
              <h3 class="text-lg font-semibold mb-3">Our Launch of prisoners interview</h3>
              <p class="text-gray-600 leading-relaxed">CrimeCheck Foundation started going to prisons and interviewing inmates about their life stories.</p>
            </div>
          </div>

          <div class="relative flex gap-6">
            <div class="relative z-10 flex-shrink-0 w-4 h-4 rounded-full bg-green-500 mt-1"></div>
            <div class="flex-1 bg-white rounded-lg shadow p-6 -mt-1">
              <p class="text-sm text-gray-500 mb-2">2023</p>
              <h3 class="text-lg font-semibold mb-3">Justice Reform Advocacy</h3>
              <p class="text-gray-600 leading-relaxed">CrimeCheck Foundation was founded with a mission to support vulnerable groups affected by crime.</p>
            </div>
          </div>

          <div class="relative flex gap-6">
            <div class="relative z-10 flex-shrink-0 w-4 h-4 rounded-full bg-green-500 mt-1"></div>
            <div class="flex-1 bg-white rounded-lg shadow p-6 -mt-1">
              <p class="text-sm text-gray-500 mb-2">2023</p>
              <h3 class="text-lg font-semibold mb-3">Justice Reform Advocacy</h3>
              <p class="text-gray-600 leading-relaxed">CrimeCheck Foundation was founded with a mission to support vulnerable groups affected by crime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl px-2 mx-auto items-center mt-20 mb-16">
      <h2 class="text-4xl mt-20 mb-8">Meet Our Founder</h2>
      <div class="flex flex-col md:flex-row gap-6 items-center">
        <img class="rounded-xl"   width="1200"  quality="100"
                 height="800" src="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/ibrahim.jpeg" alt="" />
        <div class="flex flex-col gap-2">
          <h3 class="text-2xl mb-10">Ibrahim Oppong Kwarteng</h3>
          <h4 class="text-xl mb-4">Founder & Executive Director</h4>
          <p class="leading-6">
            Ibrahim Oppong Kwarteng founded CrimeCheck Foundation with a deep commitment to social justice and community
            empowerment. With extensive experience in criminology, social work, and advocacy, Ibrahim has dedicated their career to creating systemic change and supporting those affected by crime. His leadership has made and transformed CrimeCheck into a leading voice for justice reform and community safety.
          </p>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-2 mt-20 mb-16">
      <h2 class="text-4xl text-center mt-30 mb-15">Achievements</h2>
      <div class="flex flex-col md:flex-row gap-6 items-center">
        <NuxtImg class="h-100 w-120 rounded-xl" src="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/award1-1024x683.jpeg" alt="" />
        <div class="flex mx-4 flex-col gap-2">
          <div class="flex items-center gap-2 mb-4">
            <div class="bg-blue- border h-2 w-2 border-blue-600 bg-blue-600 p-2 rounded-full"></div>
            <h3 class="text-xl font-bold">2018</h3>
          </div>
          <p>CrimeCheck was recognized as the most reputable voice in the fight  for crime justice  in Ghana </p>
        </div>
      </div>
    </section>
  </main>
</template>