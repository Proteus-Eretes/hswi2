<template>
  <div id="name">
    <span>{{ regattas.state.selectedId }}</span>
    <NuxtLink :to="'/' + $route.params.id + '/clubs'">Clublist</NuxtLink>
    <NuxtLink :to="'/' + $route.params.id + '/results'">Results</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import useRegattaStore from "~/stores/useRegattaStore"

const regattas = useRegattaStore()

onMounted(async () => {
  await regattas.select(useRoute().params.id as string)
})
</script>

<style scoped lang="scss">
#name {
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  row-gap: 3%;
  justify-content: center;
  align-items: center;
  color: black;
}

/* For desktop design */
@media only screen and(min-width: 768px) {
}
</style>
