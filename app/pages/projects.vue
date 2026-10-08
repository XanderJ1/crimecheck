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
  <div class="ccf-projects">
    <AppPageIntro eyebrow="Our projects" title="Practical support. Lasting change." description="From prison support to humanitarian care, explore the work behind our commitment to justice and dignity.">
      <NuxtLink to="/donate" class="action-primary">Support these projects <span aria-hidden="true">&rarr;</span></NuxtLink>
      <a href="#project-programmes" class="text-link">Explore our work</a>
    </AppPageIntro>
    <section id="project-programmes" class="ccf-content-section">
      <div class="section-heading"><div><p class="eyebrow">Our programmes</p><h2>Meeting people where they are.</h2></div></div>
      <article class="ccf-programme">
        <div><p class="eyebrow">01 / Justice &amp; rehabilitation</p><h3>Prison support</h3><dl class="ccf-programme-list">
          <div><dt>Prison reform</dt><dd>Improving prison conditions and supporting rehabilitation.</dd></div>
          <div><dt>Petty Offenders Project</dt><dd>Helping people imprisoned for minor offences by paying court fines they cannot afford.</dd></div>
          <div><dt>Reintegration</dt><dd>Counselling, skills training, and livelihood support to help former prisoners rebuild their lives.</dd></div>
        </dl></div>
        <img loading="lazy" src="/images/inmate_gift.png" alt="Presentation of a sewing machine to support livelihoods" width="800" height="600">
      </article>
      <article class="ccf-programme ccf-programme-reverse">
        <div><p class="eyebrow">02 / Humanitarian support</p><h3>Care that reaches further.</h3><dl class="ccf-programme-list">
          <div><dt>Street &amp; village charity</dt><dd>Food, clothing, financial help, and essential support for people on the streets and in remote communities.</dd></div>
          <div><dt>Health Check</dt><dd>Helping financially distressed patients meet the cost of medical treatment.</dd></div>
          <div><dt>Educational support</dt><dd>School fees, uniforms, and learning materials to help young people pursue their education.</dd></div>
        </dl></div>
        <img loading="lazy" src="/images/phil.jpg" alt="The foundation's humanitarian outreach" width="800" height="600">
      </article>
      <ProjectCard title="Decriminalizing vagrancy laws" description="Working with stakeholders to challenge the criminalization of poverty through legal awareness, policy advocacy, and social inclusion." image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images2/vagrant.jpg" />
      <ProjectCard title="Justice Tracker" description="Supporting case tracking to improve transparency and accountability across the justice process, from arrest to trial and beyond." image="https://s3.eu-north-1.amazonaws.com/grinko.co.uk/images/justice_hammer.jpg" reverse />
    </section>
    <section class="ccf-content-section">
      <div class="section-heading"><div><p class="eyebrow">Behind the work</p><h2>Stories of a second chance.</h2></div><p>Individual stories from the foundation's justice and humanitarian programmes.</p></div>
      <div class="ccf-stories">
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
  </div>
</template>
