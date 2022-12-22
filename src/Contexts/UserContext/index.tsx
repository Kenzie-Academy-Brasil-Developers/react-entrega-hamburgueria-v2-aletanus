import { api } from "../../Api/api" 
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { iLoginFormValues } from "../../Pages/Login/@types" 
import { iRegisterFormValues } from "../../Pages/Register/@types" 
import { iDefaultProviderProps } from "../@types" 
import { iUserContext, iUserData, iUser, iUserRegisterResponse } from "./@types"

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iDefaultProviderProps) => {

   const [user, setUser] = useState<iUserData | null>(null)
   const navigate = useNavigate()

   console.log(user)

   const userRegister = async (formData: iRegisterFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
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

   const userLogin = async (formData: iLoginFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
      try {
        setLoading(true)
        const response = await api.post<iUserData>("/login", formData)
        console.log(response.data)
        toast.success(`${response.data.user.name.toUpperCase().trim()}, seja bem vindo(a)!`)
        setUser(response.data)
        localStorage.setItem("@TOKEN-HAMB", response.data.accessToken)
        navigate("/home")
      } catch (error: any) {
        console.log(error)
        toast.error(error.response.data)
      } finally {
         setLoading(false)
      }
   }

   return <UserContext.Provider value={{ user, userRegister, userLogin }}>{children}</UserContext.Provider>
}