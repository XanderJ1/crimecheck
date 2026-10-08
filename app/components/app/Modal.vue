<script setup lang="ts">
const props = defineProps<{ show: boolean; close: () => void; title: string }>()
const dialog = ref<HTMLDialogElement | null>(null)
const titleId = useId()
let opener: HTMLElement | null = null
let previousOverflow = ''
function restore() {
  if (import.meta.client) document.body.style.overflow = previousOverflow
  if (opener?.isConnected) opener.focus()
  opener = null
}
watch(() => props.show, async (show) => {
  await nextTick()
  if (show && dialog.value && !dialog.value.open) {
    opener = document.activeElement instanceof HTMLElement ? document.activeElement : null
    previousOverflow = document.body.style.overflow
    dialog.value.showModal()
    document.body.style.overflow = 'hidden'
  } else if (!show && dialog.value?.open) {
    dialog.value.close()
    restore()
  }
}, { immediate: true })
onBeforeUnmount(() => { if (dialog.value?.open) { dialog.value.close(); restore() } })
</script>
<template>
  <Teleport to="body">
    <dialog ref="dialog" :aria-labelledby="titleId" class="m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-4xl overflow-y-auto rounded-xl bg-white p-5 text-slate-900 shadow-2xl md:p-8"
      @cancel.prevent="close()" @close="show && close()">
      <div class="mb-6 flex items-start justify-between gap-4">
        <h2 :id="titleId" class="text-2xl font-bold">{{ title }}</h2>
        <button type="button" autofocus class="min-h-11 shrink-0 rounded-lg border border-slate-500 px-3" @click="close()">Close</button>
      </div>
      <slot />
    </dialog>
  </Teleport>
</template>
<style scoped>dialog::backdrop { background: rgb(0 0 0 / 75%); }</style>
