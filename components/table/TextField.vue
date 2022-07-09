<template>
  <span>{{ data[Object.keys(data)[0]] }}</span>
</template>

<script setup lang="ts">
defineProps<{
  data: object;
}>();
</script>
