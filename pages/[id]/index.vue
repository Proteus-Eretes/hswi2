<template>
  <div id="name">
    <span>{{ regattas.state.selectedId }}</span>
    <NuxtLink :to="'/' + $route.params.id + '/clubs'">Clublist</NuxtLink>
    <NuxtLink :to="'/' + $route.params.id + '/results'">Results</NuxtLink>
    <div v-for="block in fields.groupedBlock">
      <Table :headings="headings" :keys="keys" :values="block"/>
    </div>

  </div>
</template>

<script setup lang="ts">
import useRegattaStore from "~/stores/useRegattaStore"
import useFieldStore from "~/stores/useFieldStore";

const regattas = useRegattaStore()
const fields = useFieldStore()
const headings = ['Veld', 'Blok', 'Aantal Ploegen']
const keys = ['fieldnameshort', 'blocknumber', 'numberofteams']

onMounted(async () => {
  await regattas.select(useRoute().params.id as string)
  await fields.load()
})
</script>

<style scoped lang="scss">
#name {
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  row-gap: 3%;
  justify-content: center;
  align-items: center;
  color: black;
}

/* For desktop design */
@media only screen and(min-width: 768px) {
}
</style>
