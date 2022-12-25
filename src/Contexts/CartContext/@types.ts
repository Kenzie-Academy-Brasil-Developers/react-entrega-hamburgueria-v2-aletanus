import { iProductsData } from "../UserContext/@types";

export interface iProductsContext {
    
    addToCart: (product:iProductsData) => void
}