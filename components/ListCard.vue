<template>
  <div id="card" class="clickable-element">
    <img id="logo" :src="logo"/>
    <span id="title">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  title: { type: String, default:"Default title" },
  logo:  { type: String, default:"../assets/logo.png" },
});
</script>

<style scoped>
#card {
  display: flex;
  background-color: var(--primary-color-dark);
  padding: 0.5rem;
  border-radius: var(--corner-radius);
  width: 20rem;
}

#logo {

}

#title {
  display: flex;
  font-size: x-large;
  width: 100%;
  margin: auto 0;
  justify-content: center;
  text-align: center;
}

</style>