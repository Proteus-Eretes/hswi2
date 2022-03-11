<template>
  <div id="regattaname">
    <span>{{ $route.params.regatta }}</span>
  </div>
  <span>{{ regattas }}</span>
</template>

<script setup lang="ts">
import {onMounted} from "@vue/runtime-core";

const route = useRoute();
const fieldService = useFieldService();

const fields = ref();

onMounted(async () => {
  fields.value = fieldService.loadFields(route.params.regatta, route.params.year);
});
</script>

<style scoped lang="scss">
#regattaname {
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