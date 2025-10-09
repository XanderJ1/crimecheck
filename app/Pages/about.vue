<script setup lang="ts">

</script>

<template>
  <main>
    <div class="max-w-7xl mx-auto">
        <h1>About Us</h1>
        <div class="flex justify-between items-center">
            <h3>We are an NGO dedicated to justice reform and advocacy, crime prevention and support for vulnerable groups. We believe in building a world where everyone has the opportunity to thrive.</h3>
            <img src="../assets/images/donations-2.webp" alt="logo" />
        </div>
    </div>
    <div>
        <h1 class="text-5xl max-w-7xl mx-auto text-left mt-20  mb-8">Our Story</h1>
        <p class="text max-w-7xl mx-auto">CrimeCheck Foundation was born from a vision to transform how communities address crime and justice. We recognized that traditional approaches often fail the most vulnerable, and that lasting change requires both grassroots engagement and systemic reform. Our journey began with a simple belief: that everyone deserves safety, dignity, and the chance to build a better future. Today, we work across multiple fronts—from direct support services to policy advocacy—always keeping the needs of vulnerable populations at the heart of everything we do.</p>
    </div>

    <h1 class="text-5xl max-w-7xl text-center mt-20 mb-16">Our Core Values</h1>

    <div class="grid grid-cols-4 gap-8 max-w-7xl mx-auto">
        <AppValueCard title="Justice" image="scale.svg" message="We advocate for fair and equitable treatment for all, especially those marginalized"/>
        <AppValueCard title="Compassion" image="compassion.svg" message="We approach every individual with empathy, understanding their unique circumstances and challenges."/>
        <AppValueCard title="Empowerment" image="scale.svg" message="We believe in giving people the tools and support to rebuild their lives and reach their full potential." />
        <AppValueCard title="Community" image="globe.svg" message="We foster strong, supportive communities where everyone looks out for one another." />
    </div>
  <h1 class="text-5xl text-center mt-20 mb-16">Our Mission and Vision</h1>
 <div class="grid-cols-1 gap-8 max-w-7xl mx-auto">
   <AppMisVis title="Mission" message="To prevent crime, advocate for justice reform, and provide comprehensive support to vulnerable groups through
    community-based programs, policy advocacy, and direct services that address the root causes of crime and inequality.
"/>
   <AppMisVis title="Vision" message="A world where every person, regardless of their background or circumstances, has access to justice, safety, and
   the opportunity to thrive in supportive communities free from the cycle of crime and poverty." />
 </div>
    <section class="max-w-7xl mx-auto">
      <h2 class="text-4xl mt-20 mb-8">Timeline</h2>
      <div class="flex flex-col gap-2 ">
        <AppTimeCard year="2017" highlight="Founded" event="This waas a great year or everyone" />
        <AppTimeCard year="2017" highlight="Founded" event="This waas a great year or everyone" />
        <AppTimeCard year="2017" highlight="Founded" event="This waas a great year or everyone" />
        <AppTimeCard year="2017" highlight="Founded" event="This waas a great year or everyone" />
      </div>
    </section>

    <section class="max-w-7xl mx-auto items-center mt-20 mb-16">
      <h2 class="text-4xl mt-20 mb-8">Meet Our Founder</h2>
      <div class="flex gap-6 items-center">
        <img src="@/assets/images/ibrahim.jpeg" alt="" />
        <div class="flex flex-col gap-2">
          <h3 class="text-2xl mb-10">Ibrahim Oppong Kwarteng</h3>
          <h4 class="text-xl mb-4">Founder & Executive Director</h4>
          <p class="leading-6">Ibrahim Oppong Kwarteng founded CrimeCheck Foundation with a deep commitment to social justice and community
            empowerment. With extensive experience in criminology, social work, and advocacy, Ibrahim has dedicated their career to creating systemic change and supporting those affected by crime. His leadership has made and transformed CrimeCheck into a leading voice for justice reform and community safety.
          </p>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto  mt-20 mb-16">
      <h2 class="text-4xl text-center mt-30 mb-15">Achievements</h2>
      <div class="flex gap-6 items-center">
        <img class="h-100 w-120" src="@/assets/images/award1-1024x683.jpeg" alt="" />
        <div class="flex flex-col gap-2">
          <div class="flex gap-4">
            <div class="bg-blue- border border-blue-600 bg-blue-600 p-3 rounded-full"></div>
            <h3>2018</h3>
          </div>
          <p>CrimeCheck was recognized as the most reputable voice in the fight  for crime justice  in Ghana </p>
        </div>
      </div>
    </section>
  <div>sd</div>
  </main>
</template>