<template>
  <table>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Number</th>
    </tr>
    <tr v-for="result in props.results"
        :key="result.rank"
        @click="$emit('click', result)"
    >
      <td>{{result.rank}}</td>
      <td>{{result.name}}</td>
      <td>{{result.time}}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
const props = defineProps<{
  results: { type: any, required: true },
}>()

defineEmits<{
  (e: 'click', result: any): void,
}>()
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

th {
  padding: 10px 5px;
  background: var(--primary-color-dark);
}

td {
  padding: 5px;
}

tr {
  border-bottom: 1px solid #ddd;
}

tr:nth-child(odd) {
  background: #fff;
}

tr:nth-child(even) {
  background: #eee;
}

@media only screen and (min-width: 768px) {

}
</style>