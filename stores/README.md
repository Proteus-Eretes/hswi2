# Stores

Om er voor te zorgen dat alle data overal beschikbaar is
zonder alles door te geven als props of terug te sturen
via een event, gebruiken we stores.

Voor deze app gebruiken we [Pinia](https://pinia.vuejs.org/)

De stores in deze folder zijn geschreven in de composition api:
```Typescript
export default defineStore('storeName', () => {
  
  /* STATE */
  const ids: Ref<string[]> = ref([])
  const entities: Ref<{ [id: string]: Regatta }> = ref({})
  const selectedId: Ref<string> = ref(null)

  /* GETTERS */
  const getterName = computed<type>(() => {return value})

  /* FUNCTIONS */
  function functionName(): void {
    // Do something
  }

  /* Make everything available */
  return {
    ids,
    entities,
    selectedId,
    getterName,
    functionName,
  }
})
```