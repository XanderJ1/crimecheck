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
       <h1 class="text-5xl font-bold text-center mb-8">Transforming Lives Through Restoring Justice</h1>
         <p class="text-center text-xl">Over the years we have been involved in various humanitarian endeavors addressing inequalities in the judicial system.
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
        <p class="font-semibold mb-3 text-gray-800">Prison Reforms</p>
        <p class="text-gray-700 mb-4">
          Improving prison conditions to challenge the status quo about incarceration as a form of punishment
        </p>
        <p class="font-semibold mb-3 text-gray-800">Petty Offenders Project</p>
        <p class="text-gray-700 mb-4">
          This initiative secures the release of individuals imprisoned for minor offences through the payment of court fines because of the absence of a Non-Custodial Sentencing Law in Ghana
        </p>

        <p class="font-semibold mb-3 text-gray-800">Ex-Convict Reintegration</p>
        <p class="text-gray-700">
          Through counseling, skills training, and livelihood support, this project assists
          ex-convicts to reintegrate into society with dignity and purpose.
        </p>


      </div>
      <div class="basis-1/2">
        <img class="w-150 h-100" src="/images/inmate_gift.png" alt="" />
      </div>
    </div>


    <h3 class="text-2xl">Philanthropy </h3>
    <div class="flex flex-col md:flex-row items-center gap-4 justify-between mb-12">
      <div class="basis-1/2">

        <p class="font-semibold mb-3 text-gray-800">Street Charity Series</p>
        <p class="text-gray-700 mb-4">
          Offering financial support and basic necessities including food, and clothing to people living on the streets.
        </p>

        <p class="font-semibold mb-3 text-gray-800">Village Charity Series</p>
        <p class="text-gray-700 mb-4">
          Extending humanitarian aid to remote communities, including the provision of healthcare, food, and cash donations.
        </p>

        <p class="font-semibold mb-3 text-gray-800">Health Check Series</p>
        <p class="text-gray-700 mb-4">
          Payment of medical bills of financially distressed patients.
        </p>

        <p class="font-semibold mb-3 text-gray-800">Educational Support Series</p>
        <p class="text-gray-700">
        Helping the underprivileged realize their dreams through the payment of school fees, provision of uniforms, and learning materials.        </p>
      </div>

      <div class="basis-1/2">
        <img src="/images/phil.jpg" class="w-150 h-120" alt="" />
      </div>
    </div>

    <ProjectCard
        title="Decriminalizing Vagrancy Laws"
        description="In partnership with key stakeholders, CCF leads the Decriminalizing Vagrancy Laws and Advocacy Project (DVLA) to protect poor and homeless Ghanaians from unjust arrests under outdated local by-laws. The initiative promotes legal awareness, policy reform,
        and social inclusion, helping citizens live freely without fear of criminalization for poverty-related offenses."
        image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images2/vagrant.jpg" reverse />
    <ProjectCard title="Justice Tracker" description="CCF partners with USAID and Ghana’s justice institutions to implement the Case Tracking System (CTS)—a digital platform that monitors criminal cases from arrest to trial and beyond. The project enhances transparency, accountability, and timely justice
    while empowering citizens to monitor and demand fair treatment within the justice process."
                 image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/justice_hammer.jpg" />
  </section>

  <section class="max-w-7xl mx-auto mt-20 mb-16">
    <h2 class="flex flex-col text-3xl md:text-4xl text-center gap-10 mb-16">Real Stories Of Transformation</h2>
    <div class="flex flex-col px-3 gap-8">
      <StoryCard
          title="Crime Check rescues Ama Animah"
          story="After we shared the story of Ama Nima from Kumasi Central Prison three weeks ago, many were those who expressed disgust. The thought of being sentenced to five years in prison because she couldn't pay a court fine,  after being beaten by other family members was difficult to grasp. But God works in mysterious ways! After her release from prison, I asked Ama what she wanted to do for a living. She said with 500 cedis, she could do a lot. Little did she know we at Crime Check Foundation had other plans for her. Through the donations we received from some good Samaritans, we rented a flat in Accra for Ama and her two children and moved them in. She was so surprised she wept all day. A dustbin attendant now moves into a plush accommodation paid in advance of four years. But the biggest surprise was on its way!  This afternoon we showed Ama her big provisions shop and gave her a sum of seven thousand Ghana cedis. Your guess is as good as mine! It was tears and tears and tears of Joy! To all those who helped change the circumstances of poor Ama Anima,  may the Almighty God richly bless you."
          image="/images/animah.jpg"
      />

      <AppStoryCard2
          title="CCF Funds Surgery for Man Battling Severe Gum Tumour"
          story="Crime Check Foundation extends a small but life-saving lifeline to 30-year-old Daniel Ameyaw, who has been battling a severe gum tumour. Through its Health Check initiative and the generosity of donors, CCF contributed GH¢6,500 to help begin his surgery, offering him renewed hope for recovery and a better life."
          image="/images/goit.jpg"
          reverse
      />

      <StoryCard
          title="CCF Supports Acid Victim"
          story="Crime Check Foundation (CCF) supported Memuna Malik, a 31-year-old woman from Akyem Oda who suffered severe burns after an acid attack. CCF donated GH₵4,000 to help with her medical treatment and recovery. Through this support, CCF restored hope and dignity to Memuna, reflecting its commitment to helping victims of injustice and hardship rebuild their lives."
          image="/images/acid.jpg"
      />

      <AppStoryCard2
          title="Man Saved By CCF "
          story="A dedicated teacher was jailed for failing to pay a court fine he didn’t fully understand. CCF intervened, settled the fine, and helped him return to his students. With mentorship from the Foundation,
           he now advocates for fair sentencing and helps identify others unjustly imprisoned for petty offenses.r"
            image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/teacher_rescue.jpg"
          reverse
      />

      <StoryCard
          title="CCF Helps Free Akollobilla"
          story="Someone gave asthmatic  102-year-old Akollobilla weed to sell after he  had been sacked as a farm attendant and was struggling to feed himself. After ignorantly accepting the offer out of hunger, he was arrested the next day and given a ten year sentence at  Kumasi Central Prison at a time the Narcotics Control Commission bill had not been reviewed by Parliament. We supported him in prison on our visits, providing him all he needed. We did our best and got him a presidential pardon two years ago. He was healthy when we visited him in his village to present him money and some toiletries, only to hear today that  102yr old Akollobilla has joined His maker. May Allah grant our grandfather a lofty place in paradise."
          image="/images/oldman.jpg"
      />

    </div>
  </section>

</template>

<style scoped>

</style>