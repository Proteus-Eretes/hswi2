import { defineStore } from "pinia";
import {Regatta, RegattaNotFound} from "~/models/regatta";

export const useRegattaStore = defineStore('regattaStore', {
    state: () => ({
        regatta: RegattaNotFound,
    }),

    getters: {

    },

    actions: {
        async loadRegattas() {
            try {
                const loadedRegattas = await regattaService.loadRegattas();

                const regattaIds = loadedRegattas.map((regatta) => regatta.id);
                const regattaEntities = loadedRegattas.reduce(
                    (entities: { [id: string]: Regatta }, regatta: Regatta) => {
                        return { ...entities, [regatta.id]: regatta };
                    },
                    {}
                );

                this.ids = regattaIds;
                this.entities = regattaEntities;
            } catch (error) {
                console.error(error);
                //TODO: Toaster met error message
            }
        }
    },
});