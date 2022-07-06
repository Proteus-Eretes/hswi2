<template>
    <div class="block-header" >
    {{ blockHeader }}
    </div>
    <BlockTable :headings="headings" :keys="keys" :values="fields"/>
</template>

<script setup lang="ts">

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

/* For desktop design */
@media only screen and (min-width: 768px) {
  #card {
    border-radius: var(--corner-radius);
    width: 25rem;
  }
}
</style>
