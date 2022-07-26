<template>
  <Table :headings="headings" :key-type-pairs="keys" :values="teams.all" />
</template>

<script setup lang="ts">
import useFieldStore from '~/stores/useFieldStore';
import useTeamStore from '~/stores/useTeamStore';
import useRegattaStore from '~/stores/useRegattaStore';
import { onMounted } from '#imports';

const regattas = useRegattaStore();
const fields = useFieldStore();
const teams = useTeamStore();

const headings = ['', 'Club Name', 'Rower 8'];
const keys = [
  { keys: ['clubnameshort'], type: 'TextField' },
  { keys: ['teamname'], type: 'TextField' },
  { keys: ['rower8'], type: 'TextField' },
];

onMounted(async () => {
  await regattas.select(useRoute().params.id as string);
  await fields.selectByURL(useRoute().params.field as string);
  await teams.load();
});
</script>
