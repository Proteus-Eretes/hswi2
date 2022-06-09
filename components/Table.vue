<template>
  <table>
    <thead>
      <tr>
        <th v-for="heading in props.headings" @click="$emit('sort', heading)">
          {{ heading }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in props.values" @click="$emit('click', row)">
        <td v-for="key in keys">
          {{ row[key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const props = defineProps<{
  headings: string[]
  keys: string[]
  values: object[]
}>()

defineEmits<{
  (e: 'sort', heading: String): void
  (e: 'click', row: Object): void
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
  color: black;
}

tr {
  border-bottom: 1px solid #ddd;
}

tr:hover {
  background: #35A4FB !important;
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