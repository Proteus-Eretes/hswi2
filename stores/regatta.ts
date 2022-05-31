import {defineStore} from "pinia";
import { useDateFormatter } from '~~/composables/useDateFormatter';
import {useStorage} from "@vueuse/core";
import {GetRegattasResponse, Regatta} from "~/models/regatta";

interface RegattaState {
  ids: string[];
  entities: { [id: string]: Regatta };
  selectedId: string | null;
}

export const useRegattaStore = defineStore('regattas', () => {
  const {isBeforeOrAfter} = useDateFormatter()

  const data = useStorage<RegattaState>('regattaState', {
    ids: [],
    entities: {},
    selectedId: null,
    filteredIds: [],
  })

  const all = computed<Regatta[]>(() => data.value.ids.map(
    (id: string) => data.value.entities[id]).sort(
      (a: Regatta, b: Regatta) => isBeforeOrAfter(a.jaar, b.jaar)
    )
  )
  const selected = computed<Regatta>(() => (data.value.selectedId && data.value.entities[data.value.selectedId]) || null)
  const recent = computed<Regatta[]>(() => data.value.ids.map(
    (id: string) => data.value.entities[id]).sort(
      (a: Regatta, b: Regatta) => isBeforeOrAfter(a.jaar, b.jaar)
    ).slice(0,3)
  )
  const filtered = computed<Regatta[]>(() => data.value.filteredIds.map(
          (id: string) => data.value.entities[id]).sort(
          (a: Regatta, b: Regatta) => isBeforeOrAfter(a.jaar, b.jaar)
      )
  )

  async function load(): Promise<void> {
    try {
      const response = await $fetch<GetRegattasResponse>(useRuntimeConfig().BASE_URL);
      const loadedRegattas = response.regattas

      const regattaIds = loadedRegattas.map((regatta) => regatta.rid);
      const regattaEntities = loadedRegattas.reduce(
        (entities: { [id: string]: Regatta }, regatta: Regatta) => {
          return { ...entities, [regatta.rid]: regatta };
        },
        {}
      );

      data.value.ids = regattaIds;
      data.value.entities = regattaEntities;
    } catch (error) {
      console.error(error);
      //TODO: Toaster met error message
    }
  }

  function select(regatta: Regatta): void {
    data.value.selectedId = regatta.rid;
  }

  function selectById(rid: string): void {
    data.value.selectedId = rid;
  }

  function filter(name: string): void {
    data.value.filteredIds = data.value.ids.filter(id => {
      const regatta = data.value.entities[id]
      return regatta.regattaname.toLowerCase().includes(name.toLowerCase()) || regatta.shortname === name
    })
    console.log(data.value.filteredIds)
  }

  return {
    state: data,
    all,
    selected,
    recent,
    filtered,
    load,
    select,
    selectById,
    filter,
  }
})
