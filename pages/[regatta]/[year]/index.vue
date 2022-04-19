<template>
  <div id="name">
    <span>{{ $route.params.regatta }}</span>
  </div>
</template>

<script setup lang="ts">
import {useFieldStore} from "~/stores/field";

const fields = useFieldStore();

onMounted(async () => {
  await fields.loadFields();
})
</script>

<style scoped lang="scss">
#name {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}

/* For desktop design */
@media only screen and(min-width: 768px) {

}
</style>