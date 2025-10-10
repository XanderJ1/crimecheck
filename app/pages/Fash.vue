<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="bg-slate-900 text-white py-20 lg:py-32">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="max-w-4xl">
          <h1 class="text-4xl lg:text-6xl font-bold mb-6">About Us</h1>
          <p class="text-xl lg:text-2xl text-slate-100">
            We are an NGO dedicated to justice reform and advocacy, crime prevention and support for vulnerable groups. We believe in building a world where everyone has the opportunity to thrive.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
            <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                CrimeCheck Foundation was born from a vision to transform how communities address crime and justice. We recognized that traditional approaches often fail the most vulnerable, and that lasting change requires both grassroots engagement and systemic reform.
              </p>
              <p>
                Our journey began with a simple belief: that everyone deserves safety, dignity, and the chance to build a better future. Today, we work across multiple fronts—from direct support services to policy advocacy—always keeping the needs of vulnerable populations at the heart of everything we do.
              </p>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="py-16 lg:py-24 bg-slate-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="text-center mb-12 lg:mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">
            These principles guide every decision we make and every action we take
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="value in coreValues" :key="value.title" class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
              <i :class="`pi ${value.icon} text-white text-xl`"></i>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-3">{{ value.title }}</h3>
            <p class="text-slate-600 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div class="bg-slate-900 text-white p-10 lg:p-12 rounded-2xl">
            <div class="w-16 h-16 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
              <i class="pi pi-compass text-white text-2xl"></i>
            </div>
            <h2 class="text-2xl lg:text-3xl font-bold mb-4">Our Mission</h2>
            <p class="text-slate-300 text-lg leading-relaxed">
              To create safer, more just communities by preventing crime, advocating for systemic reform, and providing compassionate support to vulnerable populations through evidence-based programs and collaborative partnerships.
            </p>
          </div>

          <div class="bg-slate-50 p-10 lg:p-12 rounded-2xl">
            <div class="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
              <i class="pi pi-eye text-white text-2xl"></i>
            </div>
            <h2 class="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p class="text-slate-600 text-lg leading-relaxed">
              A society where justice is accessible to all, where communities are empowered to prevent crime proactively, and where every individual—regardless of their circumstances—has the opportunity to live with dignity, safety, and hope.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Do Section -->
    <section class="py-16 lg:py-24 bg-slate-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="text-center mb-12 lg:mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What We Do</h2>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">
            Our comprehensive approach addresses crime and justice from multiple angles
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title" class="bg-white p-8 rounded-xl">
            <div class="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center mb-5">
              <i :class="`pi ${service.icon} text-white text-xl`"></i>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-3">{{ service.title }}</h3>
            <p class="text-slate-600 leading-relaxed mb-4">{{ service.description }}</p>
            <ul class="space-y-2">
              <li v-for="item in service.items" :key="item" class="flex items-start gap-2 text-slate-600 text-sm">
                <i class="pi pi-check text-slate-900 text-xs mt-1"></i>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section class="py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="text-center mb-12 lg:mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Impact</h2>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">
            Making a difference in communities across Ghana
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-5xl lg:text-6xl font-bold text-slate-900 mb-2">{{ stat.value }}</div>
            <div class="text-slate-600 text-lg">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 lg:py-24 bg-slate-900 text-white">
      <div class="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
        <p class="text-xl text-slate-300 mb-8 leading-relaxed">
          Whether through volunteering, donations, or partnerships, there are many ways to support our mission and create lasting change in communities.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/volunteer" class="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
            Become a Volunteer
          </NuxtLink>
          <NuxtLink to="/contact" class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors">
            Get in Touch
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const coreValues = [
  {
    icon: 'pi-heart',
    title: 'Compassion',
    description: 'We approach every individual with empathy, understanding that circumstances do not define worth.'
  },
  {
    icon: 'pi-shield',
    title: 'Integrity',
    description: 'We maintain the highest ethical standards in all our operations and advocacy work.'
  },
  {
    icon: 'pi-users',
    title: 'Collaboration',
    description: 'We believe in the power of partnerships and community-driven solutions.'
  },
  {
    icon: 'pi-star',
    title: 'Excellence',
    description: 'We strive for the highest quality in our programs and services to maximize impact.'
  }
]

const services = [
  {
    icon: 'pi-shield',
    title: 'Crime Prevention',
    description: 'Proactive programs that address root causes and build safer communities.',
    items: [
      'Community education programs',
      'Youth mentorship initiatives',
      'Neighborhood watch coordination'
    ]
  },
  {
    icon: 'pi-balance-scale',
    title: 'Justice Reform',
    description: 'Advocating for policies that create a more equitable justice system.',
    items: [
      'Policy research and advocacy',
      'Legal awareness campaigns',
      'Restorative justice programs'
    ]
  },
  {
    icon: 'pi-heart',
    title: 'Victim Support',
    description: 'Comprehensive services for those affected by crime and injustice.',
    items: [
      'Counseling and trauma support',
      'Legal aid assistance',
      'Emergency relief services'
    ]
  },
  {
    icon: 'pi-refresh',
    title: 'Rehabilitation',
    description: 'Programs that support successful reintegration into society.',
    items: [
      'Skills training and employment',
      'Substance abuse support',
      'Family reunification services'
    ]
  },
  {
    icon: 'pi-megaphone',
    title: 'Advocacy',
    description: 'Amplifying voices and driving systemic change at all levels.',
    items: [
      'Public awareness campaigns',
      'Stakeholder engagement',
      'Rights-based advocacy'
    ]
  },
  {
    icon: 'pi-book',
    title: 'Research',
    description: 'Evidence-based approaches that inform our work and policy.',
    items: [
      'Impact assessments',
      'Community needs analysis',
      'Best practice documentation'
    ]
  }
]

const stats = [
  { value: '15K+', label: 'Lives Impacted' },
  { value: '50+', label: 'Communities Served' },
  { value: '200+', label: 'Volunteers' },
  { value: '10+', label: 'Years of Service' }
]
</script>