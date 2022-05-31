import {defineStore} from "pinia";
import {Club, ClubGet} from "~/models/club";
import {useRegattaStore} from "~/stores/regatta";

interface ClubState {
  ids: string[];
  entities: { [id: string]: Club };
  selectedId: string | null;
}

export const useClubStore = defineStore('clubs', () => {
  const regattas = useRegattaStore()

  /* STATE */
  const data = ref<ClubState>({
    ids: [],
    entities: {},
    selectedId: null,
  })

  /* GETTERS */
  const all = computed<Club[]>(() => data.value.ids.map((id: string) => data.value.entities[id]))
  const selected = computed<Club>(() => (data.value.selectedId && data.value.entities[data.value.selectedId]) || null)

  /* FUNCTIONS */
  async function load(): Promise<void> {
    try {
      const url = useRuntimeConfig().BASE_URL + `wd/${regattas.selected.shortname}/${regattas.selected.jaar}/clublist/`;
      const data = await $fetch<ClubGet>(url);
      const loadedClubs = data.clubs

      const clubIds = loadedClubs.map((club) => club.clubid);
      const clubEntities = loadedClubs.reduce(
        (entities: { [id: string]: Club }, club: Club) => {
          return { ...entities, [club.clubid]: club };
        },
        {}
      );

      this.ids = clubIds;
      this.entities = clubEntities;
    } catch (error) {
      console.error(error);
      //TODO: Toaster met error message
    }
  }

  function select(club: Club): void {
    this.selectedId = club.clubid;
  }

  return {
    state: data,
    all,
    selected,
    load,
    select,
  }
})