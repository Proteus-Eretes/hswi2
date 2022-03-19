<template>
  <div id="landing">
    <span id="title">HOE SNEL WAS IK?</span>
    <RegattaSearch/>
    <span>Recente Regattas</span>
    <div id="recent">
      <SimpleCard
          v-for="regatta in recent"
          :key="regatta.shortname"
          :regatta="regatta"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "@vue/runtime-core";
import axios from "axios";
import RegattaSearch from "~/components/RegattaSearch.vue";
import {Regatta} from "~/models/regatta";

definePageMeta({
  layout: "noheader",
});

const regattaService = useRegattaService();

const regattas = ref();
const recent = ref();

onMounted(async () => {
  const data = await regattaService.getRegattas();
  regattas.value = sortRegattas(data);
  recent.value = data.slice(0,3)
})

function sortRegattas(array): Array<Regatta> {
  return array.sort((a,b) => a.regattaname.localeCompare(b.regattaname))
  //TODO: implement sort by date
}
</script>

<style scoped lang="scss">
#landing {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  height: 100vh;
  background-color: #012949;
}

#title {
  font-size: 6rem;
  font-weight: bold;
}

#recent {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
}

/* For desktop design */
@media only screen and(min-width: 768px) {
}
</style>