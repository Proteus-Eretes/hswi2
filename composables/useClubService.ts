import {ClubGet} from "~/models/club";
import {useRegattaStore} from "~/stores/regatta";

const BASE_URL = 'https://www.hoesnelwasik.nl/api/wd';

export const useClubService = () => {
    return {
        async loadClubs() {
            const regatta = useRegattaStore().selectedRegatta;
            const url = BASE_URL + `/${regatta.shortname}/${regatta.jaar}/clublist`;
            const data = await $fetch<ClubGet>(url);
            return data.clubs;
        },
    };
};