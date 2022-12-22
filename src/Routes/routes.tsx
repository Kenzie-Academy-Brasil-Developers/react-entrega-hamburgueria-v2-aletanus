import { Routes, Route } from 'react-router-dom'
import LoginPage from '../Pages/Login'
import RegisterPage from '../Pages/Register'
import HomePage from '../Pages/Home'
import { ProtectedRoutes } from './protectedRoutes'
import { NotFoundPage } from '../Pages/NotFound'

const RoutesMain = () => {
  return (

    <Routes>

      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectedRoutes/>} >
        <Route path="/home" element={<HomePage />} />
      </Route>
      <Route path="*" element= {<NotFoundPage/>} />
      
    </Routes> 

  )
}

export default RoutesMain