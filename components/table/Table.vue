<template>
  <div style="overflow-x: auto">
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
          <slot :row="row" :classes="'table-styling'">No Data</slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  headings: string[];
  values: object[];
}>();

defineEmits<{
  (e: 'sort', heading: String): void;
  (e: 'click', row: Object): void;
}>();
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th {
  padding: 10px 5px;
  color: white;
  background: var(--primary-color-dark);
  text-align: left;
}

td {
  padding: 5px 5px;
  color: black;
}

tr {
  border: none;
}

tr:hover {
  background: #35a4fb !important;
}

tr:nth-child(odd) {
  background: var(--grey-color-100);
}

tr:nth-child(even) {
  background: var(--grey-color-200);
}

@media only screen and (min-width: 768px) {
}
</style>
