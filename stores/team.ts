import { defineStore } from "pinia"
import useRegattaStore from "~/stores/regatta"
import useFieldStore from "~/stores/field"
import { Team, TeamGet } from "~/models/team"

export default defineStore("teams", () => {
  const regattas = useRegattaStore()
  const fields = useFieldStore()

  /* STATE */
  const ids = ref<string[]>([])
  const entities = ref<{ [id: string]: Team }>({})
  const selectedId = ref<string>(null)

  /* GETTERS */
  const all = computed<Team[]>(() => ids.value.map((id: string) => entities.value[id]))
  const selected = computed<Team>(() => (selectedId.value && entities.value[selectedId.value]) || null)

  /* FUNCTIONS */
  async function load(): Promise<void> {
    try {
      const url = `wd/${regattas.selected.shortname}/${regattas.selected.jaar}/${fields.url}/uitslagen`
      const response = await $fetch<TeamGet>(useRuntimeConfig().BASE_URL + url)
      const loadedTeams = response.teams

      const teamIds = loadedTeams.map((team) => team.knrbid)
      const teamEntities = loadedTeams.reduce((entities: { [id: string]: Team }, team: Team) => {
        return { ...entities, [team.knrbid]: team }
      }, {})

      ids.value = teamIds
      entities.value = teamEntities
    } catch (error) {
      console.error(error)
      //TODO: Toaster met error message
    }
  }

  function select(team: Team): void {
    selectedId.value = team.knrbid
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
