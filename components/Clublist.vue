<template>
  <Table :headings="headings" :keys="keys" :values="props.clubs" />
</template>

<script setup lang="ts">
import { Club } from '~/models/club';

const headings = ['Blad', 'Code', 'Vereniging', 'Aantal Ploegen'];
const keys = ['clubshort', 'clubshort', 'clubname', 'numberofteams'];

const props = defineProps<{
  clubs: Club[];
}>();
</script>

<style scoped></style>
