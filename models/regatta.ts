export interface Regatta {
    regattaname: string;
    shortname: string;
    jaar: number;
}

export interface RegattaGet {
    error: string;
    regattas: Regatta[];
}