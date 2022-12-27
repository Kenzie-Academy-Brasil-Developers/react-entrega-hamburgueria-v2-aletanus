import { api } from "../../Api/api" 
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { iDefaultProviderProps } from "../@types" 
import { iProductsContext, iCartProducts } from "./@types"
import { UserContext } from "../UserContext"
import { boolean, object } from "yup"
import Product from "../../Components/Product"

export const CartContext = createContext({} as iProductsContext)

export const CartProvider = ({ children }: iDefaultProviderProps) => {

   const { products, setItensCounter } = useContext (UserContext)
   const [cartProducts, setCartProducts] = useState<iCartProducts[] | []>([])
   const [modal, setModal] = useState(false)

   const addToCart = (product:iCartProducts) => {
      if (!cartProducts.some((cartProduct) => cartProduct.id === product.id)) {
         let productCount = product.count += 1
         let newProductList = ([...cartProducts, product].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())))
         setCartProducts(newProductList)
         localStorage.setItem("@BURGUER.CART", JSON.stringify(newProductList))
         cartProductCounter(newProductList)
         toast.success("Novo produto salvo com sucesso!")
      } else {
         toast.warning("Produto já adicionado!")
      }
   }

   const modalCartToogle = () => {
      setModal(true)    
   }

   const oneMoreOrLessProduct = (operation:boolean, product:iCartProducts) => {
      operation === true ? product.count += 1 : product.count -= 1
      const oldProductsList = cartProducts.filter(oldProduct => oldProduct.id !== product.id)
      const newProductsList = [...oldProductsList, product]
      setCartProducts(newProductsList)
      cartProductManager (cartProducts)
      // cartProductCounter(cartProducts)
   }

   const cartProductManager = (lastProductsList:iCartProducts[]) => {
      const updatedProductsList = (lastProductsList.filter(product => product.count > 0).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())))
      localStorage.setItem("@BURGUER.CART", JSON.stringify(updatedProductsList))
      cartProductCounter(updatedProductsList)
      setCartProducts(updatedProductsList)
   }

   const cartProductCounter = (updatedProductsList:iCartProducts[]) => {
      let numberOfProducts = updatedProductsList?.reduce((acc, act) => acc + act.count, 0)
      setItensCounter(Number(numberOfProducts))
   }

   const removeFromCart = (product: number | iCartProducts[]) => {

      // product > 0 ? setCartProducts(cartProducts.filter(productListed => productListed.id !== product)) : product.splice()

      if (product > 0){

         let productToBeDeleted = cartProducts.filter(productIntheCart =>productIntheCart.id === product)
         productToBeDeleted[0].count = 0
         let lastCartList = cartProducts.filter(productIntheCart => productIntheCart.id !== product)
         let newCartList = [...lastCartList, ...productToBeDeleted]
         cartProductManager(newCartList)
       
         ////////////////////PAST SOLUTION
         // const newProductList = cartProducts.filter(productListed => productListed.id !== product).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
         // setCartProducts(newProductList)
         // cartProductCounter(newProductList)
         // localStorage.setItem("@BURGUER.CART", JSON.stringify(newProductList))
        
         console.log(typeof product, product)
      } else {
         console.log(typeof product, product)
      }

   }

   return <CartContext.Provider value={{ addToCart, cartProducts, setCartProducts, modal, setModal, modalCartToogle, oneMoreOrLessProduct, cartProductManager, cartProductCounter, removeFromCart }}>{children}</CartContext.Provider>
}