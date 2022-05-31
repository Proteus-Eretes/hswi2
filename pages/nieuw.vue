<template>
  <div id="landing">
    <span id="title">HOE SNEL WAS IK?</span>
    <RegattaSearch/>
    <span>Recente Regattas</span>
  </div>
    <RegattaList>
      <ListCard
          v-for="regatta in regattas.filtered"
          :key="regatta.shortname"
          :regatta="regatta"
          @click="regattas.select(regatta)"
      />
    </RegattaList>

</template>

<script setup lang="ts">

import RegattaSearch from "~/components/RegattaSearch.vue";
import {Regatta} from "~/models/regatta";
import {useRegattaStore} from "~/stores/regatta";

definePageMeta({
  layout: "noheader",
});

const regattas = useRegattaStore();
const recent = ref();
const filtered = ref<Regatta[]>();

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
