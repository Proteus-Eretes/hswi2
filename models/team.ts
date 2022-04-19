import {Time} from "~/models/Time";

export interface Team {
    clubname: string;
    clubnameshort: string;
    correction_factor: string | null;
    fieldnameshort: string;
    fieldnameshortsub: string;
    knrbid: string;
    rower1: string | null;
    rower2: string | null;
    rower3: string | null;
    rower4: string | null;
    rower5: string | null;
    rower6: string | null;
    rower7: string | null;
    rower8: string | null;
    steername: string | null;
    teamname: string;
    times: Time[];
}

export interface getTeamResponse {
    error: boolean;
    message: string;
    setting: {};
    teams: Team[];
}