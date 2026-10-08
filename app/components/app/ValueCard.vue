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
    <div class="ccf-value-card">
        <NuxtImg v-if="image" loading="lazy" width="40" height="40" class="w-10 h-10 mb-8" :src="image" alt="" />
        <h3 class="text-xl font-semibold mb-3">{{props.title}}</h3>
        <p>{{props.message}}</p>
    </div>
</template>
