<template>
  <Clublist :clubs="clubs.all"/>
</template>

<script setup lang="ts">
import useClubStore from "~/stores/useClubStore";
import useRegattaStore from "~/stores/useRegattaStore";

const regattas = useRegattaStore()
const clubs = useClubStore()

onMounted(async () => {
  await regattas.select(useRoute().params.id as string)
  await clubs.load()
})
</script>

<style scoped>

</style>