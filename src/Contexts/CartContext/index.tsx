import { api } from "../../Api/api" 
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { iDefaultProviderProps } from "../@types" 
import { iProductsContext } from "./@types"
import { UserContext } from "../UserContext"
import { iProductsData } from "../UserContext/@types"

export const CartContext = createContext({} as iProductsContext)

export const CartProvider = ({ children }: iDefaultProviderProps) => {

   const { products, cartProducts, setItensCounter } = useContext (UserContext)

   const addToCart = (product:iProductsData) => {

      if ( cartProducts && !cartProducts.some((cartProduct) => cartProduct.id === product.id)) {

         let productCount = product.count += 1
         let cartList = products?.filter( product => product.count > 0)
         localStorage.setItem("@BURGUER.CART", JSON.stringify(cartList))
         let numberOfProducts = cartList?.reduce((acc, act) => acc + act.count, 0)
         setItensCounter(Number(numberOfProducts))
         toast.success("Novo produto salvo com sucesso!")
      }
   }

   return <CartContext.Provider value={{ addToCart}}>{children}</CartContext.Provider>
}