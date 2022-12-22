import { Routes, Route } from 'react-router-dom'
import LoginPage from '../Pages/Login'
import RegisterPage from '../Pages/Register'
import HomePage from '../Pages/Home'

const RoutesMain = () => {
  return (
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
    </Routes>    
  )
}

export default RoutesMain