<template>
  <footer class="bg-slate-900 text-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        <!-- Brand Section -->
        <div class="flex flex-col">
          <img class="w-20 h-20 mb-4" src="/images/logo.png" />
          <p class="text-slate-400 text-sm leading-relaxed">
            Dedication to crime prevention, advocacy, justice reform, and support for vulnerable groups
          </p>
        </div>

        <!-- Learn More Section -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Learn More</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/about" class="text-slate-400 hover:text-white transition-colors text-sm">
                About CrimeCheck
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projects" class="text-slate-400 hover:text-white transition-colors text-sm">
                Projects
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-slate-400 hover:text-white transition-colors text-sm">
                Events
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-slate-400 hover:text-white transition-colors text-sm">
                Volunteer
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-slate-400 hover:text-white transition-colors text-sm">
                Contact us
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Get in Touch Section -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Get in touch</h3>
          <div class="space-y-4 text-slate-400 text-sm">
            <p>+233 247 830 746</p>
            <p>info@crimecheckfoundation.org</p>
            <p>Old barrier, Kasoa</p>
          </div>
        </div>

        <!-- Newsletter Section -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Join our newsletter</h3>
          <div class="flex mb-10">
            <input
              v-model="email"
              type="email"
              placeholder="Email"
              required
              class="flex-1 px-4 py-3 bg-transparent border border-slate-700 rounded-l text-white text-sm placeholder-slate-500 focus:outline-none focus:border-slate-600"
            />
            <button
              @click="handleSubmit"
              type="button"
              class="px-6 py-3 bg-transparent border border-slate-700 border-l-0 rounded-r text-white text-sm hover:bg-slate-800 transition-colors"
            >
              Submit
            </button>
          </div>

          <h3 class="text-lg font-semibold mb-5">Social</h3>
          <div class="flex gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              class="w-10 h-10 flex items-center justify-center hover:-translate-y-1 transition-transform"
            >
              <i class="pi pi-facebook text-xl"></i>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              class="w-10 h-10 flex items-center justify-center hover:-translate-y-1 transition-transform"
            >
              <i class="pi pi-instagram text-xl"></i>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              class="flex items-center   hover:-translate-y-1 transition-transform"
            >
              <i class="pi pi-twitter text-xl"></i>
            </a>
            <a 
              href="https://www.youtube.com/@Meenabreastcancertv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              class="w-10 h-10 flex items-center justify-center hover:-translate-y-1 transition-transform"
            >
              <i class="pi pi-youtube text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-500 text-sm">
          ©2025 CrimeCheck Foundation. All rights reserved.
        </p>
        <div class="flex flex-col md:flex-row gap-6 md:gap-8">
          <NuxtLink to="#" class="text-slate-500 hover:text-white transition-colors text-sm">
            Privacy policy
          </NuxtLink>
          <NuxtLink to="#" class="text-slate-500 hover:text-white transition-colors text-sm">
            Terms and conditions
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const handleSubmit = () => {
  if (email.value) {
    alert('Thank you for subscribing with: ' + email.value)
    email.value = ''
  }
}
</script>