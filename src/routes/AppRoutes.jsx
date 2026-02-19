import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Menu from '../pages/Menu'
import Service from '../pages/Service'
import AllergyAdvice from '../pages/AllergyAdvice'
import PublicLayout from '../layout/PublicLayout'
import NotFound from '../pages/NotFound'
import ProductDetail from '../pages/ProductDetail'
import Cart from '../pages/Cart'
import Payment from '../pages/payment/Payment'
import Success from '../pages/payment/Success'
import Login from '../pages/auth/Login'
import Profile from '../pages/auth/Profile'
import ProtectedRoutes from '../components/ProtectedRoutes'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<PublicLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<ProtectedRoutes><Menu/></ProtectedRoutes>} />
        <Route path="/service" element={<Service />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/allergyAdvice" element={<AllergyAdvice />} />
        <Route path="/productDetail/:id" element={<ProductDetail/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="*" element={<NotFound />} />
        </Route>   
      </Routes>
    </div>
  )
}

export default AppRoutes
