import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: [ '@/assets/css/style.scss' ],
    meta: {
        link: [
            {
                href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined',
                rel: 'stylesheet',
            },
        ],
    },
})
