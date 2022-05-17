import {defineStore} from "pinia";

import {Field} from "~/models/field";
import {useFieldService} from "~/composables/useFieldService";
import {useRegattaStore} from "~/stores/regatta";
const fieldService = useFieldService();

interface FieldState {
    ids: string[];
    entities: { [id: string]: Field };
    selectedFieldId: string | null;
    selectedRegattaId: string | null;
}

export const useFieldStore = defineStore('fields', {
    state: (): FieldState => ({
        ids: [],
        entities: {},
        selectedFieldId: null,
        selectedRegattaId: null,
    }),

    getters: {
        allFields(state: FieldState) {
            return state.ids.map((id: string) => state.entities[id]);
            //TODO: Sort by name
        }
    },

    actions: {
        async loadFields() {
            const regattas = useRegattaStore();
            if (this.selectedRegattaId == regattas.selectedId) {
                return;
            }

            try {
                const loadedFields = await fieldService.loadFields();

                const fieldIds = loadedFields.map((field) => field.field_id);
                const fieldEntities = loadedFields.reduce(
                    (entities: { [id: string]: Field }, field: Field) => {
                        return { ...entities, [field.field_id]: field };
                    },
                    {}
                );

                this.ids = fieldIds;
                this.entities = fieldEntities;
                this.selectedRegattaId = regattas.selectedId;
            } catch (error) {
                console.error(error);
                //TODO: Toaster met error message
            }
        }
    }
});