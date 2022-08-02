<template>
  <Table :headings="headings" :values="teams.all" v-slot="{ row }">
    <td>{{ row.times[0].rank }}</td>
    <td>
      <BladeField :code="row.clubnameshort" />
    </td>
    <td>
      <TeamField
        :teamname="row.teamname"
        :backnumber="row.times[0].backnumber"
        :rower8="row.rower8"
      />
    </td>
    <td>
      <TimeField :time="row.times[0]" />
    </td>
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

const headings = ['', '', 'Ploeg', 'Tijd'];

onMounted(async () => {
  await regattas.select(useRoute().params.id as string);
  await fields.selectByURL(useRoute().params.field as string);
  await teams.load();
});
</script>

<style scoped>
td {
  padding: 5px;
}
</style>
