import {defineStore} from "pinia";
import {Club, ClubGet} from "~/models/club";
import {useRegattaStore} from "~/stores/regatta";

export const useClubStore = defineStore('clubs', () => {
  const regattas = useRegattaStore()

  /* STATE */
  const ids = ref<string[]>([])
  const entities = ref<{ [id: string]: Club }>({})
  const selectedId = ref<string>(null)

  /* GETTERS */
  const all = computed<Club[]>(() => ids.value.map((id: string) => entities.value[id]))
  const selected = computed<Club>(() => (selectedId.value && entities.value[selectedId.value]) || null)

  /* FUNCTIONS */
  async function load(): Promise<void> {
    try {
      const url = useRuntimeConfig().BASE_URL + `wd/${regattas.selected.shortname}/${regattas.selected.jaar}/clublist/`;
      const response = await $fetch<ClubGet>(url);
      const loadedClubs = response.clubs

      const clubIds = loadedClubs.map((club) => club.clubid);
      const clubEntities = loadedClubs.reduce(
        (entities: { [id: string]: Club }, club: Club) => {
          return { ...entities, [club.clubid]: club };
        },
        {}
      );

      ids.value = clubIds;
      entities.value = clubEntities;
    } catch (error) {
      console.error(error);
      //TODO: Toaster met error message
    }
  }

  function select(club: Club): void {
    selectedId.value = club.clubid;
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