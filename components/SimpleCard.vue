<template>
  <div id="card" class="clickable-element">
    <img id="logo" :src="logo" alt="logo"/>
    <div id="header" :style="style">
    </div>
    <div id="contents">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  title: { type: String, default:"" },
  logo:  { type: String, default:"assets/logo.png" },
  image: { type: String, default:"assets/materiaal.jpg" },
});

const style = computed(function() {
  return 'background-image: url("' + props.image + '")'
});
</script>

<style scoped>
#card {
  display: flex;
  flex-direction: column;
  width: 12rem;
  height: 15rem;
  border-radius: var(--corner-radius);
  overflow: hidden;
  user-select: none;
  position: relative;
}

#header {
  background-size: 100%;
  flex: 7rem;
  padding: 0.5rem 0.5rem 0;
  border-bottom: 3px solid var(--primary-color-light);
}

#contents {
  display: flex;
  flex: 8rem;
  background: var(--primary-color-dark);
  padding: 0 0.5rem 0.5rem;
  justify-content: center;
}

#contents>span {
  align-self: flex-end;
  padding-bottom: 0.5rem;
  text-align: center;
  font-size: large;
}

#logo {
  display: flex;
  position: absolute;
  width: 8rem;
  height: 8rem;
  padding: 3rem 2rem;
}
</style>