export interface iProductsData {
    id: number;
    name: string;
    category: string;
    price: string;
    img: string;
    count?: number;
}

export interface iProductsContext {
    products: iProductsData | null
    setProducts: React.Dispatch<React.SetStateAction<iProductsData | null>>
}