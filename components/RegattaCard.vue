<template>
  <div id="card" :style="style">
    <div id="card-contents">
      <div id="card-logo">
        <img :src="logo"/>
      </div>
      <div id="card-title">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  title: { type: String, default:"" },
  logo:  { type: String, default:"../assets/logo.png" },
  image: { type: String, default:"../assets/materiaal.jpg" },
});

const style = computed(function() {
  return 'background-image: url("' + props.image + '")'
});
</script>

<style scoped>
#card {
  display: flex;
  width: 15rem;
  height: 20rem;
  border-radius: 5px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  transition: ease 0.2s;
}

#card:hover, #card:focus, #card:focus-within {
  transform: scale(1.03);
}

#card-logo {
  display: flex;
  flex-grow: 9;
  border-radius: 100%;
  width: 60%;
  aspect-ratio: 1;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}

#card-logo > img {
  width: 100%;
}

#card-contents {
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
  text-align: center;
  color: white;
  align-content: center;
  background: linear-gradient(
      #ffffff00 45%,
      var(--primary-color-dark) 70%,
      var(--primary-color-dark) 100%);
}

#card-title {
  flex-grow: 1;
  font-size: x-large;
  font-family: sans-serif;
  text-align: center;
}
</style>