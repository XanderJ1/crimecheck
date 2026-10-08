<script setup lang="ts">
useSeoMeta({ robots: 'noindex, nofollow' })
await navigateTo('/donate', { redirectCode: 301, replace: true })
</script>
<template><p>Continue to <NuxtLink to="/donate">Donate</NuxtLink>.</p></template>
