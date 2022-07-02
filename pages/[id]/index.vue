<template>
  <div id="name">
    <span>{{ regattas.state.selectedId }}</span>
    <NuxtLink :to="'/' + $route.params.id + '/clubs'">Clublist</NuxtLink>
    <NuxtLink :to="'/' + $route.params.id + '/results'">Results</NuxtLink>
      <BlockCard
        v-for="block in fields.groupedBlock"
        :key="block[0].blockid"
        :block="block"
      >
      </BlockCard>
    </div>
</template>

<script setup lang="ts">
import useRegattaStore from "~/stores/useRegattaStore"
import useFieldStore from "~/stores/useFieldStore";
import ListCard from "~/components/ListCard.vue";
import BlockCard from "~/components/BlockCard.vue";

const regattas = useRegattaStore()
const fields = useFieldStore()

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
