export interface FieldInterface {
    blockid: string,
    blocknumber: number,
    category: string,
    daydate: string,
    field_id: string,
    field_starttime: null,
    fieldnameshort: string,
    isapproved: boolean,
    islight: boolean,
    isman: boolean,
    name: string,
    numberofrowers: number,
    numberofteams: number,
    slotid: string,
    startorder: null,
    starttime: string,
    status: string,
}

export interface GetFieldInterfaceResponse {
    status: boolean,
    fields: FieldInterface[],
    message: string,
    name: string,
}

export class Field {
    blockId: string;
    blockNumber: number;
    category: string;
    dayDate: string;
    fieldId: string;
    fieldStartTime: null;
    fieldNameShort: string;
    isApproved: boolean;
    isLight: boolean;
    isMan: boolean;
    name: string;
    numberOfRowers: number;
    numberOfTeams: number;
    slotId: string;
    startorder: null;
    startTime: string;
    status: string;

    constructor(field: FieldInterface) {
        this.blockId = field.blockid;
        this.blockNumber = field.blocknumber;
        this.category = field.category;
        this.dayDate = field.daydate;
        this.fieldId = field.field_id;
        this.fieldStartTime = field.field_starttime;
        this.fieldNameShort = field.fieldnameshort;
        this.isApproved = field.isapproved;
        this.isLight = field.islight;
        this.isMan = field.isman;
        this.numberOfRowers = field.numberofrowers;
        this.numberOfTeams = field.numberofteams;
        this.slotId = field.slotid;
        this.startorder = field.startorder;
        this.startTime = field.starttime;
        this.status = field.status;
    }
}