<template>
  <span :class="fieldStatus[data.status].class">{{ statusString }}</span>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';

const props = defineProps<{
  data: { status: number; time: string };
}>();

const fieldStatus = [
  { name: 'Aangemaakt', class: '' },
  { name: 'Officieel', class: 'stat_official' },
  { name: 'Onderworpen aan protest', class: 'stat_protest' },
  { name: 'Onofficieel', class: 'stat_unofficial' },
  { name: 'Gestart', class: 'stat_started' },
  { name: 'Aan het finishen', class: 'stat_finishing' },
  { name: 'Geannuleerd', class: 'stat_canceled' },
];

const statusString = computed(() => {
  return props.data.status > 0
    ? fieldStatus[props.data.status].name
    : props.data.time;
});
</script>

<style scoped>
.stat_official {
  color: green;
  font-weight: bold;
}

.stat_protest {
  color: red;
  font-weight: bold;
}

.stat_unofficial {
  color: orange;
  font-weight: bold;
}

.stat_started,
.stat_finishing {
  animation: blinker 2s linear infinite;
  color: green;
  font-weight: bold;
}

.stat_canceled {
  color: #737373;
}

@keyframes blinker {
  50% {
    opacity: 0.4;
  }
}
</style>
