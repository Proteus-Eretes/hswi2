import { defineStore } from 'pinia';
import useRegattaStore from '~/stores/useRegattaStore';
import { Field, GetFieldResponse } from '~/models/field';

export default defineStore('fields', () => {
  const regattas = useRegattaStore();

  /* STATE */
  const ids = ref<string[]>([]);
  const entities = ref<{ [id: string]: Field }>({});
  const selectedId = ref<string>(null);
  /* GETTERS */

  const all = computed<Field[]>(() =>
    ids.value
      .map((id: string) => entities.value[id])
      .sort((a, b) => {
        let ba = a.blocknumber,
          bb = b.blocknumber;
        let sa = a.starttime,
          sb = b.starttime;
        let na = a.name,
          nb = b.name;

        if (ba < bb) {
          return -1;
        } else if (bb < ba) {
          return 1;
        }

        if (sa < sb) {
          return -1;
        }
        if (sa > sb) {
          return 1;
        }
        if (na < nb) {
          return -1;
        } else if (nb < na) {
          return 1;
        }

        return 0;
      }),
  );
  const selected = computed<Field>(
    () => (selectedId.value && entities.value[selectedId.value]) || null,
  );
  const groupedBlock = computed<{ [id: number]: Field[] }>(() => {
    let groupedByBlock: { [id: number]: Field[] } = {};
    ids.value.map((id: string) => {
      if (!(entities.value[id].blocknumber in groupedByBlock))
        groupedByBlock[entities.value[id].blocknumber] = [];
      groupedByBlock[entities.value[id].blocknumber as number].push(
        entities.value[id],
      );
    });
    return groupedByBlock;
  });
  const url = computed<string>(() =>
    selected.value?.fieldnameshort.replace(' ', '%20').replace('+', '%2B'),
  );

  /* FUNCTIONS */
  async function load(): Promise<void> {
    try {
      const url = `wd/${regattas.selected.shortname}/${regattas.selected.jaar}/velden/`;
      const response = await $fetch<GetFieldResponse>(
        useRuntimeConfig().BASE_URL + url,
      );
      const loadedFields = response.fields;

      const fieldIds = loadedFields.map((field) => field.field_id);
      const fieldEntities = loadedFields.reduce(
        (entities: { [id: string]: Field }, field: Field) => {
          return { ...entities, [field.field_id]: field };
        },
        {},
      );

      ids.value = fieldIds;
      entities.value = fieldEntities;
    } catch (error) {
      console.error(error);
      //TODO: Toaster met error message
    }
  }

  async function select(field: Field): Promise<void> {
    if (!ids.value.includes(field.field_id)) await load();
    selectedId.value = field.field_id;
  }

  async function selectByURL(name: string): Promise<void> {
    let field = all.value.find(
      (e: Field) =>
        e.fieldnameshort.replace('%20', ' ').replace('%2B', '+') == name,
    );
    if (field == null) {
      await load();
      field = all.value.find(
        (e: Field) =>
          e.fieldnameshort.replace('%20', ' ').replace('%2B', '+') == name,
      );
    }
    selectedId.value = field.field_id;
  }

  return {
    ids,
    entities,
    selectedId,
    all,
    selected,
    url,
    groupedBlock,
    load,
    select,
    selectByURL,
  };
});
