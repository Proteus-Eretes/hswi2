import {useRegattaStore} from "~/stores/regatta";

export default defineNuxtRouteMiddleware((to, from) => {
    const regattas = useRegattaStore()
    if (regattas.selectedId == null && to.path != '/') {

    }
});