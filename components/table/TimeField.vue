<template>
  <span id="time">{{ timeFormatter.secondsToTime(time.totaltime) }}</span>
  <span id="rank"> [{{ time.rank }}]</span>
</template>

<script setup lang="ts">
import { Time } from '~/models/time';
import { useTimeFormatter } from '~/composables/useTimeFormatter';

defineProps<{
  time: Time;
}>();

const timeFormatter = useTimeFormatter();
</script>

<style scoped>
#time {
  font-size: 16px;
  font-weight: 300;
}

#rank {
  font-size: 16px;
  font-weight: 200;
}
</style>
