<template>
  <div class="center-object">
    <RegattaHighlight text="Recente wedstrijden">
      <SimpleCard
          v-for="regatta in data.slice(0,3)"
          :key="regatta.shortname"
          :title="regatta.regattaname"
      />
    </RegattaHighlight>
    <RegattaList>
      <ListCard
        v-for="regatta in data"
        :key="regatta.shortname"
        :title="regatta.regattaname"
      />
      <ListCard
          v-for="regatta in data"
          :key="regatta.shortname"
          :title="regatta.regattaname"
      />
    </RegattaList>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SimpleCard from "../components/SimpleCard.vue";
import { api } from '~/util/ApiData';
import RegattaHighlight from "~/components/RegattaHighlight.vue";
import RegattaList from "~/components/RegattaList.vue";
import ListCard from "~/components/ListCard.vue";

const data = ref(api);
</script>

<style scoped>
.center-object {
  display: flex;
  flex-direction: column;
}
</style>
