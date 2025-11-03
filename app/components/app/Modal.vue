<template>
  <div v-if="show" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white rounded-xl p-6 max-w-lg w-full relative">
      <button @click="close" class="absolute top-3 right-3 text-gray-600">✖</button>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: Boolean,
  close: Function
})
</script>
