import {Field} from "~/models/field";

export interface RegattaInterface {
    regattaname: string;
    shortname: string;
    jaar: number;
}

export interface GetRegattasResponse {
    error: string;
    regattas: RegattaInterface[];
}

export class Regatta {
    name: string;
    shortname: string;
    year: number;
    fields: Field[];

    constructor(regatta: RegattaInterface) {
        this.name = regatta.regattaname;
        this.shortname = regatta.shortname;
        this.year = regatta.jaar;
    }

    get link(): string {
        return `/${this.shortname}/${this.year}`
    }

    async loadFields(): Promise<void> {
        const fieldService = useFieldService();
        this.fields = await fieldService.getFields(this);
    }
}

export const RegattaNotFound: Regatta = new Regatta({
    regattaname: 'Not Found',
    shortname: 'xxx',
    jaar: 2000,
});