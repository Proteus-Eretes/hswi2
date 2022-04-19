<template>
  <NuxtLink id="card" :to="'/' + regatta.shortname + '/' + regatta.jaar" >
    <div id="content">
      <img id="logo" :src="logo" alt="logo"/>
      <span id="title">{{ regatta.regattaname }}</span>
      <span>Meer info hier</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
import {Regatta} from "~/models/regatta";

defineProps({
  regatta: { type: Object as PropType<Regatta>, required: true },
  logo:  { type: String, default:"/logo.png" },
});
</script>

<style scoped lang="scss">
#card {
  text-decoration: none;
  color: var(--color);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--primary-color-dark);
  width: 100%;

  &:hover, &:active {
    background-color: var(--primary-color-x-dark);
    cursor: pointer;
  }
}

#content {
  padding: 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#title {
  display: flex;
  font-size: x-large;
  width: 100%;
  margin: auto 0;
  justify-content: center;
  text-align: center;
}

#logo {
  width: 6rem;
  height: 6rem;
}

@media only screen and (min-width: 768px) {
  #card {
    width: 20rem;
    height: 15rem;
    border-radius: var(--corner-radius);
  }

  #logo {
    width: 8rem;
    height: 8rem;
  }
}
</style>