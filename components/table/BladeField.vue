<template>
  <span>{{ code }}</span>
  <br />
  <img id="blade" :src="`/blades/${code}.png`" :alt="code" />
</template>

<script setup lang="ts">
defineProps<{
  code: string;
}>();
</script>

<style scoped>
#blade {
  width: 100px;
}

@media only screen and (max-width: 767px) {
  #blade {
    width: 60px;
  }
}
</style>
