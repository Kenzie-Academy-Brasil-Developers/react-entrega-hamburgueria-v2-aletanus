import { api } from "../../Api/api" 
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { iLoginFormValues } from "../../Pages/Login/@types" 
import { iRegisterFormValues } from "../../Pages/Register/@types" 
import { iDefaultProviderProps } from "../@types" 
import { iProductsDataList, iUserContext, iUserData } from "./@types"

export const UserContext = createContext({} as iUserContext)

export const UserProvider = ({ children }: iDefaultProviderProps) => {

  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<iUserData | null>(null)
  const [products, setProducts] = useState<iProductsDataList | null>(null)
  const [filteredProdutcs, setFilteredProdutcs] = useState<iProductsDataList | null>(null)
  const [itensCounter, setItensCounter] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("@BURGUER")
    const autoLogin = async () => {
      if (token) {
        console.log("TOKEN FOUND")
        navigate("/home")          
      } else {
        console.log("TOKEN NOT FOUND")
        navigate("/")
      }
    }
    autoLogin()
  }, [])   

  const userLogin = async (formData: iLoginFormValues) => {
    try {
      setLoading(true)
      const response = await api.post<iUserData>("/login", formData)
      console.log(response.data)
      toast.success(`${response.data.user.name.toUpperCase().trim()}, seja bem vindo(a)!`)
      localStorage.setItem("@BURGUER", response.data.accessToken)
      setUser(response.data)
      getProducts()
      navigate("/home")
    } catch (error: any) {
      console.log(error)
      toast.error(error.response.data)
      localStorage.removeItem("@BURGUER")
      setUser(null)
      navigate("/")
    } finally {
      setLoading(false)
    }
  }

  const getProducts = async () => {
    const token = localStorage.getItem("@BURGUER")
    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`
        const response = await api.get<iProductsDataList>("/products")
        const newProductProp = response.data.map( product => (
          product.count = 0,
          product.totalPrice = 0
        ))
        setProducts(response.data)
        setFilteredProdutcs(response.data)
        navigate("/home")
      } catch (error) {
        console.log("error")
        localStorage.removeItem("@BURGUER")
        setUser(null)
        navigate("/")
      }
    }
  }

  const userRegister = async (formData: iRegisterFormValues) => {
    try {
      setLoading(true)
      const response = await api.post<iUserData>("/users", formData)
      console.log(response)
      toast.success(`${response.data.user.name.toUpperCase().trim()}, seja bem vindo(a)!`)
      navigate("/")
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  function userLogout() {
    localStorage.removeItem("@BURGUER")
    setUser(null)
    navigate("/")
  }

  const searchItem = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault ()
    const targetElement = (event.target as HTMLInputElement).children
    const targetElementValue = (targetElement[1].children[1].children[0] as HTMLInputElement).value
    const searchedValue = targetElementValue
    const searchedProducts = filteredProdutcs && filteredProdutcs.filter ((product) => product.name.toLowerCase().replace(new RegExp("[-]", "gi"), " ").replace(new RegExp("[áàâã]", "gi"), "a").includes(searchedValue.toLowerCase()) || 
    product.category.toLowerCase().replace(new RegExp("[-]", "gi"), " ").replace(new RegExp("[áàâã]", "gi"), "a").includes(searchedValue.toLowerCase()))
    setFilteredProdutcs(searchedProducts)
  }

  return <UserContext.Provider value={{ loading, user, userRegister, userLogin, userLogout, searchItem, products, setProducts, filteredProdutcs, setFilteredProdutcs, itensCounter, setItensCounter }}>{children}</UserContext.Provider>
}