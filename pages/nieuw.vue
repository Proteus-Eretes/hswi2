<template>
  <div id="landing">
    <span id="title">HOE SNEL WAS IK?</span>
    <div>
      <input id="search" type="search" placeholder="Zoeken" v-model="searchQuery">
      <button id="search-button">
        <i class="material-icons-outlined">search</i>
      </button>
    </div>
    <span>Recente Regattas</span>
    <div id="recent">
      <SimpleCard
          v-for="regatta in recent"
          :key="regatta.shortname"
          :title="regatta.regattaname"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "@vue/runtime-core";
import axios from "axios";

definePageMeta({
  layout: "noheader",
});

const searchQuery = ref();
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
  recent.value = wedstrijden.slice(0,3)
})
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

#search {
  font-size: 1.3rem;
  padding: 0.5rem 0.3rem;
  width: 40rem;
}

#search-button {
  height: 100%;
  color: black;
}

#recent {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
}

/* For desktop design */
@media only screen and(min-width: 768px) {
  #tet {
    color: black;
  }
}
</style>