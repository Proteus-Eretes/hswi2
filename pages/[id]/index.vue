<template>
  <div id="name">
    <span>{{ regattas.selected?.regattaname }}</span>
    <NuxtLink :to="'/' + $route.params.id + '/clubs'">Clublist</NuxtLink>
    <NuxtLink :to="'/' + $route.params.id + '/results'">Results</NuxtLink>
    <div class="grid-container">
      <div v-for="block in fields.groupedBlock" class="grid-item">
        <BlockCard :key="block[0].blockid" :fields="block" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useRegattaStore from '~/stores/useRegattaStore';
import useFieldStore from '~/stores/useFieldStore';
import BlockCard from '~/components/BlockCard.vue';

const regattas = useRegattaStore();
const fields = useFieldStore();

onMounted(async () => {
  await regattas.select(useRoute().params.id as string);
  await fields.load();
});
</script>

<style scoped lang="scss">
#name {
  padding-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  justify-content: center;
  align-items: center;
  color: black;
}

.grid-container {
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: auto auto auto;
  padding: 10px;
  gap: 50px;
}

/* For desktop design */
@media only screen and(min-width: 768px) {
}
</style>
