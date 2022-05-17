import {defineStore} from "pinia";

import {useRegattaStore} from "~/stores/regatta";

import {Club} from "~/models/club";
import {useClubService} from "~/composables/useClubService";
const clubService = useClubService();

interface ClubState {
    ids: string[];
    entities: { [id: string]: Club };
    selectedId: string | null;
    selectedRegattaId: string | null;
}

export const useClubStore = defineStore('clubs', {
    state: (): ClubState => ({
        ids: [],
        entities: {},
        selectedId: null,
        selectedRegattaId: null,
    }),

    getters: {
        allClubs(state: ClubState): Club[] {
            return state.ids.map((id: string) => state.entities[id]);
            //TODO: Sort by name
        },
        selectedClub(state: ClubState): Club {
            return (
                (state.selectedId && state.entities[state.selectedId]) || null
            );
        }
    },

    actions: {
        async loadClubs(): Promise<void> {
            const regattas = useRegattaStore();
            if (this.selectedRegattaId == regattas.selectedId) {
                return; // Clubs are already loaded
            }

            try {
                const loadedClubs = await clubService.loadClubs();

                const clubIds = loadedClubs.map((club) => club.clubid);
                const clubEntities = loadedClubs.reduce(
                    (entities: { [id: string]: Club }, club: Club) => {
                        return { ...entities, [club.clubid]: club };
                    },
                    {}
                );

                this.ids = clubIds;
                this.entities = clubEntities;
                this.selectedRegattaId = regattas.selectedId;
            } catch (error) {
                console.error(error);
                //TODO: Toaster met error message
            }
        },
        selectClub(club: Club): void {
            this.selectedId = club.clubid;
        }
    }
})