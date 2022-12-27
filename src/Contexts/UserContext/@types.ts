import { iLoginFormValues } from "../../Pages/Login/@types"
import { iRegisterFormValues } from "../../Pages/Register/@types"

export interface iUserRegisterResponse {
    data: iUserData;
}

export interface iUserData {
    accessToken: string;
    user: iUser;
}

export interface iUser {
    id: string;
    name: string;
    email: string;
}

export type iProductsDataList = iProductsData[] 

export interface iProductsData {
    category: string;
    id: number;
    img: string;
    name: string;
    price: number;
    count: number;
    totalPrice:number | string;
}

export interface iUserContext {
    
    loading: boolean
    user: iUserData | null
    userRegister: (formData: iRegisterFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void
    userLogin: (formData: iLoginFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void
    userLogout: () => void
    searchItem: (event:React.FormEvent<HTMLFormElement>) => void 

    products: iProductsDataList | null
    setProducts: React.Dispatch<React.SetStateAction<iProductsDataList | null>>
    
    filteredProdutcs: iProductsDataList | null
    setFilteredProdutcs: React.Dispatch<React.SetStateAction<iProductsDataList | null>>

    itensCounter: number
    setItensCounter: React.Dispatch<React.SetStateAction<number>>
}