<template>
  <div id="wrapper">
    <span id="title">Alle Wedstrijden</span>
    <div id="content">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
#title {
  font-size: x-large;
  font-weight: bold;
  text-align: center;
  color: black;
  margin: 0.5rem 0;
}

#wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.1rem;
}

#content {
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem;
  justify-content: center;
}

/* For desktop design */
@media only screen and(min-width: 768px) {
  #title {
    font-size: xx-large;
    margin: 2rem 0;
  }

  #wrapper {
    align-items: center;
    margin-bottom: 2rem;
  }

  #content {
    width: 55rem;
    gap: 0.2rem;
  }
}
</style>