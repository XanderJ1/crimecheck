<script setup>

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
    { property: 'og:image', content: '/assets/images/oppong.jpeg' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
})


definePageMeta({
  layout: 'landing-page',
})
</script>

<template>
  <header class="relative bg-[url('/assets/images/kwarteng2.jpg')] bg-center bg-cover h-screen before:absolute before:inset-0 before:bg-[#584D4D]/20 before:z-0" role="banner">
    <div class="relative z-10">
      <TestNavbar />
    </div>
    <section class="flex max-w-7xl mx-auto mt-20" aria-labelledby="hero-heading">
      <div class="flex flex-col items-center gap-8 md:items-start md:ml-20">
        <h1 id="hero-heading" class="main z-1 text-center md:text-start text-white font-bold font-sans text-3xl md:text-[60px] max-w-[530px]">
          REINFORCING JUDICIAL PROTECTION FOR INMATES
        </h1>

        <p class="text-white text-center z-1 max-w-[400px]">
          In the heart of Ghana we fight for those who are neglected by the system.
          We provide justice for those who lack the means to fight for themselves.
        </p>

        <div class="flex gap-4">
          <NuxtLink to="/donate" class="z-1 inline-flex items-center text-base md:text-xl text-white font-semibold px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition">Donate</NuxtLink>
          <NuxtLink to="/" class="z-1  inline-flex items-center text-base md:text-xl font-semibold px-5 py-3 rounded-lg border-2 border-green-600 text-white hover:bg-green-600/10 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition">Learn More</NuxtLink>
        </div>

      </div>
      <div>
        <img class="hidden opacity-0" src="@/assets/images/people.jpg" alt="people">
      </div>
    </section>
  </header>

  <section class="mt-40 gap-8">
    <h2 class="text-4xl mb-15 text-center">How We Impact Others</h2>
    <div class="flex flex-col md:flex-row max-w-7xl mx-auto px-4 gap-20">
      <NuxtImg src="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/donate_prisons.jpg" class="w-xl" alt="prisoners" />
      <div class="right flex flex-col gap-8 justify-center">

        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <NuxtImg src="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/icon_love.svg" class="h-10 w-15" alt="care_icon" />
            <h3 class="text-xl font-bold">Prison Support</h3>
          </div>
          <p>Providing rehabilitation programs and resources for incarcerated individuals seeking redemption.</p>

        </div>


        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <NuxtImg src="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/care.png" class="h-10 w-15" alt="care" />
            <h3 class="text-xl font-bold">Legal Advocacy</h3>
          </div>
          <p>Challenging unjust laws that criminalize poverty and marginalize vulnerable populations. </p>

        </div>

        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <NuxtImg src="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/icon_love.svg" class="h-10 w-15" alt="humanitarian support" />
            <h3 class="text-xl font-bold">Philanthropy</h3>
          </div>
          <p>Transforming lives through strategic legal interventions and humanitarian support </p>

        </div>

        <div class="flex gap-4">
          <NuxtLink to="/donate" class="text-xl font-bold text-white border border-blue-600 rounded bg-blue-600 px-8 py-2">Donate</NuxtLink>
          <NuxtLink to="/projects" class="text-xl font-bold border border-green-600 text-white rounded bg-green-600 px-5 py-2">Learn more</NuxtLink>
        </div>
      </div>
    </div>
  </section>

    <article class="flex flex-col md:flex-row max-w-7xl mx-auto mt-20 my-10 items-center gap-10 bg-linear-gradient">
      <h2 class="text-xl text-center md:text-start">Trusted by leading human rights organizations</h2>
      <div class="flex ml-8 gap-8">
        <NuxtImg src="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/osiwa.png" class="w-15 h-15" alt="OSIWA partner" />
        <NuxtImg src="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/usaid.svg" class="w-15 h-15" alt="USAID partner" />
      </div>
    </article>

  <section class="max-w-7xl mx-auto px-2 mt-20">
    <h2 class="text-4xl text-center md:text-start font-semibold mt-10">What others say about us</h2>
    <p class="text-2xl my-8">Real stories of Transformation</p>

    <div class="flex flex-col max-w-7xl mx-auto gap-10 justify-center px-2 md:flex-row ">
      <TestimonialCard
          message="CrimeCheck foundation gave me a chance when no one believed in me."
          name="Akosua Serwaah"
          role="Former prisoner"
          image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/testimonial1.jpg"
          />
      <TestimonialCard
          message="Their work is changing the narrative around criminal justice in Ghana."
          name="Theresa Markwei"
          role="lawyer"
          image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/testimonial2.jpg" />
      <TestimonialCard
          message="We've seen real systemic change through their dedicated advocacy."
          name="Regina Turkson"
          role="MP. Agona East"
          image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/testimonial3.jpg"/>
    </div>
  </section>

  <article class="flex flex-col md:flex-row items-center  md:px-16 justify-between h-70 bg-[position:center_60%] bg-cover before:absolute before:inset-0 before:bg-[#584D4D]/20 before:z-0 max-w-7xl mx-auto my-15 bg-[url('/assets/images/ai_inmate_behind_bars.jpg')]">
    <div>
      <h2 class="text-3xl  text-center md:text-start mb-5 font-bold text-white">Be a part the change  you seek</h2>
      <p class="text-2xl text-center text-white">Join Our mission to transform justice</p>
    </div>
    <button class="text-xl w-fit mx-auto md:mx-0 mb-5 md:mb-0 h-fit px-4 py-3 rounded text-white bg-blue-600 border border-blue-600" to="/">Donate Now</button>
  </article>

  <section class="max-w-7xl px-2 mx-auto mt-20 mb-16">
    <h2 class="text-5xl text-center mb-16">Our Key Initiatives</h2>
    <div class="flex flex-col gap-4 md:flex-row">
      <InitiativeCard
        title="Prison reforms"
        description="Improving prison conditions to challenge the status quo about incarceration as a for of punishment."
        icon="/images/reform.svg"
      />
      <InitiativeCard
          title="Decriminalizing Vagrancy Laws"
          description="Challenging laws that criminalize poverty and further marginalize the vulnerable communities"
          icon="/images/book.svg"
      />
      <InitiativeCard
          title="Justice Advocacy"
          description="Driving a change in criminal justice and championing a fairer system to transform lives"
          icon="/images/scale.svg"
      />
      <InitiativeCard
          title="Philanthropy"
          description="Empowering lives through generous giving"
          icon="/images/globe.svg"
      />

    </div>
  </section>
  <section class="max-w-7xl mx-auto">
    <h2 class="text-center text-4xl mb-15 mt-20">Our Gallery</h2>
    <div class="grid md:grid-cols-4 mx-auto px-4 gap-5 flex-col md:flex-row">
      <NuxtImg class="w-full h-100 rounded-xl" src="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/donate.jpeg"  alt="school donate"/>
      <NuxtImg class="w-full h-100 rounded-xl" src="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/inmate_gift.png"  alt="school donate"/>
      <NuxtImg class="w-full h-100 rounded-xl" src="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/prisoners.jpg"  alt="school donate"/>
      <NuxtImg class="w-full h-100 rounded-xl" src="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/oppong.jpeg"  alt="school donate"/>

    </div>
  </section>

  <section class="max-w-7xl mx-auto mt-20 mb-16">
    <h2 class="max-w-7xl mx-auto text-center text-5xl mt-25 mb-8 md:text-start">Contact Us</h2>
    <form class="flex flex-col  gap-5 px-2 md:justify-start" aria-labelledby="contact-heading">
      <input class="w-full md:w-130 h-15 pl-3 bg-gray-200" type="text" id="name" placeholder="Full Name" />
      <input class="w-full md:w-130 h-15 pl-3 bg-gray-200"type="text" id="email" placeholder="Email"/>
      <input class="w-full md:w-130 h-15 pl-3 bg-gray-200"type="number" id="phone" placeholder="Phone" />
      <textarea class="w-full md:w-130 h-25 pl-3 bg-gray-200" placeholder="Message" name="message" id="message"></textarea>
      <button class="w-full text-center md:w-fit md:text-left rounded border border-green-500 px-15 py-3 bg-green-500 text-white">Send</button>
    </form>
  </section>



</template>
