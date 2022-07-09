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
        <td v-for="obj in keyTypePairs">
          <component
            :is="components[obj.type]"
            v-bind="{ data: reduceObject(row, obj.keys) }"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import TextField from '~/components/table/TextField.vue';
import FieldStatus from '~/components/table/FieldStatus.vue';

const components = {
  TextField: TextField,
  FieldStatus: FieldStatus,
};
const props = defineProps<{
  headings: string[];
  keyTypePairs: { keys: string[]; type: string }[];
  values: object[];
}>();

defineEmits<{
  (e: 'sort', heading: String): void;
  (e: 'click', row: Object): void;
}>();

function reduceObject(obj: object, keys: string[]): object {
  if (keys === undefined) return {};
  return keys.reduce(function (newObj, key) {
    if (key in obj) newObj[key] = obj[key];
    return newObj;
  }, {});
}
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
