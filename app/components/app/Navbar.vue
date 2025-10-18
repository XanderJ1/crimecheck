<script setup>
const props = defineProps({
  color: Boolean,
})
</script>

<template>
    <header class="mx-auto max-w-7xl flex items-center justify-between py-4">
        <div>
            <ul>
            <NuxtLink to="/" class="font-bold text-white">
                <img class="w-20 h-" src="/assets/images/logo.png" />
            </NuxtLink>
            </ul>

        </div>
        <nav class="flex items-center  text-xl gap-8" :class="color ? 'text-black' : 'text-white'">
          <NuxtLink to="/" class="font-bold hidden md:block">Home</NuxtLink>
          <NuxtLink to="/projects" clas s="font-bold hidden md:block">Projects</NuxtLink>
          <NuxtLink to="/about" class="font-bold hidden md:block">About Us</NuxtLink>
          <NuxtLink to="/events" class="font-bold hidden md:block">Events</NuxtLink>
            <ul class="flex gap-4">
            <NuxtLink to="/donate" class="bg-blue-600 px-5 py-2 border border-blue-600 text-white rounded">Donate</NuxtLink>
            </ul>
        </nav>
    </header>
</template>