<template>
  <div class="center-object">
    <RegattaHighlight text="Recente wedstrijden">
      <SimpleCard
          v-for="regatta in recent"
          :key="regatta.shortname"
          :title="regatta.regattaname"
          @click=""
      />
    </RegattaHighlight>
    <RegattaList>
      <ListCard
        v-for="regatta in regattas"
        :key="regatta.shortname"
        :title="regatta.regattaname"
      />
    </RegattaList>
  </div>
</template>

<script setup lang="ts">
import SimpleCard from "../components/SimpleCard.vue";
import RegattaHighlight from "~/components/RegattaHighlight.vue";
import RegattaList from "~/components/RegattaList.vue";
import ListCard from "~/components/ListCard.vue";
import axios from 'axios';
import {onMounted} from "@vue/runtime-core";

const regattas = ref();
const recent = ref();

onMounted(async () => {
  const { data } = await axios('https://www.hoesnelwasik.nl/api/')
  const wedstrijden = [];
  for (let regatta of data.regattas) {
    if (wedstrijden.find(e => e.regattaname == regatta.regattaname) === undefined) {
      wedstrijden.push({ regattaname: regatta.regattaname, years: [regatta.jaar], shortname: regatta.shortname })
    } else {
      wedstrijden.find(e => e.regattaname == regatta.regattaname).years.push(regatta.jaar)
    }
  }
  regattas.value = sortRegattas(wedstrijden);
  recent.value = wedstrijden.slice(0,3)
})

function sortRegattas(array): Array<object> {
  return array.sort((a,b) => a.regattaname.localeCompare(b.regattaname))
  //TODO: implement sort by date
}
</script>

<style scoped>
.center-object {
  display: flex;
  flex-direction: column;
}
</style>
