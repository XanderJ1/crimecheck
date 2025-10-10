<script setup lang="ts">
import ProjectCard from "~/components/app/ProjectCard.vue";
import StoryCard from "~/components/app/StoryCard.vue";


</script>

<template>
  <section class="max-w-2xl mx-auto justify-center items-center flex mb-16">
     <div class="flex flex-col gap-2 items-center justify-center">
       <h1 class="text-5xl font-bold text-center mb-8">Transforming Lives, through Restoring Justice</h1>
         <p class="text-center text-xl">Over the years we have been involved in various humanitarian endeavours. addressing system inequalities
           in the judicial system.
         </p>
       <NuxtLink to="/" class="bg-blue-600 border-blue-600 text-xl px-5 py-3 mt-3 text-white rounded-2xl">Donate</NuxtLink>

     </div>
  </section>
  <div class="flex justify-end">
    <h4 class="flex bg-green-600 border text-white text-xl rounded-full h-24 w-24 text-center items-center fixed bottom-12 p-4">Donate</h4>
  </div>
  <section class="flex flex-col px-2 max-w-7xl mx-auto mt-20 mb-16 gap-8">
      <div class="flex flex-col gap-2 items-center justify-center">
        <h3 class="text-center font-bold">Our Key Projects</h3>
        <h2 class="text-3xl  text-center"> Projects driving justice reforms.</h2>
      </div>
    <ProjectCard
        title="Humanitarian Support"
        description="Crime Check Foundation extends compassion to society’s most vulnerable.
     Through donations and outreach, the Foundation supports ex-prisoners, widows, orphans, the sick, and the poor—providing medical care, education, and livelihood assistance. CCF’s humanitarian work restores dignity and hope to those often forgotten."
        image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/support.jpg"  />
    <ProjectCard
        title="Vagrancy Law"
        description="In partnership with key stakeholders, CCF leads the Decriminalizing Vagrancy Laws and Advocacy Project (DVLA) to protect poor and homeless Ghanaians from unjust arrests under outdated local by-laws. The initiative promotes legal awareness, policy reform,
        and social inclusion, helping citizens live freely without fear of criminalization for poverty-related offenses."
        image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/vagrant.jpg" reverse />
    <ProjectCard title="Justice Tracker" description="CCF partners with USAID and Ghana’s justice institutions to implement the Case Tracking System (CTS)—a digital platform that monitors criminal cases from arrest to trial and beyond. The project enhances transparency, accountability, and timely justice
    while empowering citizens to monitor and demand fair treatment within the justice process."
                 image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/justice_hammer.jpg" />
  </section>

  <section class="max-w-7xl mx-auto mt-20 mb-16">
    <h2 class="flex flex-col text-3xl md:text-4xl text-center gap-10 mb-16">Real Stories Of Transformation</h2>
    <div class="flex flex-col px-3 gap-8">
      <StoryCard
          title="CrimeCheck rescues Ama Animah  children"
          story="A teacher who was not given access to lawyers  wrongfully incarcerated was  released after Crimecheck
         listened to his story nd later"
          name="Ama Animah"
          image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/teacher_rescue.jpg"
      />

      <AppStoryCard2
          title="CrimeCheck rescues Ama Animah  children"
          story="A teacher who was not given access to lawyers  wrongfully incarcerated was  rreleased after Crimecheck
         listened to his story nd later"
          name="Ama Animah"
          image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/teacher_rescue.jpg"
          reverse
      />

      <StoryCard
          title="CrimeCheck rescues Ama Animah  children"
          story="A teacher who was not given access to lawyers  wrongfully incarcerated was  rreleased after Crimecheck
         listened to his story nd later"
          name="Ama Animah"
          image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/ama_animah.jpg"
      />

      <AppStoryCard2
          title="CrimeCheck rescues Ama Animah  children"
          story="A teacher who was not given access to lawyers  wrongfully incarcerated was  rreleased after Crimecheck
         listened to his story nd later"
          name="Ama Animah"
          image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/teacher_rescue.jpg"
          reverse
      />

    </div>
  </section>

</template>

<style scoped>

</style>