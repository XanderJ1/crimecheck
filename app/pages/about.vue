<script setup lang="ts">

import Navbar from "~/components/app/Navbar.vue";
import TestNavbar from "~/components/app/TestNavbar.vue";
import Footer from "~/components/app/Footer.vue";

useHead({
  title: 'About Us | Crime Check Foundation Ghana',
  meta: [
    { name: 'description', content: 'Learn about Crime Check Foundation, our story, mission, vision, and advocacy for justice reform and support for vulnerable groups in Ghana.' },
    { property: 'og:title', content: 'About Crime Check Foundation' },
    { property: 'og:description', content: 'Discover the story and values behind our fight for justice and compassion across Ghana.' },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'canonical', href: 'https://crimecheckfoundationgh.org/about' }
  ]
})


definePageMeta({
  layout: 'about',
})
</script>

<template>
  <header class="bg-white border-b border-slate-200"><TestNavbar color /></header>
  <main id="main-content" tabindex="-1" class="site-shell ccf-about">
    <AppPageIntro eyebrow="About the foundation" title="Dignity is where we begin." description="We work for justice reform, crime prevention, and practical support for vulnerable people across Ghana." />
    <div class="ccf-about-story">
        <h2 class="ccf-section-title">Our Story</h2>
        <p class="ccf-reading-copy">Crime Check Foundation was born from a vision to transform how communities address crime and justice. We recognized that traditional approaches often fail the most vulnerable, and that lasting change requires both grassroots engagement and systemic reform. Our journey began with a simple belief: that everyone deserves safety, dignity, and the chance to build a better future. Today, we work across multiple fronts—from direct support services to policy advocacy—always keeping the needs of vulnerable populations at the heart of everything we do.</p>
    </div>

    <section class="ccf-content-section">
      <h2 class="ccf-section-title">Our Core Values</h2>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <AppValueCard title="Justice" image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/scale.svg" message="We advocate for fair and equitable treatment for all, especially those marginalized"/>
        <AppValueCard title="Compassion" image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/compassion.svg" message="We approach every individual with empathy, understanding their unique circumstances and challenges."/>
        <AppValueCard title="Empowerment" image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/scale.svg" message="We believe in giving people the tools and support to rebuild their lives and reach their full potential." />
        <AppValueCard title="Community" image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/globe.svg" message="We foster strong, supportive communities where everyone looks out for one another." />
      </div>
    </section>

    <section class="ccf-content-section">
      <h2 class="ccf-section-title">Our Mission and Vision</h2>
      <div class="grid gap-5 md:grid-cols-2">
        <AppMisVis title="Mission" message="To prevent crime, advocate for justice reform, and provide comprehensive support to vulnerable groups through
        community-based programs, policy advocacy, and direct services that address the root causes of crime and inequality.
        "/>
        <AppMisVis title="Vision" message="A world where every person, regardless of their background or circumstances, has access to justice, safety, and
        the opportunity to thrive in supportive communities free from the cycle of crime and poverty."
        />
      </div>
    </section>

    <section class="ccf-content-section ccf-journey">
      <h2 class="ccf-section-title">Our Journey</h2>
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gray-300"></div>

        <div class="space-y-6">
          <!-- 2015 -->
          <div class="relative flex gap-6">
            <div class="relative z-10 flex-shrink-0 w-4 h-4 rounded-full bg-green-600 mt-1"></div>
            <div class="min-w-0 flex-1 bg-white rounded-lg border border-slate-200 p-6">
              <p class="text-sm text-gray-500 mb-2">2015</p>
              <h3 class="text-xl font-semibold mb-3">Foundation Established</h3>
              <p class="text-gray-700 leading-relaxed">
                Crime Check Foundation (CCF) was founded by Ibrahim Oppong Kwarteng to advocate for justice reform, support marginalized individuals, especially prisoners, petty offenders and the underprivileged.
              </p>
            </div>
          </div>

          <!-- 2017 -->
          <div class="relative flex gap-6">
            <div class="relative z-10 flex-shrink-0 w-4 h-4 rounded-full bg-green-600 mt-1"></div>
            <div class="min-w-0 flex-1 bg-white rounded-lg border border-slate-200 p-6">
              <p class="text-sm text-gray-500 mb-2">2017</p>
              <h3 class="text-xl font-semibold mb-3">Petty Offenders Project</h3>
              <p class="text-gray-700 leading-relaxed">
                Launched the <strong>Petty Offenders Project</strong>, which raises funds to secure the release of prisoners jailed for minor offences.
              </p>
            </div>
          </div>

          <!-- 2019 -->
          <div class="relative flex gap-6">
            <div class="relative z-10 flex-shrink-0 w-4 h-4 rounded-full bg-green-600 mt-1"></div>
            <div class="min-w-0 flex-1 bg-white rounded-lg border border-slate-200 p-6">
              <p class="text-sm text-gray-500 mb-2">2019</p>
              <h3 class="text-xl font-semibold mb-3">Life in Prison Series</h3>
              <p class="text-gray-700 leading-relaxed">
                CCF launched the <strong>Life in Prison</strong> documentary series, sharing raw stories of inmates across Ghana. The series highlights flaws in the justice system and has become a national voice for prison reform.
              </p>
            </div>
          </div>

          <!-- 2021 -->
          <div class="relative flex gap-6">
            <div class="relative z-10 flex-shrink-0 w-4 h-4 rounded-full bg-green-600 mt-1"></div>
            <div class="min-w-0 flex-1 bg-white rounded-lg border border-slate-200 p-6">
              <p class="text-sm text-gray-500 mb-2">2021</p>
              <h3 class="text-xl font-semibold mb-3">Health Check Series</h3>
              <p class="text-gray-700 leading-relaxed">
                Under its <strong>Health Check</strong> program, CCF provides medical aid to patients who cannot afford treatment — including life-saving surgeries for cancer and tumour victims.
              </p>
            </div>
          </div>

          <!-- 2023 -->
          <div class="relative flex gap-6">
            <div class="relative z-10 flex-shrink-0 w-4 h-4 rounded-full bg-green-600 mt-1"></div>
            <div class="min-w-0 flex-1 bg-white rounded-lg border border-slate-200 p-6">
              <p class="text-sm text-gray-500 mb-2">2023</p>
              <h3 class="text-xl font-semibold mb-3">Justice Reform Advocacy</h3>
              <p class="text-gray-700 leading-relaxed">
                CCF intensified advocacy for the <strong>Alternative Sentencing Bill</strong> and justice reforms to replace short prison terms for minor crimes with community service — promoting fairness and rehabilitation.
              </p>
            </div>
          </div>

          <!-- 2025 -->
          <div class="relative flex gap-6">
            <div class="relative z-10 flex-shrink-0 w-4 h-4 rounded-full bg-green-600 mt-1"></div>
            <div class="min-w-0 flex-1 bg-white rounded-lg border border-slate-200 p-6">
              <p class="text-sm text-gray-500 mb-2">2025</p>
              <h3 class="text-xl font-semibold mb-3">Digital Awareness & Global Reach</h3>
              <p class="text-gray-700 leading-relaxed">
                Today, Crime Check Foundation continues to expand through digital media and international partnerships, amplifying the voices of the vulnerable and inspiring global action for justice and compassion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="ccf-content-section ccf-founder">
      <h2 class="ccf-section-title">Meet Our Founder</h2>
      <div class="ccf-founder-grid">
        <img loading="lazy" class="ccf-founder-photo"   width="1200" src="/images/oppong2.jpg" alt="" />
        <div class="ccf-founder-copy">
          <h3 class="text-2xl font-semibold">Ibrahim Oppong Kwarteng</h3>
          <h4 class="text-sm font-semibold uppercase tracking-wide text-green-800 mb-5">Founder & Executive Director</h4>
          Ibrahim Oppong Kwarteng, the Executive Director of Crime Check Foundation, CCF is a journalist with the Ghana Broadcasting Corporation, GBC. He is also the Ambassador Extraordinaire of Ghana Prisons - a position conferred on him by the Prisons Service Council in 2015, and the award presented to him by His Excellency, President John Dramani Mahama.
          He holds a Bachelor's Degree in English from the University of Cape Coast, a Master's Degree in English from the University of Ghana, and a Master's Degree in International Journalism from Brunel University, London as a Chevening Scholar.
          Mr Kwarteng recently completed his PhD in Migration Studies at the University of Ghana, Legon.
          <p>Through his Crime Check Foundation, CCF has brought monumental changes in Ghana's Criminal Justice System by releasing hundreds of prisoners under the Foundation's Petty Offenders Project and re-integrated most of them into society under the organization's Ex-convict Reintegration Project.
          </p>
          <p>The Foundation's Health Check Series, General Charity Series, Educational Support Series, Street and Village Charity Series and related humanitarian relief initiatives have brought immense relief to the poor, the needy and the vulnerable across Ghana.
          </p>
          <p>
          His advocacy for the passage of the Non-Custodial Sentencing and the Narcotics Control Commission Bills into law and other human rights interventions have led to collaborations between Crime Check Foundation and the UNODC,OSIWA, ILO, and USAID.
          </p>
          <p>Mr Kwarteng is the recipient of several awards,including Best GJA Journalists for Court and Crime reporting 2020, Best GJA Journalist for COVID reporting, 2021, Advocacy Journalist of the year 2019, and Forklex Media Award, Gold Category for Philanthropic journalism, 2021. He was also named as one of the 100 most impactful change makers in Ghana in 2024.</p>
        </div>
      </div>
    </section>

    <section class="ccf-content-section">
      <h2 class="ccf-section-title">Achievements</h2>
      <div class="flex flex-col md:flex-row gap-6 items-center">
        <NuxtImg loading="lazy" class="w-full max-w-lg h-auto rounded-lg" src="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/award1-1024x683.jpeg" alt="" />
        <div class="flex mx-4 flex-col gap-2">
          <div class="flex items-center gap-2 mb-4">
            <div class="bg-blue- border h-2 w-2 border-blue-600 bg-blue-600 p-2 rounded-full"></div>
            <h3 class="text-xl font-bold">2018</h3>
          </div>
          <p>Crime Check was recognized as the most reputable voice in the fight  for crime justice  in Ghana </p>
        </div>
      </div>
    </section>
  </main>
</template>
