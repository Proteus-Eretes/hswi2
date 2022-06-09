<template>
  <Clublist :clubs="clubs.all"/>
</template>

<script setup lang="ts">
import useClubStore from "~/stores/useClubStore";

const clubs = useClubStore()
</script>

<style scoped>

</style>