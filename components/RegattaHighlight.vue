<template>
  <div id="wrapper">
    <span id="title">{{ text }}</span>
    <div id="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: { type: String, default: "Default Headline" },
});
</script>

<style scoped lang="scss">
#title {
  font-size: x-large;
  font-weight: bold;
  text-align: center;
  color: black;
  margin: 0.5rem;
}

#wrapper {
  display: flex;
  flex-direction: column;
}

#content {
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem;
  justify-content: center;
}

/* For desktop design */
@media only screen and (min-width: 768px) {
  #title {
    color: var(--color);
    font-size: xx-large;
    margin: 3rem 0;
  }

  #wrapper {
    background: url("/highlight_background.jpg") center;
    background-size: cover;
  }

  #content {
    gap: 1rem;
    margin-bottom: 6rem;
  }
}
</style>
