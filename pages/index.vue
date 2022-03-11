<template>
  <div class="center-object">
    <RegattaHighlight text="Recente wedstrijden">
      <SimpleCard
          v-for="regatta in recent"
          :key="regatta.shortname"
          :title="regatta.regattaname"
          :link="concatStrings(regatta.shortname, regatta.jaar)"
      />
    </RegattaHighlight>
    <RegattaList>
      <ListCard
        v-for="regatta in regattas"
        :key="regatta.shortname"
        :title="regatta.regattaname"
        :link="concatStrings(regatta.shortname, regatta.jaar)"
      />
    </RegattaList>
  </div>
</template>

<script setup lang="ts">
import SimpleCard from "../components/SimpleCard.vue";
import RegattaHighlight from "~/components/RegattaHighlight.vue";
import RegattaList from "~/components/RegattaList.vue";
import ListCard from "~/components/ListCard.vue";
import {onMounted} from "@vue/runtime-core";
import {Regatta} from "~/models/regatta";

const regattaService = useRegattaService();

const regattas = ref();
const recent = ref();

onMounted(async () => {
  const data = await regattaService.loadRegattas();
  regattas.value = sortRegattas(data);
  recent.value = data.slice(0,3)
})

function sortRegattas(array): Array<Regatta> {
  return array.sort((a,b) => a.regattaname.localeCompare(b.regattaname))
  //TODO: implement sort by date
}

function concatStrings(regatta, year): string {
  return regatta + '/' + year;
}
</script>

<style scoped>
.center-object {
  display: flex;
  flex-direction: column;
}
</style>
