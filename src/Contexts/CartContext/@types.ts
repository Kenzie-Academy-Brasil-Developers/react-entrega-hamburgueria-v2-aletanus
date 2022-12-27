import { iProductsData } from "../UserContext/@types";

export interface iCartProducts {
    category: string;
    id: number;
    img: string;
    name:string;
    price:number | string;
    count:number;
    [product: string | number] : any;
}

export interface iProductsContext {

    addToCart: (product:iProductsData) => void

    cartProducts: iCartProducts[]
    setCartProducts:React.Dispatch<React.SetStateAction<iCartProducts[] | []>>

    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    
    modalCartToogle: () => void   

    oneMoreOrLessProduct: (operation: boolean, product: iCartProducts) => void

    cartProductManager: (lastProductsList: iCartProducts[]) => void

    cartProductCounter: (updatedProductsList: iCartProducts[]) => void

    removeFromCart: (product: number | iCartProducts[]) => void
    // removeFromCart: (product: iCartProducts[] | React.MouseEvent<SVGSVGElement, MouseEvent>) => void
    // removeFromCart: (productId: number) => void
}