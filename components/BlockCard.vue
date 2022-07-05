<template>
    <div class="block-header" >
    {{ blockHeader }}
    </div>
    <Table :headings="headings" :keys="keys" :values="fields"/>
</template>

<script setup lang="ts">
import {fieldStatus} from "~/components/fieldStatus";

const headings = ['Veld', 'Aantal Ploegen', 'Status']
const keys = ['fieldnameshort', 'numberofteams', 'status']

const props = defineProps({
  fields: [],
});

const blockHeader = computed(() => {
    return (
        'Blok ' +
        props.fields[0].blocknumber +
        ': ' +
        removeSeconds(props.fields[0].starttime)
    );
});


function removeSeconds(starttime) {
  return starttime.slice(0, starttime.lastIndexOf(':'));
}


</script>

<style scoped lang="scss">

.block-header {
  padding: 10px;
  text-align: center;
  background: #012949;
  color: white;
  font-size: 13px;
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

/* For desktop design */
@media only screen and (min-width: 768px) {
  #card {
    border-radius: var(--corner-radius);
    width: 25rem;
  }
}
</style>
