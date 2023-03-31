import type {IProduct} from "@/types/product";

export interface IMainStoreState {
    products: IProduct[]
}

export type TMainStoreGetters = {}

export interface IMainStoreActions {
    getProducts: () => void
}