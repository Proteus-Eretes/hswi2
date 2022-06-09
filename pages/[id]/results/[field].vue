<template>
  <span style="color: black">{{ $route.params.field }}</span>
  <Table :headings="headings" :keys="keys" :values="fields.selected" />
</template>

<script setup lang="ts">
import {Ref} from "@vue/reactivity";
import useFieldStore from "~/stores/useFieldStore";
import useTeamStore from "~/stores/useTeamStore";

const fields = useFieldStore()
const teams = useTeamStore()

const headings: Ref<string[]> = ref(['Club Name', 'Field Name', ])
const keys: Ref<string[]> = ref([])

onMounted(async () => {
  await fields.selectByURL((useRoute().params.field as string).replace('%20', ' '))
  await teams.load()
  console.log(teams.entities)
})
</script>