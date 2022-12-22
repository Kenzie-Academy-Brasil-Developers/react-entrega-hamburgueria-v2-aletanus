import { api } from "../../Api/api" 
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { iDefaultProviderProps } from "../@types" 
import { iProductsContext, iProductsData } from "./@types" 

export const CartContext = createContext({} as iProductsContext);

export const CartProvider = ({ children }: iDefaultProviderProps) => {

   const [products, setProducts] = useState<iProductsData | null>(null)

   const navigate = useNavigate()

   console.log(products)

   useEffect(() => {
      const token = localStorage.getItem("@TOKEN-HAMB")
      if (token) {
         (async () => {
            try {
                api.defaults.headers.authorization = `Bearer ${token}`
                const response = await api.get<iProductsData>("/products")
                setProducts(response.data)
                console.log(products)
                navigate("/home")
            } catch (error) {
                localStorage.removeItem("@TOKEN-HAMB")
                console.log("error")
            }
         })()
      }
   }, [])

   return <CartContext.Provider value={{ products, setProducts }}>{children}</CartContext.Provider>
}