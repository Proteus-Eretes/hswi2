<template>
  <div class="block-header">
    {{ blockHeader }}
  </div>
  <Table :headings="headings" :values="fields" v-slot="{ row }">
    <td>{{ row.fieldnameshort }}</td>
    <td>{{ row.numberofteams }}</td>
    <td>
      <StatusField :status="row.status" :time="row.starttime" />
    </td>
  </Table>
</template>

<script setup lang="ts">
import { Field } from '~/models/field';
import StatusField from '~/components/table/StatusField.vue';

const headings = ['Veld', 'Aantal Ploegen', 'Status'];

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
