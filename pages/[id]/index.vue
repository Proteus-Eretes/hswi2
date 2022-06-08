<template>
  <div id="name">
    <span>{{ regattas.state.selectedId }}</span>
    <NuxtLink :to="'/' + $route.params.id + '/clubs'">Clublist</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import useFieldStore from "~/stores/field";
import useClubStore from "~/stores/club";
import useRegattaStore from "~/stores/regatta";

const regattas = useRegattaStore();
const fields = useFieldStore();
const clubs = useClubStore();

onMounted(async () => {
  regattas.selectById(useRoute().params.id as string);
  await fields.load();
  await clubs.load();
});
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
