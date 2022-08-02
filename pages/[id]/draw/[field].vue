<template>
  <Table :headings="headings" :values="draws.all" v-slot="{ row }">
    <td>
      <BladeField :code="row.clubnameshort" />
    </td>
    <td>
      <TeamField
        :teamname="row.teamname"
        :backnumber="row.backnumber"
        :rower8="row.rower8"
      />
    </td>
    <td>[ {{ row.tossorder }} ]</td>
  </Table>
</template>

<script setup lang="ts">
import useFieldStore from '~/stores/useFieldStore';
import useTeamStore from '~/stores/useTeamStore';
import useRegattaStore from '~/stores/useRegattaStore';
import { onMounted } from '#imports';
import TeamField from '~/components/table/TeamField.vue';
import TimeField from '~/components/table/TimeField.vue';
import BladeField from '~/components/table/BladeField.vue';
import useDrawStore from '~/stores/useDrawStore';

const regattas = useRegattaStore();
const fields = useFieldStore();
const teams = useTeamStore();
const draws = useDrawStore();

const headings = ['Vereniging', 'Ploeg', 'Volgorde'];

onMounted(async () => {
  await regattas.select(useRoute().params.id as string);
  await fields.selectByURL(useRoute().params.field as string);
  await draws.load();
});
</script>

<style scoped>
td {
  padding: 5px;
}
</style>
