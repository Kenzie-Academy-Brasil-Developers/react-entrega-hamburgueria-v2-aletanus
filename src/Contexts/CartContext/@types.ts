import { iProductsData } from "../UserContext/@types";

export interface iCartProducts {
    category: string;
    id: number;
    img: string;
    name:string;
    price:number;
    count:number;
    totalPrice:number | string;
}

export interface iProductsContext {
 
    cartProducts: iCartProducts[]
    setCartProducts:React.Dispatch<React.SetStateAction<iCartProducts[] | []>>
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    cartTotalPrice: number
    setCartTotalPrice: React.Dispatch<React.SetStateAction<number>>
    addToCart: (product:iProductsData) => void
    modalCartToogle: () => void   
    oneMoreOrLessProduct: (operation: boolean, product: iCartProducts) => void
    cartProductManager: (lastProductsList: iCartProducts[]) => void
    cartProductCounter: (updatedProductsList: iCartProducts[]) => void
    removeFromCart: (product: number | iCartProducts[]) => void
    totalPrice: (updatedProductList: iCartProducts[]) => void
}