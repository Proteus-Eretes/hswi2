import { RegattaGet } from '~/models/regatta';

const BASE_URL = 'https://www.hoesnelwasik.nl/api/';

export const useRegattaService = () => {
    return {
        async loadRegattas() {
            const url = BASE_URL;
            const data = await $fetch<RegattaGet>(url);
            return data.regattas;
        },
    };
};