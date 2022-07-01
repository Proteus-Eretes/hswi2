<template>
  <Table
    :headings="headings"
    :keys="keys"
    :values="fields.all"
    @click="navigateToField"
  />
</template>

<script setup lang="ts">
import { Ref } from "@vue/reactivity";
import { Field } from "~/models/field";
import useFieldStore from "~/stores/useFieldStore";
import useRegattaStore from "~/stores/useRegattaStore";
import useClubStore from "~/stores/useClubStore";

const regattas = useRegattaStore();
const fields = useFieldStore();
const clubs = useClubStore();

const headings: Ref<string[]> = ref([
  "Block",
  "Category",
  "Field",
  "Number of Rowers",
  "Number of Teams",
  "Start Time",
]);
const keys: Ref<string[]> = ref([
  "blocknumber",
  "category",
  "fieldnameshort",
  "numberofrowers",
  "numberofteams",
  "starttime",
]);

async function navigateToField(field: Field): Promise<void> {
  await fields.select(field);
  useRouter().push(`/${useRoute().params.id}/results/${fields.url}`);
}

onMounted(async () => {
  await regattas.select(useRoute().params.id as string);
  await fields.load();
});
</script>

<style scoped></style>
