import {GetRegattasResponse, Regatta} from '~/models/regatta';

export const useRegattaService = () => {
    return {
        async loadRegattas(): Promise<Regatta[]> {
            const data = await $fetch<GetRegattasResponse>(useRuntimeConfig().BASE_URL);
            return data.regattas;
        },
    };
};