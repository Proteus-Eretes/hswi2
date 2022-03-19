import {ClubGet} from "~/models/club";

const BASE_URL = 'https://www.hoesnelwasik.nl/api/wd';

export const useClubService = () => {
    return {
        async getClubs(regatta, year) {
            const url = BASE_URL + `/${regatta}/${year}/clublist`;
            const data = await $fetch<ClubGet>(url);
            return data.clubs;
        },
    };
};