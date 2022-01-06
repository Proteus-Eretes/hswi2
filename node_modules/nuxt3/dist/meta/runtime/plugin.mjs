import { getCurrentInstance } from "vue";
import * as Components from "./components.mjs";
import { useMeta } from "./composables.mjs";
import { defineNuxtPlugin } from "#app";
import metaConfig from "#build/meta.config.mjs";
export default defineNuxtPlugin((nuxtApp) => {
  useMeta(metaConfig.globalMeta);
  nuxtApp.vueApp.mixin({
    [metaConfig.mixinKey]() {
      const instance = getCurrentInstance();
      const options = instance?.type || instance?.proxy?.$options;
      if (!options || !("head" in options)) {
        return;
      }
      useMeta(options.head);
    }
  });
  for (const name in Components) {
    nuxtApp.vueApp.component(name, Components[name]);
  }
});
