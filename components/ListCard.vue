<template>
  <NuxtLink id="card" :to="'/' + regatta.rid">
    <img id="logo" :src="logo" alt="logo"/>
    <span id="title">{{ regatta.regattaname }} {{regatta.jaar}}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import {Regatta} from "~/models/regatta";
import {PropType} from "@vue/runtime-core";

defineProps({
  regatta: { type: Object as PropType<Regatta>, required: true },
  logo:  { type: String, default:"/logo.png" },
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
    width: 25rem;
  }
}
</style>