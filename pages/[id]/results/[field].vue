<template>
  <Table :headings="headings" :keys="keys" :values="teams.all" />
</template>

<script setup lang="ts">
import { Ref } from '@vue/reactivity';
import useFieldStore from '~/stores/useFieldStore';
import useTeamStore from '~/stores/useTeamStore';
import useRegattaStore from '~/stores/useRegattaStore';

const regattas = useRegattaStore();
const fields = useFieldStore();
const teams = useTeamStore();

const headings: Ref<string[]> = ref(['', 'Club Name', 'Rower 8']);
const keys: Ref<string[]> = ref(['clubnameshort', 'teamname', 'rower8']);

onMounted(async () => {
  await regattas.select(useRoute().params.id as string);
  await fields.selectByURL(useRoute().params.field as string);
  await teams.load();
});
</script>
