<template>
  <table>
    <tr>
      <th v-for="heading in props.headings"
          :key="heading"
          @click="$emit('sort', heading)"
      >
        {{ heading }}
      </th>
    </tr>
    <tr v-for="row in props.values"
        :key="row"
        @click="$emit('click', row)"
    >
      <td v-for="key in keys" :key="key">
        {{ row[key] }}
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
const props = defineProps<{
  headings: string[]
  keys: string[]
  values: object[]
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

tr:nth-child(odd) {
  background: #fff;
}

tr:nth-child(even) {
  background: #eee;
}

@media only screen and (min-width: 768px) {

}
</style>