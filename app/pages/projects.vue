<script setup lang="ts">
import ProjectCard from "~/components/app/ProjectCard.vue";
import StoryCard from "~/components/app/StoryCard.vue";

useHead({
  title: 'Projects & Impact | Crime Check Foundation Ghana',
  meta: [
    {
      name: 'description',
      content: 'Discover how Crime Check Foundation transforms lives through humanitarian support, justice reform advocacy, and digital justice tracking in Ghana.'
    },
    { property: 'og:title', content: 'Projects & Impact | Crime Check Foundation Ghana' },
    { property: 'og:description', content: 'Explore CCF’s initiatives including humanitarian aid, vagrancy law reform, and the Justice Tracker project.' },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'canonical', href: 'https://crimecheckfoundationgh.org/projects' }
  ]
})
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
        <h3 class="text-xl text-center font-bold">Our Key Initiatives</h3>
        <h2 class="text-3xl  text-center"> Projects driving justice reforms.</h2>
      </div>

    <h3 class="text-2xl" >Prison Projects</h3>
    <div class="flex items-center justify-between">
      <div class="basis-1/2">
        <p class="font-semibold mb-3 text-gray-800">Petty Offenders Project</p>
        <p class="text-gray-700 mb-4">
          This initiative secures the release of individuals imprisoned for minor offenses
          and provides legal aid, helping to decongest Ghana’s prisons and reform the system.
        </p>

        <p class="font-semibold mb-3 text-gray-800">Ex-Convict Reintegration</p>
        <p class="text-gray-700">
          Through counseling, skills training, and livelihood support, this project assists
          ex-convicts to reintegrate into society with dignity and purpose.
        </p>

      </div>
      <div class="basis-1/2">
        <img src="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/support.jpg" alt="" />
      </div>
    </div>


    <h3 class="text-2xl ">Philanthropy </h3>
    <div class="flex items-center justify-between">
      <div class="basis-1/2">

        <p class="font-semibold mb-3 text-gray-800">Street Charity Series</p>
        <p class="text-gray-700 mb-4">
          Offering food, clothing, and basic necessities to people living on the streets,
          transforming lives one act of kindness at a time.
        </p>

        <p class="font-semibold mb-3 text-gray-800">Village Charity Series</p>
        <p class="text-gray-700 mb-4">
          Extending humanitarian aid to remote communities, providing healthcare, food, and education.
        </p>

        <p class="font-semibold mb-3 text-gray-800">Health Check Series</p>
        <p class="text-gray-700 mb-4">
          Organizing free medical screenings and health education campaigns to promote wellbeing.
        </p>

        <p class="font-semibold mb-3 text-gray-800">Educational Support Series</p>
        <p class="text-gray-700">
          Supporting underprivileged children with school fees, uniforms, and learning materials.
        </p>
      </div>

      <div class="basis-1/2">
        <img src="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/support.jpg" alt="" />
      </div>
    </div>



    <ProjectCard
        title="Humanitarian Support"
        description="Crime Check Foundation extends compassion to society’s most vulnerable.
     Through donations and outreach, the Foundation supports ex-prisoners, widows, orphans, the sick, and the poor—providing medical care, education, and livelihood assistance. CCF’s humanitarian work restores dignity and hope to those often forgotten."
        image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/support.jpg"  />
    <ProjectCard
        title="Decriminalizing Vagrancy Laws"
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
          title="Crime Checkrescues Ama Animah  children"
          story="A teacher who was not given access to lawyers  wrongfully incarcerated was  released after Crimecheck
         listened to his story nd later"
          name="Ama Animah"
          image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/teacher_rescue.jpg"
      />

      <AppStoryCard2
          title="Crime Check rescues Ama Animah  children"
          story="A teacher who was not given access to lawyers  wrongfully incarcerated was  released after Crimecheck
         listened to his story nd later"
          name="Ama Animah"
          image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/teacher_rescue.jpg"
          reverse
      />

      <StoryCard
          title="Crime Check rescues Ama Animah  children"
          story="A teacher who was not given access to lawyers  wrongfully incarcerated was  released after Crimecheck
         listened to his story nd later"
          name="Ama Animah"
          image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/ama_animah.jpg"
      />

      <AppStoryCard2
          title="Crime Check rescues Ama Animah  children"
          story="A teacher who was not given access to lawyers  wrongfully incarcerated was  released after Crimecheck
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