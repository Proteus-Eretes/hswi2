import { defineStore } from 'pinia';
import useRegattaStore from '~/stores/useRegattaStore';
import useFieldStore from '~/stores/useFieldStore';
import { Team, TeamGet } from '~/models/team';
import { DrawGet, DrawItem } from '~/models/draw';

export default defineStore('draw', () => {
  const regattas = useRegattaStore();
  const fields = useFieldStore();

  /* STATE */
  const ids = ref<string[]>([]);
  const entities = ref<{ [id: string]: DrawItem }>({});
  const selectedId = ref<string>(null);
  const sortedIds = ref<string[]>([]);

  /* GETTERS */
  const all = computed<DrawItem[]>(() =>
    ids.value.map((id: string) => entities.value[id]),
  );
  const sorted = computed<DrawItem[]>(() =>
    sortedIds.value.map((id: string) => entities.value[id]),
  );
  const selected = computed<DrawItem>(
    () => (selectedId.value && entities.value[selectedId.value]) || null,
  );

  /* FUNCTIONS */
  async function load(): Promise<void> {
    try {
      const url = `wd/${regattas.selected.shortname}/${regattas.selected.jaar}/${fields.url}/loting`;
      const response = await $fetch<DrawGet>(useRuntimeConfig().BASE_URL + url);
      const loadedTeams = response.teams;

      const teamIds = loadedTeams.map((team) => team.knrbid);
      const teamEntities = loadedTeams.reduce(
        (entities: { [id: string]: DrawItem }, team: DrawItem) => {
          return { ...entities, [team.knrbid]: team };
        },
        {},
      );

      ids.value = teamIds;
      entities.value = teamEntities;
    } catch (error) {
      console.error(error);
      //TODO: Toaster met error message
    }
  }

  function select(team: Team): void {
    selectedId.value = team.knrbid;
  }

  return {
    ids,
    entities,
    selectedId,
    sortedIds,
    all,
    sorted,
    selected,
    load,
    select,
  };
});
