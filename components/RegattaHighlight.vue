<template>
  <div id="card">
    <span id="title">{{ text }}</span>
    <div id="contents">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: { type: String, default: "Default Headline" },
});
</script>

<style scoped>
#title {
  font-size: larger;
  color: black;
}

#card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  border-radius: var(--corner-radius-large);
  background: var(--secondary-color);
  padding: 1rem 1rem;
}

#contents {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>