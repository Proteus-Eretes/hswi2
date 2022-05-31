<template>
  <div class="center-object">
    <RegattaHighlight text="Recente wedstrijden">
      <SimpleCard
          v-for="regatta in regattas.recentRegattas"
          :key="regatta.shortname"
          :regatta="regatta"
          @click="regattas.selectRegatta(regatta)"
      />
    </RegattaHighlight>
    <RegattaList>
      <ListCard
        v-for="regatta in regattas.allRegattas"
        :key="regatta.shortname"
        :regatta="regatta"
        @click="regattas.selectRegatta(regatta)"
      />
    </RegattaList>
  </div>
</template>

<script setup lang="ts">
import SimpleCard from "../components/SimpleCard.vue";
import RegattaHighlight from "~/components/RegattaHighlight.vue";
import RegattaList from "~/components/RegattaList.vue";
import ListCard from "~/components/ListCard.vue";
import {useRegattaStore} from "~/stores/regatta";

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
