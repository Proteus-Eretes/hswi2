<template>
  <Table :headings="headings" :values="clubs.all" v-slot="{ row }">
    <td>{{ row.clubshort }}</td>
    <td>{{ row.clubname }}</td>
    <td>{{ row.numberofteams }}</td>
  </Table>
</template>

<script setup lang="ts">
import useClubStore from '~/stores/useClubStore';
import useRegattaStore from '~/stores/useRegattaStore';
import { onMounted, useRoute } from '#imports';

const regattas = useRegattaStore();
const clubs = useClubStore();

const headings = ['Blad', 'Vereniging', 'Aantal Ploegen'];

onMounted(async () => {
  await regattas.select(useRoute().params.id as string);
  await clubs.load();
});
</script>
