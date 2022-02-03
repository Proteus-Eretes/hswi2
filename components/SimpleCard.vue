<template>
  <div id="card" class="clickable-element">
    <div>
      <img id="logo" :src="logo" alt="logo"/>
    </div>
    <span id="title">{{ title }}</span>
    <div>
      meer info hier plaatsen
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, default:"Default title" },
  logo:  { type: String, default:"public/logo.png" },
});
</script>

<style scoped lang="scss">
#card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--primary-color-dark);
  width: 100%;
  padding: 1rem;
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
  display: flex;
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

  .clickable-element {
    transition: ease 0.1s;

    &:hover, &:focus {
      transform: scale(1.03);
      cursor: pointer;
    }
  }
}
</style>