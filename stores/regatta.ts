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

  async function load(): Promise<void> {
    try {
      const data = await $fetch<GetRegattasResponse>(useRuntimeConfig().BASE_URL);
      const loadedRegattas = data.regattas

      const regattaIds = loadedRegattas.map((regatta) => regatta.rid);
      const regattaEntities = loadedRegattas.reduce(
        (entities: { [id: string]: Regatta }, regatta: Regatta) => {
          return { ...entities, [regatta.rid]: regatta };
        },
        {}
      );

      this.ids = regattaIds;
      this.entities = regattaEntities;
    } catch (error) {
      console.error(error);
      //TODO: Toaster met error message
    }
  }

  function select(regatta: Regatta): void {
    this.selectedId = regatta.rid;
  }

  function selectById(rid): void {
    this.selectedId = rid;
  }

  return {
    all,
    selected,
    recent,
    load,
    select,
    selectById,
  }
})