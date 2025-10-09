<script setup lang="ts">
import ProjectCard from "~/components/app/ProjectCard.vue";
import StoryCard from "~/components/app/StoryCard.vue";


</script>

<template>
  <section class="max-w-2xl mx-auto justify-center items-center flex mb-16">
     <div class="flex flex-col gap-2 items-center justify-center">
       <h1 class="text-5xl font-bold text-center mb-8">Transforming Lives, through Restoring Justice</h1>
         <p class="text-center text-xl">Over the years we have been involved in various humanitarian endeavours. addressing system inequalities
           in the judicial system.</p>
     </div>
<!--     <img class="w-1/2" src="@/assets/images/award1-1024x683.jpeg" alt="" />-->
  </section>
  <div class="flex justify-end sticky">
    <h4 class="bg-green-600 border text-white rounded-full fixed bottom-12 p-4">Donate</h4>
  </div>
  <section class="flex flex-col max-w-7xl mx-auto mt-20 mb-16 gap-8">
      <h1 class="text-center text-3xl"> Key Projects driving justice reforms.</h1>
    <ProjectCard
        title="Humanitarian Support"
        description="Crime Check Foundation extends compassion to society’s most vulnerable.
     Through donations and outreach, the Foundation supports ex-prisoners, widows, orphans, the sick, and the poor—providing medical care, education, and livelihood assistance. CCF’s humanitarian work restores dignity and hope to those often forgotten."
        image="support.jpg"  />
    <ProjectCard
        title="Vagrancy Law"
        description="In partnership with key stakeholders, CCF leads the Decriminalizing Vagrancy Laws and Advocacy Project (DVLA) to protect poor and homeless Ghanaians from unjust arrests under outdated local by-laws. The initiative promotes legal awareness, policy reform,
        and social inclusion, helping citizens live freely without fear of criminalization for poverty-related offenses."
        image="vagrant.jpg" reverse />
    <ProjectCard title="Justice Tracker" description="CCF partners with USAID and Ghana’s justice institutions to implement the Case Tracking System (CTS)—a digital platform that monitors criminal cases from arrest to trial and beyond. The project enhances transparency, accountability, and timely justice
    while empowering citizens to monitor and demand fair treatment within the justice process." image="justice_hammer.jpg" />
  </section>

  <section class="max-w-7xl mx-auto mt-20 mb-16">
    <h2 class="flex flex-col text-4xl text-center gap-10 mb-16">Real Stories Of Transformation</h2>
    <div class="flex flex-col gap-8">
      <StoryCard
          title="CrimeCheck rescues Ama Animah  children"
          story="A teacher who was not given access to lawyers  wrongfully incarcerated was  rreleased after Crimecheck
         listened to his story nd later"
          name="Ama Animah"
          image="ama_animah.jpg"
      />

      <AppStoryCard2
          title="CrimeCheck rescues Ama Animah  children"
          story="A teacher who was not given access to lawyers  wrongfully incarcerated was  rreleased after Crimecheck
         listened to his story nd later"
          name="Ama Animah"
          image="ama_animah.jpg"
          reverse
      />

      <StoryCard
          title="CrimeCheck rescues Ama Animah  children"
          story="A teacher who was not given access to lawyers  wrongfully incarcerated was  rreleased after Crimecheck
         listened to his story nd later"
          name="Ama Animah"
          image="ama_animah.jpg"
      />

      <AppStoryCard2
          title="CrimeCheck rescues Ama Animah  children"
          story="A teacher who was not given access to lawyers  wrongfully incarcerated was  rreleased after Crimecheck
         listened to his story nd later"
          name="Ama Animah"
          image="ama_animah.jpg"
          reverse
      />

    </div>
  </section>

</template>

<style scoped>

</style>