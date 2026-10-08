<script setup>

import { reactive, ref } from 'vue'
import TestimonialCard from "~/components/app/TestimonialCard.vue";
import InitiativeCard from "~/components/app/InitiativeCard.vue";
import Navbar from "~/components/app/Navbar.vue";
import TestNavbar from "~/components/app/TestNavbar.vue";

useHead({
  title: 'Crime Check Foundation Ghana | Justice Reform and Humanitarian Aid',
  meta: [
    {
      name: 'description',
      content:
          'Crime Check Foundation advocates for prison reform, justice transparency, and humanitarian support in Ghana. Learn about our key initiatives and impact.',
    },
    { name: 'keywords', content: 'Crime Check Foundation, Ghana, justice reform, prison reform, humanitarian support, vagrancy laws, USAID' },
    { property: 'og:title', content: 'Crime Check Foundation Ghana' },
    { property: 'og:description', content: 'Driving justice reform and supporting vulnerable lives in Ghana.' },
    { property: 'og:image', content: 'https://crimecheckfoundationgh.org/images/oppong.jpeg' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
})


definePageMeta({
  layout: 'landing-page',
})

const contactForm = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const contactLoading = ref(false)
const contactError = ref(null)
const contactSuccess = ref(null)

async function submitContactForm() {
  if (contactLoading.value) return
  contactLoading.value = true
  contactError.value = null
  contactSuccess.value = null

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: contactForm,
    })

    contactSuccess.value = `${response.message}. Reference: ${response.id}`
    contactForm.name = ''
    contactForm.email = ''
    contactForm.phone = ''
    contactForm.subject = ''
    contactForm.message = ''
  } catch (err) {
    contactError.value = err?.data?.statusMessage || err?.data?.message || 'Unable to send your message right now.'
  } finally {
    contactLoading.value = false
  }
}
</script>

