<template>
  <Table :headings="headings" :key-type-pairs="keys" :values="clubs.all" />
</template>

<script setup lang="ts">
import useClubStore from '~/stores/useClubStore';
import useRegattaStore from '~/stores/useRegattaStore';
import { onMounted, useRoute } from '#imports';

const regattas = useRegattaStore();
const clubs = useClubStore();

const headings = ['Blad', 'Code', 'Vereniging', 'Aantal Ploegen'];
const keys = [
  { keys: ['clubshort'], type: 'TextField' },
  { keys: ['clubshort'], type: 'TextField' },
  { keys: ['clubname'], type: 'TextField' },
  { keys: ['numberofteams'], type: 'TextField' },
];

onMounted(async () => {
  await regattas.select(useRoute().params.id as string);
  await clubs.load();
});
</script>
