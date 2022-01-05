<template>
  <div id="header"></div>
  <slot/>
</template>

<script>
export default {
  name: "normaal"
}
</script>

<style>
#header {
  display: flex;
  background: #889294;
  width: 100%;
  height: 5rem;
}
</style>