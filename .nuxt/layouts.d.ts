import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "noheader"
declare module '/Users/gerbuuun/Development/Proteus-Eretes/hswi2/node_modules/nuxt3/dist/pages/runtime/composables' {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}