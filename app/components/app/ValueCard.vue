<script setup lang="ts">
 const props = defineProps({
   title: {
     type: String,
     required: true,
   },
   image: String,
   message: String,
 })
</script>

<template>
    <div class="flex flex-col border  border-gray-400 rounded-xl p-5">
        <NuxtImg class="w-10 h-10 mb-8" :src="image" alt="testimonial" />
        <h3 class="font-bold mb-3">{{props.title}}</h3>
        <p>{{props.message}}</p>
    </div>
</template>