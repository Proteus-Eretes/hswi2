<template>
  <div id="background">
    <div id="card">
      {{ props.details.rank }} {{ props.details.name }} {{ props.details.time }}
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ details }>();
defineEmits<{
  (e: 'close'): void;
}>();
</script>

<style scoped>
#background {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #00000055;
}

#card {
  width: 20rem;
  height: 30rem;
  padding: 1rem;
  background: white;
  border-radius: 5px;
  color: black;
}
</style>
