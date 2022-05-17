import {Field, GetFieldResponse} from '~/models/field';
import {useRegattaStore} from "~/stores/regatta";

export const useFieldService = () => {
    return {
        async loadFields(): Promise<Field[]> {
            const regatta = useRegattaStore().selectedRegatta;
            const url = useRuntimeConfig().BASE_URL + `wd/${regatta.shortname}/${regatta.jaar}/velden/`;
            const data = await $fetch<GetFieldResponse>(url);
            return data.fields;
        },
    };
};