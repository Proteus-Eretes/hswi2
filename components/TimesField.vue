<template>
  <TimeField v-for="time in props.times" :time="time" />
</template>

<script setup lang="ts">
import { Time } from '~/models/time';
import TimeField from '~/components/table/TimeField.vue';

const props = defineProps<{
  times: Time[];
}>();
</script>

<style scoped></style>
