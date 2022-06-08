<template>
  <span style="color: black">{{ $route.params.field }}</span>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "noheader",
})
</script>