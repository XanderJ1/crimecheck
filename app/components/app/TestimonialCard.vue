<script setup lang="ts">

const props = defineProps<{
  name: String,
  message: string,
  role: String,
  image: String,
}>()
</script>

<template>
  <div class="flex flex-col border w-full border-gray-400 rounded-xl p-10">
    <p class="text-xl text-center py-10">{{ props.message }}  </p>
    <div class="flex justify-center gap-5">
        <img class="w-[50px] rounded-full h-[40]" :src="image" alt="" />
      <div class="flex flex-col gap-2">
        <h4 class="font-bold">{{props.name}}</h4>
        <p>{{props.role}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>