<template>
  <Table
    :headings="headings"
    :values="fields.all"
    v-slot="{ row }"
    @click="navigateToField"
  >
    <td class="digit">{{ row.blocknumber }}</td>
    <td>{{ row.fieldnameshort }}</td>
    <td class="digit">{{ row.numberofteams }}</td>
    <td>{{ row.starttime }}</td>
  </Table>
</template>

<script setup lang="ts">
import { Field } from '~/models/field';
import useFieldStore from '~/stores/useFieldStore';
import useRegattaStore from '~/stores/useRegattaStore';
import useClubStore from '~/stores/useClubStore';

const regattas = useRegattaStore();
const fields = useFieldStore();
const clubs = useClubStore();

const headings = ['Block', 'Field', 'Number of Teams', 'Start Time'];

async function navigateToField(field: Field): Promise<void> {
  await fields.select(field);
  useRouter().push(`/${useRoute().params.id}/results/${fields.url}`);
}

onMounted(async () => {
  await regattas.select(useRoute().params.id as string);
  await fields.load();
});
</script>
<style scoped lang="scss">
.digit {
  text-align: center;
}
</style>
