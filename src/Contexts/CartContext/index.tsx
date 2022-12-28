import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { createContext, useContext, useState } from "react"
import { iDefaultProviderProps } from "../@types" 
import { iProductsContext, iCartProducts } from "./@types"
import { UserContext } from "../UserContext"

export const CartContext = createContext({} as iProductsContext)

export const CartProvider = ({ children }: iDefaultProviderProps) => {

   const { products, setItensCounter } = useContext (UserContext)
   const [cartProducts, setCartProducts] = useState<iCartProducts[] | []>([])
   const [modal, setModal] = useState(false)
   const [cartTotalPrice, setCartTotalPrice] = useState(0)

   const addToCart = (product:iCartProducts) => {
      if (!cartProducts.some((cartProduct) => cartProduct.id === product.id)) {
         let productCount = product.count += 1
         let newProductList = ([...cartProducts, product])
         setCartProducts(newProductList)
         cartProductManager (newProductList)
         toast.success("Novo produto salvo com sucesso!")
      } else {
         let productCount = product.count += 1
         cartProductManager(cartProducts)
         toast.success("Novo produto salvo com sucesso!")
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
   }

   const cartProductManager = (lastProductsList:iCartProducts[]) => {
      const updatedProductList = (lastProductsList.filter(product => product.count > 0).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())))
      localStorage.setItem("@BURGUER.CART", JSON.stringify(updatedProductList))
      totalPrice(updatedProductList)
      cartProductCounter(updatedProductList)
      setCartProducts(updatedProductList)
   }

   const cartProductCounter = (updatedProductsList:iCartProducts[]) => {
      let numberOfProducts = updatedProductsList?.reduce((acc, act) => acc + act.count, 0)
      setItensCounter(Number(numberOfProducts))
   }

   const removeFromCart = (product: number | iCartProducts[]) => {
      if (typeof product === "number"){
         let productToBeDeleted = cartProducts.filter(productIntheCart => productIntheCart.id === product)
         productToBeDeleted[0].count = 0
         let lastCartList = cartProducts.filter(productIntheCart => productIntheCart.id !== product)
         let newCartList = [...lastCartList, ...productToBeDeleted]
         cartProductManager(newCartList)
      } else {
         let removeAllItens = cartProducts.map(productIntheCart => productIntheCart.count = 0)
         cartProductManager(product)
      }
   }

   const totalPrice = (updatedProductList:iCartProducts[]) => {
      let intensPrice = updatedProductList.map(product =>  product.totalPrice = product.count * product.price)
      let totalPrice = updatedProductList.reduce((acc, act) => acc + Number(act.totalPrice), 0)
      setCartTotalPrice(totalPrice)
      
   } 

   return <CartContext.Provider value={{ addToCart, cartProducts, setCartProducts, modal, setModal, modalCartToogle, oneMoreOrLessProduct, cartProductManager, cartProductCounter, removeFromCart, cartTotalPrice, setCartTotalPrice, totalPrice }}>{children}</CartContext.Provider>
}