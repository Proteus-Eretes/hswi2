import { Field } from '~/models/field';

const BASE_URL = 'https://www.hoesnelwasik.nl/api/wd';

export const useFieldService = () => {
    return {
        async loadFields(regatta, year) {
            const url = BASE_URL + `/${regatta}/${year}/velden`;
            return await $fetch<Field[]>(url);
        },
    };
};