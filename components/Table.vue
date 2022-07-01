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
          <img
            v-if="key === 'clubnameshort'"
            :src="`/${row[key]}.svg`"
            id="blade"
          />
          <span v-else>{{ row[key] }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const props = defineProps<{
  headings: string[];
  keys: string[];
  values: object[];
}>();

defineEmits<{
  (e: 'sort', heading: String): void;
  (e: 'click', row: Object): void;
}>();
</script>

<style scoped>
#blade {
  width: 50px;
  height: 25px;
  border: 1px solid black;
  border-radius: 2px;
}

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
  padding: 3px 0 0 0;
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
