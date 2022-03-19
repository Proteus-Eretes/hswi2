import {GetRegattasResponse, Regatta} from '~/models/regatta';

const BASE_URL = 'https://www.hoesnelwasik.nl/api/';

export const useRegattaService = () => {
    return {
        async getRegattas(): Promise<Regatta[]> {
            const data = await $fetch<GetRegattasResponse>(BASE_URL);
            let regattas = [];
            data.regattas.forEach((value) => {
                regattas.push(new Regatta(value));
            });
            return regattas;
        },
    };
};