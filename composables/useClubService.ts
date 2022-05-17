import {ClubGet} from "~/models/club";
import {useRegattaStore} from "~/stores/regatta";

export const useClubService = () => {
    return {
        async loadClubs() {
            const regatta = useRegattaStore().selectedRegatta;
            const url = useRuntimeConfig().BASE_URL + `wd/${regatta.shortname}/${regatta.jaar}/clublist/`;
            const data = await $fetch<ClubGet>(url);
            return data.clubs;
        },
    };
};