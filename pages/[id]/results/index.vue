<template>
  <Table
    :headings="headings"
    :key-type-pairs="keys"
    :values="fields.all"
    @click="navigateToField"
  />
</template>

<script setup lang="ts">
import { Field } from '~/models/field';
import useFieldStore from '~/stores/useFieldStore';
import useRegattaStore from '~/stores/useRegattaStore';
import useClubStore from '~/stores/useClubStore';

const regattas = useRegattaStore();
const fields = useFieldStore();
const clubs = useClubStore();

const headings = [
  'Block',
  'Category',
  'Field',
  'Number of Rowers',
  'Number of Teams',
  'Start Time',
];
const keys = [
  { keys: ['blocknumber'], type: 'TextField' },
  { keys: ['category'], type: 'TextField' },
  { keys: ['fieldnameshort'], type: 'TextField' },
  { keys: ['numberofrowers'], type: 'TextField' },
  { keys: ['numberofteams'], type: 'TextField' },
  { keys: ['starttime'], type: 'TextField' },
];

async function navigateToField(field: Field): Promise<void> {
  await fields.select(field);
  useRouter().push(`/${useRoute().params.id}/results/${fields.url}`);
}

onMounted(async () => {
  await regattas.select(useRoute().params.id as string);
  await fields.load();
});
</script>
