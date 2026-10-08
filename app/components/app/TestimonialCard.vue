<script setup lang="ts">

const props = defineProps<{
  name: String,
  message: string,
  role: string,
  image: string,
}>()
</script>

<template>
  <div class="testimonial-card">
    <blockquote>&ldquo;{{ props.message }}&rdquo;</blockquote>
    <div class="flex items-center gap-4">
        <img loading="lazy" width="50" height="50" class="w-[50px] shrink-0 object-cover rounded-full h-[50px]" :src="props.image" alt="" />
      <div class="flex flex-col gap-1">
        <p class="font-semibold text-sm">{{props.name}}</p>
        <p class="text-sm text-slate-600">{{props.role}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
