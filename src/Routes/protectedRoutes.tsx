import { useContext, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../Contexts/UserContext"

export const ProtectedRoutes = () => { 

    const { user } = useContext(UserContext)

    // if(loading) {
    //     return null
    // }
    return user ? (<Outlet/>) : (<Navigate to= "/" replace />)   
}