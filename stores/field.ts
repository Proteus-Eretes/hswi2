import {defineStore} from "pinia";
import {Field, GetFieldResponse} from "~/models/field";
import {useRegattaStore} from "~/stores/regatta";

export const useFieldStore = defineStore('fields', () => {
  const regattas = useRegattaStore()

  /* STATE */
  const ids = ref<string[]>([])
  const entities = ref<{ [id: string]: Field }>({})
  const selectedId = ref<string>(null)

  /* GETTERS */
  const all = computed<Field[]>(() => ids.value.map((id: string) => entities.value[id]))
  const selected = computed<Field>(() => (selectedId.value && entities.value[selectedId.value]) || null)

  /* FUNCTIONS */
  async function load(): Promise<void> {
    try {
      const url = useRuntimeConfig().BASE_URL + `wd/${regattas.selected.shortname}/${regattas.selected.jaar}/velden/`;
      const response = await $fetch<GetFieldResponse>(url);
      const loadedFields = response.fields

      const fieldIds = loadedFields.map((field) => field.field_id);
      const fieldEntities = loadedFields.reduce(
        (entities: { [id: string]: Field }, field: Field) => {
          return { ...entities, [field.field_id]: field };
        },
        {}
      );

      ids.value = fieldIds;
      entities.value = fieldEntities;
    } catch (error) {
      console.error(error);
      //TODO: Toaster met error message
    }
  }

  function select(field: Field): void {
    selectedId.value = field.field_id;
  }

  return {
    ids,
    entities,
    selectedId,
    all,
    selected,
    load,
    select,
  }
})