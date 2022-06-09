<template>
  <div id="wrapper">
    <input type="text" placeholder="Zoeken" v-model="input" v-on:keyup.enter="search()">
    <button @click="search()"><i class="material-icons">search</i></button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useRegattaStore from "~/stores/useRegattaStore";

const regattas = useRegattaStore()

const input = ref("")

function search(): void {
  regattas.filter(input.value)
}

onMounted(async () => {
  await regattas.load()
})
</script>

<style scoped lang="scss">
#wrapper {
  display: flex;
  width: 100%;
  height: 3rem;

  input {
    width: 100%;
    padding: 0 0.5rem;
    font-size: 1.5rem;
    border: none;
    border-radius: 0;
  }

  button {
    width: 5rem;
    border: none;

    &:hover, &:focus {
      background-color: #35A4FB;
    }

    &:active {
      background-color: #088FFA;
    }
  }
}

/* For desktop design */
@media only screen and (min-width: 768px) {
  #wrapper {
    width: 40rem;

    input {
      border-radius: 0.2rem 0 0 0.2rem;
    }

    button {
      border-radius: 0 0.2rem 0.2rem 0;
    }
  }
}
</style>
