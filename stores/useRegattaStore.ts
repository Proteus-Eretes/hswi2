import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { useDateFormatter } from '~~/composables/useDateFormatter';
import { GetRegattasResponse, Regatta } from '~/models/regatta';

interface RegattaState {
  ids: string[];
  entities: { [id: string]: Regatta };
  selectedId: string | null;
}

export default defineStore('regattas', () => {
  const { isBeforeOrAfter } = useDateFormatter();

  /* STATE */
  const data = useStorage<RegattaState>('regattaState', {
    ids: [],
    entities: {},
    selectedId: null,
  });
  const filteredIds = ref<string[]>([]);

  /* GETTERS */
  const all = computed<Regatta[]>(() =>
    data.value.ids
      .map((id: string) => data.value.entities[id])
      .sort((a: Regatta, b: Regatta) => isBeforeOrAfter(a.jaar, b.jaar)),
  );
  const selected = computed<Regatta>(
    () =>
      (data.value.selectedId && data.value.entities[data.value.selectedId]) ||
      null,
  );
  const recent = computed<Regatta[]>(() => all.value.slice(0, 3));
  const filtered = computed<Regatta[]>(() =>
    filteredIds.value
      .map((id: string) => data.value.entities[id])
      .sort((a: Regatta, b: Regatta) => isBeforeOrAfter(a.jaar, b.jaar)),
  );
  const exists = computed<boolean>(() => data.value.selectedId !== null);

  /* FUNCTIONS */
  async function load(): Promise<void> {
    try {
      const response = await $fetch<GetRegattasResponse>(
        useRuntimeConfig().BASE_URL,
      );
      const loadedRegattas = response.regattas;

      const regattaIds = loadedRegattas.map((regatta) => regatta.rid);
      const regattaEntities = loadedRegattas.reduce(
        (entities: { [id: string]: Regatta }, regatta: Regatta) => {
          return { ...entities, [regatta.rid]: regatta };
        },
        {},
      );

      data.value.ids = regattaIds;
      data.value.entities = regattaEntities;
    } catch (error) {
      console.error(error);
      //TODO: Toaster met error message
    }
  }

  async function select(rid: string): Promise<void> {
    if (!data.value.ids.includes(rid)) await load();
    data.value.selectedId = rid;
  }

  function filter(name: string): void {
    filteredIds.value = data.value.ids.filter((id) => {
      const regatta = data.value.entities[id];
      return (
        regatta.regattaname.toLowerCase().includes(name.toLowerCase()) ||
        regatta.shortname === name
      );
    });
  }

  return {
    state: data,
    filteredIds,
    all,
    selected,
    recent,
    filtered,
    exists,
    load,
    select,
    filter,
  };
});
