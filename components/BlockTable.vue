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
          <span v-if="key === 'status' && row[key] > 0">  {{currentFieldStatus(row[key])}} </span>
          <span v-else-if="key === 'status'"> {{removeSeconds(row['starttime'])}}</span>
          <span v-else>{{ row[key] }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import {fieldStatus} from "~/components/fieldStatus";


const props = defineProps<{
  headings: string[]
  keys: string[]
  values: object[]
}>()

//TODO Make computed?
function currentFieldStatus(status) {
  if (+status) {
    return fieldStatus[status].name;
  }
}

//TODO computed and elegant?
function removeSeconds(time) {
  return time.slice(0, time.lastIndexOf(':'));
}

defineEmits<{
  (e: 'sort', heading: String): void
  (e: 'click', row: Object): void
}>()
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
  background: #35A4FB !important;
}

tr:nth-child(odd) {
  background: var(--grey-color-100);
}

tr:nth-child(even) {
  background: var(--grey-color-200);
}

.stat_official {
  color: green;
  font-weight: bold;
}
.stat_protest {
  color: red;
  font-weight: bold;
}
.stat_unofficial {
  color: orange;
  font-weight: bold;
}
.stat_started,
.stat_finishing {
  animation: blinker 2s linear infinite;
  color: green;
  font-weight: bold;
}
.stat_canceled {
  color: #737373;
}
@keyframes blinker {
  50% {
    opacity: 0.4;
  }
}

@media only screen and (min-width: 768px) {

}
</style>
