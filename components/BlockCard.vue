<template>
  <NuxtLink id="card" >
    <Table :headings="headings" :keys="keys" :values="block"/>
  </NuxtLink>
</template>

<script setup lang="ts">

const headings = ['Veld', 'Blok', 'Aantal Ploegen']
const keys = ['fieldnameshort', 'blocknumber', 'numberofteams']

defineProps({
  block: []
});
</script>

<style scoped lang="scss">
#card {
  display: flex;
  width: 100%;
  background-color: var(--primary-color-dark);
  padding: 0.5rem;
  text-decoration: none;
  color: var(--color);

  &:hover, &:active {
    background-color: var(--primary-color-x-dark);
    cursor: pointer;
  }
}

#title {
  display: flex;
  font-size: x-large;
  width: 100%;
  margin: auto 0;
  justify-content: center;
  text-align: center;
}

/* For desktop design */
@media only screen and (min-width: 768px) {
  #card {
    border-radius: var(--corner-radius);
    width: 25rem;
  }
}
</style>
