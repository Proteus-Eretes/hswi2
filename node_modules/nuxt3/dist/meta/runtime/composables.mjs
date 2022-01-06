import { isFunction } from "@vue/shared";
import { computed } from "@vue/reactivity";
import { useNuxtApp } from "#app";
export function useMeta(meta) {
  const resolvedMeta = isFunction(meta) ? computed(meta) : meta;
  useNuxtApp()._useMeta(resolvedMeta);
}
