<template>
  <span style="color: black">{{ $route.params.field }}</span>
  <Table :headings="headings" :keys="keys" :values="teams.all" />
</template>

<script setup lang="ts">
import {Ref} from "@vue/reactivity";
import useFieldStore from "~/stores/useFieldStore";
import useTeamStore from "~/stores/useTeamStore";
import useRegattaStore from "~/stores/useRegattaStore";

const regattas = useRegattaStore()
const fields = useFieldStore()
const teams = useTeamStore()

const headings: Ref<string[]> = ref(['Club Name', 'Rower 8', ])
const keys: Ref<string[]> = ref(['teamname', 'rower8'])

onMounted(async () => {
  await fields.selectByURL((useRoute().params.field as string)
      .replace('%20', ' ')
      .replace('%2B', '+'))
  await teams.load()
})
</script>