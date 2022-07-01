import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  ssr: false,
  css: ["@/assets/css/style.scss"],
  buildModules: ["@pinia/nuxt", "@vueuse/nuxt"],
  meta: {
    link: [
      {
        href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined",
        rel: "stylesheet",
      },
    ],
  },
  publicRuntimeConfig: {
    BASE_URL: "https://dev.hoesnelwasik.nl/api/",
  },
});
