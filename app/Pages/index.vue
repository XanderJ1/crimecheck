<script setup>

import TestimonialCard from "~/components/app/TestimonialCard.vue";
import InitiativeCard from "~/components/app/InitiativeCard.vue";

function setBackGround(){

}

definePageMeta({
  layout: 'landing-page',
})
</script>

<template>
    <section class="flex max-w-7xl mx-auto mt-20">
      <div class="flex flex-col gap-8">
        <h1 class=" text-white font-bold font-sans text-[60px] max-w-[530px]  text-2xl">
          REINFORCING JUDICIAL PROTECTION FOR INMATES
        </h1>

        <p class="text-white max-w-[400px]">In the heart of Ghana we fight for those who are neglected by the system.
          We provide justice for those who lack the means to fight for themselves.
        </p>

        <div class="flex gap-4">
          <NuxtLink to="/" class="flex items-center text-xl text-white border-blue-600 bg-blue-600 font-bold px-5 py-2 rounded border border-blue">Donate</NuxtLink>
          <NuxtLink to="/" class="text-white font-bold p-2 rounded border-2 border-green-600 px-5 py-2 ">Learn More</NuxtLink>
        </div>

      </div>
      <div>
        <img class="opacity-0" src="@/assets/images/people.jpg" alt="">
      </div>
    </section>
    <section class="mt-40 gap-8">
      <h2 class="text-4xl mb-15 text-center">How We Impact Others</h2>
      <div class="flex max-w-7xl mx-auto gap-20">
        <img src="@/assets/images/donate_prisons.jpg" class="w-xl" alt="">
        <div class="right flex flex-col gap-8 justify-center">
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <img src="@/assets/images/icon_love.svg" class="h-10 w-15" alt="">
              <h3 class="text-xl font-bold">Human Support</h3>
            </div>
            <p>Transforming lives through strategic legal interventions and humanitarian support </p>

          </div>

          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <img src="@/assets/images/care.png" class="h-10 w-15" alt="">
              <h3 class="text-xl font-bold">Legal Advocacy</h3>
            </div>
            <p>Transforming lives through strategic legal interventions and humanitarian support </p>

          </div>

          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <img src="@/assets/images/icon_love.svg" class="h-10 w-15" alt="">
              <h3 class="text-xl font-bold">Prison Support</h3>
            </div>
            <p>Providing rehabilitation programs and resources for incarcerated individuals seeking redemption.</p>

          </div>

          <div class="flex gap-4">
            <NuxtLink to="/create" class="text-xl font-bold text-white border border-blue-600 rounded bg-blue-600 px-8 py-2">Donate</NuxtLink>
            <NuxtLink to="/create" class="text-xl font-bold border border-green-600 text-white rounded bg-green-600 px-5 py-2">Learn more</NuxtLink>
          </div>
        </div>
      </div>
    </section>

  <article class="flex max-w-7xl mx-auto mt-20 my-10 items-center gap-10">
    <h2 class="text-xl">Trusted by leading human rights organizations</h2>
    <div class="flex ml-8 gap-8">
      <img src="@/assets/images/gcb.webp" class="w-15 h-15" alt="" />
      <img src="@/assets/images/osiwa.png" class="w-15 h-15" alt="" />
      <img src="@/assets/images/usaid.svg" class="w-15 h-15" alt="" />
    </div>
  </article>

 <section class="max-w-7xl mx-auto px-2">
   <h1 class="text-4xl font-semibold mt-10">What others say about us</h1>
   <p class="text-2xl my-8">Real stories of Transformation</p>

   <div class="flex max-w-7xl mx-auto gap-10 justify-center ">
     <TestimonialCard
         message="CrimeCheck foundation gave me a chance when no one believed in me." name="Akosua Serwaah" role="Former prisoner" image="testimonial3.jpg" />
     <TestimonialCard
         message="Their work is changing the narrative around criminal justice in Ghana." name="Theresa Markwei" role="lawyer" image="testimonial2.jpg"  />
     <TestimonialCard
         message="We've seen real systemic change through their dedicated advocacy." name="Regina Turkson" role="MP. Agona East" image="testimonial1.jpg"/>
   </div>
 </section>

  <article class="flex relative justify-between items-center px-20 h-70 bg-[position:center_60%] max-w-7xl mx-auto my-15 bg-[url('/assets/images/ai_inmate_behind_bars.jpg')]">
    <div>
      <h2 class="text-4xl mb-5 font-bold text-white">Be a part the change  you seek</h2>
      <p class="text-xl text-white ">Join Our mission to transform justice</p>
    </div>
    <button class="text-2xl h-fit px-4 py-3 rounded text-white bg-blue-600 border border-blue-600" to="/">Donate Now</button>
  </article>

  <section class="max-w-7xl mx-auto mt-20 mb-16">
    <h2 class="text-5xl text-center mb-20">Our Key Initiatives</h2>
    <div class="flex gap-2">
      <InitiativeCard />
      <InitiativeCard />
      <InitiativeCard />
      <InitiativeCard />
    </div>
  </section>
  <section class="max-w-7xl mx-auto">
    <h1 class="text-center text-4xl mb-15 mt-20">Our Gallery</h1>
    <div class="flex mx-auto justify-center gap-5">
      <img class="w-70 h-70" src="@/assets/images/donate.jpeg"  alt="school donate"/>
      <img class="w-70 h-70" src="@/assets/images/inmate_gift.png" alt="gift to inmate"/>
      <img class="w-70 h-70" src="@/assets/images/prisoners.jpg" alt="prisoners"/>
      <img class="w-70 h-70" src="@/assets/images/oppong.jpeg" alt="oppong" />

    </div>
  </section>

  <div>
    <h1 class="max-w-7xl mx-auto text-4xl mt-25 mb-8 ">Contact Us</h1>
    <form class="flex flex-col gap-5 ml-30">
      <input class="w-100 h-10 pl-3 bg-gray-200" type="text" id="name" placeholder="Full Name" />
      <input class="w-100 h-10 pl-3 bg-gray-200"type="text" id="email" placeholder="Email"/>
      <input class="w-100 h-10 pl-3 bg-gray-200"type="number" id="phone" placeholder="Phone" />
      <textarea class="w-100 h-20 pl-3 bg-gray-200" placeholder="Message" name="message" id="message"></textarea>
      <button class="w-fit text-left rounded border border-green-400 px-6 py-2 bg-green-400 text-white">Send</button>
    </form>
  </div>
  
  <div>
    .
  </div>


</template>
