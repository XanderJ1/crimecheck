<template>
  <footer class="site-footer mt-16 bg-slate-900 text-slate-300">
    <div class="site-shell grid gap-10 py-16 md:grid-cols-3">
      <div>
        <img src="/images/logo.png" width="80" height="80" alt="Crime Check Foundation" class="mb-5 h-16 w-16" loading="lazy" />
        <p>Crime prevention, justice reform, and support for vulnerable groups across Ghana.</p>
      </div>
      <nav aria-label="Footer navigation">
        <h2 class="mb-4 text-lg font-semibold text-white">Explore our work</h2>
        <ul class="space-y-2">
          <li><NuxtLink to="/about">About Crime Check</NuxtLink></li>
          <li><NuxtLink to="/projects">Projects</NuxtLink></li>
          <li><NuxtLink to="/events">Events</NuxtLink></li>
          <li><NuxtLink to="/news">News and updates</NuxtLink></li>
          <li><NuxtLink to="/volunteer">Volunteer</NuxtLink></li>
          <li><NuxtLink to="/donate">Donate</NuxtLink></li>
        </ul>
      </nav>
      <div>
        <h2 class="mb-4 text-lg font-semibold text-white">Get in touch</h2>
        <ul class="space-y-3 break-words">
          <li><a href="tel:+233242074276">+233 242 074 276</a></li>
          <li><a href="mailto:info@crimecheckfoundationgh.org">info@crimecheckfoundationgh.org</a></li>
          <li>Old barrier, Kasoa</li>
          <li><NuxtLink to="/#contact">Contact us</NuxtLink></li>
          <li><NuxtLink to="/privacy">How we use your information</NuxtLink></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-slate-700 px-6 py-6 text-center text-sm">Crime Check Foundation. All rights reserved.</div>
  </footer>
</template>
<style scoped>
a { text-decoration: underline; text-underline-offset: 0.2em; }
a:hover { color: white; }
</style>
