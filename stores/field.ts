import {defineStore} from "pinia";
import {Field, GetFieldResponse} from "~/models/field";
import {useRegattaStore} from "~/stores/regatta";

interface FieldState {
  ids: string[];
  entities: { [id: string]: Field };
  selectedFieldId: string | null;
}

export const useFieldStore = defineStore('fields', () => {
  const regattas = useRegattaStore()

  /* STATE */
  const data = ref<FieldState>({
    ids: [],
    entities: {},
    selectedFieldId: null,
  })

  /* GETTERS */
  const all = computed<Field[]>(() => data.value.ids.map((id: string) => data.value.entities[id]))
  const selected = computed<Field>(() => (data.value.selectedFieldId && data.value.entities[data.value.selectedFieldId]) || null)

  /* FUNCTIONS */
  async function load(): Promise<void> {
    try {
      const url = useRuntimeConfig().BASE_URL + `wd/${regattas.selected.shortname}/${regattas.selected.jaar}/velden/`;
      const data = await $fetch<GetFieldResponse>(url);
      const loadedFields = data.fields

      const fieldIds = loadedFields.map((field) => field.field_id);
      const fieldEntities = loadedFields.reduce(
        (entities: { [id: string]: Field }, field: Field) => {
          return { ...entities, [field.field_id]: field };
        },
        {}
      );

      this.ids = fieldIds;
      this.entities = fieldEntities;
    } catch (error) {
      console.error(error);
      //TODO: Toaster met error message
    }
  }

  function select(field: Field): void {
    this.selectedId = field.field_id;
  }

  return {
    state: data,
    all,
    selected,
    load,
    select,
  }
})