<template>
  <header class="home-hero" role="banner">
    <TestNavbar />
    <section class="site-shell ccf-hero-content" aria-labelledby="hero-heading">
      <p class="eyebrow text-emerald-200">Justice. Dignity. A second chance.</p>
      <h1 id="hero-heading">A fairer future.<br>For every life.</h1>
      <p class="hero-description">Standing with people overlooked by the justice system. We advocate for prison reform and support vulnerable communities across Ghana.</p>
      <div class="flex flex-wrap gap-4">
        <NuxtLink to="/donate" class="action-primary">Support our work <span aria-hidden="true">&rarr;</span></NuxtLink>
        <NuxtLink to="/about" class="action-outline">Meet the foundation</NuxtLink>
      </div>
      <div class="hero-footnote"><span aria-hidden="true" class="h-2 w-2 rounded-full bg-emerald-300"></span> Rooted in Ghana. Committed to human dignity.</div>
    </section>
  </header>

  <section id="main-content" tabindex="-1" class="site-shell section-space">
    <div class="section-heading">
      <div><p class="eyebrow">What we stand for</p><h2>Justice begins with<br>seeing the person.</h2></div>
      <p>Behind every case is a life. Our work brings together legal advocacy, practical support, and the belief that everyone deserves dignity.</p>
    </div>
    <div class="impact-grid">
      <figure class="impact-photo"><img loading="lazy" src="/images/donate_prisons.jpg" alt="Crime Check Foundation's prison outreach" width="800" height="600"><figcaption>Supporting people. Strengthening communities.</figcaption></figure>
      <div class="impact-list">
        <article><span class="impact-number">01</span><div><h3>Prison support</h3><p>Resources and rehabilitation support for incarcerated people working towards a second chance.</p></div></article>
        <article><span class="impact-number">02</span><div><h3>Legal advocacy</h3><p>Challenging laws that criminalize poverty and advocating for a fairer justice system.</p></div></article>
        <article><span class="impact-number">03</span><div><h3>Humanitarian care</h3><p>Practical help for vulnerable people and families, delivered with care and compassion.</p></div></article>
        <NuxtLink to="/projects" class="text-link">Explore our projects <span aria-hidden="true">&rarr;</span></NuxtLink>
      </div>
    </div>
  </section>

  <section class="initiative-section section-space">
    <div class="site-shell">
      <div class="section-heading"><div><p class="eyebrow">Our focus</p><h2>Different paths.<br>A shared purpose.</h2></div><NuxtLink to="/projects" class="text-link">View all projects <span aria-hidden="true">&rarr;</span></NuxtLink></div>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <InitiativeCard title="Prison reform" description="Improving prison conditions and supporting rehabilitation." icon="/images/reform.svg" />
        <InitiativeCard title="Decriminalizing poverty" description="Challenging vagrancy laws that marginalize vulnerable communities." icon="/images/book.svg" />
        <InitiativeCard title="Justice advocacy" description="Championing a fairer system through advocacy and public education." icon="/images/scale.svg" />
        <InitiativeCard title="Philanthropy" description="Helping people meet essential needs through generous giving." icon="/images/globe.svg" />
      </div>
    </div>
  </section>

  <section class="site-shell section-space">
    <div class="section-heading"><div><p class="eyebrow">Voices of support</p><h2>Our work, in their words.</h2></div></div>
    <div class="grid gap-5 lg:grid-cols-3">
      <TestimonialCard message="The wonderful projects that Crime Check is doing are transforming and impacting lives across Ghana." name="Alhassan Suhuyini" role="MP, Tamale North" image="/images/tamale.jpg" />
      <TestimonialCard message="I congratulate Ibrahim Oppong Kwarteng. He has made strides in changing lives with Crime Check." name="Roseland Gaisie" role="Judicial Service" image="/images/gaisie.jpg" />
      <TestimonialCard message="Help us change the law" name="Professor Mike Oquaye" role="Former Speaker of Parliament" image="/images/speaker.jpg" />
    </div>
  </section>

  <section class="site-shell gallery-section">
    <div class="section-heading"><div><p class="eyebrow">From the field</p><h2>People at the heart of it all.</h2></div><NuxtLink to="/gallery" class="text-link">Visit the gallery <span aria-hidden="true">&rarr;</span></NuxtLink></div>
    <div class="home-gallery">
      <img loading="lazy" src="/images/donate.jpeg" alt="Students gathered beside donated food and drinks" width="600" height="800">
      <img loading="lazy" src="/images/inmate_gift.png" alt="Presentation of a boxed industrial sewing machine" width="800" height="600">
      <img loading="lazy" src="/images/prisoners.jpg" alt="A large group gathered outdoors, waving toward the camera" width="800" height="600">
    </div>
  </section>

  <section class="site-shell section-space">
    <div class="support-banner"><div><p class="eyebrow text-emerald-200">Make a difference</p><h2>A little support.<br>A meaningful change.</h2><p>Be part of the work for justice and human dignity.</p></div><div class="flex flex-col items-start gap-5"><NuxtLink to="/donate" class="action-primary">Make a donation <span aria-hidden="true">&rarr;</span></NuxtLink><NuxtLink to="/volunteer" class="text-white underline underline-offset-4">Give your time. Volunteer with us &rarr;</NuxtLink></div></div>
  </section>

  <section id="contact" class="site-shell contact-section">
    <div><p class="eyebrow">Get in touch</p><h2 id="contact-heading">Let's start<br>a conversation.</h2><p class="mt-6 max-w-sm text-slate-600">Have a question, an idea, or a way to help? We'd like to hear from you.</p><div class="contact-details"><a href="mailto:info@crimecheckfoundationgh.org">info@crimecheckfoundationgh.org</a><a href="tel:+233242074276">+233 242 074 276</a><p>Old barrier, Kasoa, Ghana</p></div></div>
    <form class="contact-form" aria-labelledby="contact-heading" @submit.prevent="submitContactForm">
      <div class="grid gap-5 sm:grid-cols-2">
        <div class="field"><label for="name">Full name <span>(required)</span></label><input autocomplete="name" maxlength="120" v-model="contactForm.name" type="text" id="name" name="name" required placeholder="Your full name"></div>
        <div class="field"><label for="email">Email <span>(required)</span></label><input autocomplete="email" maxlength="160" v-model="contactForm.email" type="email" id="email" name="email" required placeholder="you@example.com"></div>
        <div class="field"><label for="phone">Phone <span>(optional)</span></label><input autocomplete="tel" maxlength="60" v-model="contactForm.phone" type="tel" id="phone" name="phone" placeholder="Your phone number"></div>
        <div class="field"><label for="subject">Subject <span>(optional)</span></label><input maxlength="160" v-model="contactForm.subject" type="text" id="subject" name="subject" placeholder="How can we help?"></div>
      </div>
      <div class="field"><label for="message">Message <span>(required)</span></label><textarea maxlength="2000" v-model="contactForm.message" rows="5" required placeholder="Tell us a little more..." name="message" id="message"></textarea></div>
      <p class="text-sm leading-relaxed text-slate-600">We use your details to respond to your enquiry. <NuxtLink to="/privacy" class="underline underline-offset-2">How we use your information</NuxtLink>.</p>
      <button type="submit" :disabled="contactLoading" class="action-primary self-start disabled:opacity-50">{{ contactLoading ? 'Sending...' : 'Send message' }} <span v-if="!contactLoading" aria-hidden="true">&rarr;</span></button>
      <p role="status" v-if="contactSuccess" class="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700">{{ contactSuccess }}</p>
      <p role="alert" v-if="contactError" class="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{{ contactError }}</p>
    </form>
  </section>
</template>
