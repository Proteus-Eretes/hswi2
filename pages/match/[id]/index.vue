<template>
  <div id="name">
    <span>{{ regattas.selectedId }}</span><br/>
    <span>{{ fields.selectedRegattaId }}</span><br/>
    <span>{{ clubs.selectedRegattaId }}</span><br/>
    <NuxtLink :to="'/match/' + $route.params.id + '/clubs'">Clublist</NuxtLink><br/>
  </div>
</template>

<script setup lang="ts">
import {useFieldStore} from "~/stores/field";
import {useClubStore} from "~/stores/club";
import {useRegattaStore} from "~/stores/regatta";

const regattas = useRegattaStore()
const fields = useFieldStore();
const clubs = useClubStore();

onMounted(async () => {
  regattas.selectRegattaById(useRoute().params.id)
  await fields.loadFields();
  await clubs.loadClubs();
})
</script>

<style scoped lang="scss">
#name {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}

/* For desktop design */
@media only screen and(min-width: 768px) {

}
</style>