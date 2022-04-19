import {defineStore} from "pinia";

import {Regatta} from "~/models/regatta";
import {useRegattaService} from "~/composables/useRegattaService";
const regattaService = useRegattaService();

import { useDateFormatter } from '~~/composables/useDateFormatter';
const { isBeforeOrAfter } = useDateFormatter();

interface RegattaState {
    ids: string[];
    entities: { [id: string]: Regatta };
    selectedId: string | null;
}

export const useRegattaStore = defineStore('regattas', {
    state: (): RegattaState => ({
        ids: [],
        entities: {},
        selectedId: null,
    }),

    getters: {
        allRegattas(state: RegattaState) {
            return state.ids
                .map((id: string) => state.entities[id])
                .sort((a: Regatta, b: Regatta) =>
                    isBeforeOrAfter(a.jaar, b.jaar)
                );
        },
        selectedRegatta(state: RegattaState) {
            return (
                (state.selectedId && state.entities[state.selectedId]) || null
            );
        },
        recentRegattas(state:RegattaState) {
            return state.ids
                .map((id: string) => state.entities[id])
                .sort((a: Regatta, b: Regatta) =>
                    isBeforeOrAfter(a.jaar, b.jaar)
                ).slice(0,3);
        },
    },

    actions: {
        async loadRegattas() {
            try {
                const loadedRegattas = await regattaService.loadRegattas();

                const regattaIds = loadedRegattas.map((regatta) => regatta.rid);
                const regattaEntities = loadedRegattas.reduce(
                    (entities: { [id: string]: Regatta }, regatta: Regatta) => {
                        return { ...entities, [regatta.rid]: regatta };
                    },
                    {}
                );

                this.ids = regattaIds;
                this.entities = regattaEntities;
            } catch (error) {
                console.error(error);
                //TODO: Toaster met error message
            }
        },
        selectRegatta(regatta: Regatta) {
            this.selectedId = regatta.rid;
        }
    },
});