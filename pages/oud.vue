<template>
  <div class="center-object">
    <RegattaHighlight text="Recente wedstrijden">
      <SimpleCard
        v-for="regatta in regattas.recent"
        :key="regatta.shortname"
        :regatta="regatta"
        @click="regattas.select(regatta)"
      />
    </RegattaHighlight>
    <RegattaList>
      <ListCard
        v-for="regatta in regattas.all"
        :key="regatta.shortname"
        :regatta="regatta"
        @click="regattas.select(regatta)"
      />
    </RegattaList>
  </div>
</template>

<script setup lang="ts">
import SimpleCard from "../components/SimpleCard.vue";
import RegattaHighlight from "~/components/RegattaHighlight.vue";
import RegattaList from "~/components/RegattaList.vue";
import ListCard from "~/components/ListCard.vue";
import useRegattaStore from "~/stores/useRegattaStore";

const regattas = useRegattaStore();

onMounted(async () => {
  await regattas.load();
});
</script>

<style scoped>
.center-object {
  display: flex;
  flex-direction: column;
}
</style>
