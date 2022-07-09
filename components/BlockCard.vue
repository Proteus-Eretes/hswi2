<template>
  <div class="block-header">
    {{ blockHeader }}
  </div>
  <Table :headings="headings" :key-type-pairs="keys" :values="fields" />
</template>

<script setup lang="ts">
import { Field } from '~/models/field';

const headings = ['Veld', 'Aantal Ploegen', 'Status'];
const keys = [
  { keys: ['fieldnameshort'], type: 'TextField' },
  { keys: ['numberofteams'], type: 'TextField' },
  { keys: ['status', 'starttime'], type: 'FieldStatus' },
];

const props = defineProps<{
  fields: Field[];
}>();

const blockHeader = computed(
  () =>
    'Blok ' +
    props.fields[0].blocknumber +
    ': ' +
    removeSeconds(props.fields[0].starttime),
);

function removeSeconds(startTime: string): string {
  return startTime.slice(0, startTime.lastIndexOf(':'));
}
</script>

<style scoped lang="scss">
.block-header {
  padding: 10px;
  text-align: center;
  background: #012949;
  color: white;
  font-size: 13px;
}

/* For desktop design */
@media only screen and (min-width: 768px) {
  #card {
    border-radius: var(--corner-radius);
    width: 25rem;
  }
}
</style>
