import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineTikTok } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const navigate = useNavigate();
  const {isAuthenticated, logout} = useAuth0();
  return (
    <nav className='flex items-center shadow-xl px-4 p-3 justify-around'>
        <div className='flex  items-center py-4 gap-2'>
            <img src='src/assets/images/momo.png' alt='logo' className='w-8 h-8'/>
            <h2 className='text-2xl font-bold text-[#0c6967]'
            onClick={()=>{
              navigate('/')
            }}>momos</h2>
        </div>
        <div className='flex gap-2 text-[#6b788e]'>
        <NavLink className='py-2 px-3' to="/about">About Us</NavLink>
        <NavLink className='py-2 px-3' to="/menu">Our Menu</NavLink>
        <NavLink className='py-2 px-3' to="/service">Our Services</NavLink>
        <NavLink className='py-2 px-3' to="/allergyAdvice">Allergy Advice</NavLink>
        <NavLink className='py-2 px-3' to="/cart">Cart</NavLink>
        <NavLink 
        className='py-2 px-3' to="/profile">Profile</NavLink>
        </div>
        <div className="contact gap-4 flex  justify-end items-center">
          <NavLink to="" target="_blank">
          <FaFacebook size={25} />
        </NavLink>
        <NavLink to="" target="_blank">
          <AiOutlineTikTok size={25} />
        </NavLink>
        <NavLink to="" target="_blank">
          <RiInstagramLine size={25} />
        </NavLink>
        <NavLink
          className="bg-[#D95103] text-white  p-2  rounded-4xl w-30 text-center "
          to="/contact">
          Contact Us
        </NavLink>
        <div>
          {isAuthenticated} ? (
            <button className='' onClick={()=>{
              logout({ logoutParams: {returnTo: window.location.origin}})
            }}>
              
            </button>
          )
        <NavLink 
        className='py-2 px-3' to="/login">Login</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
