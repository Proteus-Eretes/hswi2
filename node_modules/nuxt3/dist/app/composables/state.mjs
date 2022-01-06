import { toRef } from "vue";
import { useNuxtApp } from "#app";
export const useState = (key, init) => {
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    state.value = init();
  }
  return state;
};
