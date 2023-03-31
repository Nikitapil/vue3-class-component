import axios from "axios";
import type {IProduct} from "@/types/product";

export class ProductsService {
    static async getAll():Promise<IProduct[] | null> {
        try {
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
            return response.data
        } catch (e) {
            console.error(e)
            return null
        }
    }
}