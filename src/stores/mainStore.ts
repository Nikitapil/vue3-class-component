import { defineStore } from 'pinia'
import type {IMainStoreActions, IMainStoreState, TMainStoreGetters} from "@/types/main-store";
import {ProductsService} from "@/services/ProductsService";

export const useMainStore = defineStore<
    'products-store',
    IMainStoreState,
    TMainStoreGetters,
    IMainStoreActions
    >({
    id: 'products-store',
    state: () => {
        return {
            products: []
        }
    },
    actions: {
        async getProducts() {
            const data = await ProductsService.getAll()
            if (data) {
                this.products = data
            }
        }
    }
})
