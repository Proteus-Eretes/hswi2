import {Field, GetFieldInterfaceResponse} from '~/models/field';
import {Regatta} from "~/models/regatta";

const BASE_URL = 'https://www.hoesnelwasik.nl/api/wd';

export const useFieldService = () => {
    return {
        async getFields(regatta: Regatta): Promise<Field[]> {
            const url = BASE_URL + `/${regatta.shortname}/${regatta.year}/velden/`;
            const data = await $fetch<GetFieldInterfaceResponse>(url);
            let fields = [];
            data.fields.forEach((value) => {
                fields.push(new Field(value));
            });
            return fields;
        },
    };
};