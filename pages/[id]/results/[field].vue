<template>
  <a :href="fieldURL">Velden</a><br />
  <a :href="drawURL">Naar loting</a>

  <Table :headings="headings" :values="teams.all" v-slot="{ row }">
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
    <TimesField :times="row.times"/>
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
import TimesField from "~/components/TimesField.vue";

// Navigation
const fieldURL = computed(() => `/${route.params.id}/results/`);
const drawURL = computed(
  () => `/${route.params.id}/draw/${route.params.field}`,
);

const regattas = useRegattaStore();
const fields = useFieldStore();
const teams = useTeamStore();
const route = useRoute();

const headings = ['', 'Ploeg', 'Tijd1','Tijd2', 'Tijd3'];



onMounted(async () => {
  await regattas.select(useRoute().params.id as string);
  await fields.selectByURL(useRoute().params.field as string);
  await teams.load();
});
</script>

<style>
td {
  padding: 5px
}
</style>
