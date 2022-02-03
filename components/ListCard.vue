<template>
  <div id="card">
    <img id="logo" :src="logo" alt="logo"/>
    <span id="title">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, default:"Default title" },
  logo:  { type: String, default:"/logo.png" },
});
</script>

<style scoped lang="scss">
#card {
  display: flex;
  background-color: var(--primary-color-dark);
  padding: 0.5rem;
  width: 100%;

  &:hover, &:active {
    background-color: var(--primary-color-x-dark);
    cursor: pointer;
  }
}

#logo {
  width: 4rem;
  height: 4rem;
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
    width: 20rem;
  }
}
</style>