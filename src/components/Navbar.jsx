import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import momo from "../assets/images/momo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth0();
  return (
    <nav className="flex items-center py-4 px-39 justify-between shadow-md h-20 fixed z-999 w-full bg-white">
      <div className="flex items-center gap-2">
        <div
          className="flex justify-items-start items-center gap-2 w-42 py-4 hover:cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <NavLink
            to="./"
            className="flex gap-2 justify-center items-center h-8"
          >
            <img src={momo} alt="logo" className="w-8 h-full" />
            <h5 className="text-[#0C6967] font-bold text-[25px] pb-1">momos</h5>
          </NavLink>
        </div>

        <div className="flex gap-2 text-[#6B788E] font-medium">
          <NavLink className="py-2 px-3 hover:text-amber-600" to="./about">
            About Us
          </NavLink>
          <NavLink className="py-2 px-3 hover:text-amber-600" to="./menu">
            Our Menu
          </NavLink>
          <NavLink className="py-2 px-3 hover:text-amber-600" to="./service">
            Our Services
          </NavLink>
          <NavLink className="py-2 px-3 hover:text-amber-600" to="./allergyAdvice">
            Allergy Advice
          </NavLink>
          <NavLink className="py-2 px-3 hover:text-amber-600" to="./cart">
            Cart
          </NavLink>
          <NavLink className="py-2 px-3" to="./profile">
            Profile
          </NavLink>
        </div>
      </div>

      <div className="flex justify-end items-center gap-8 h-12 w-90">
        <div className="flex gap-4 h-8">
          <FaFacebook size={28} className="text-[#A6AEBB]" />
          <FaTiktok
            size={28}
            className="bg-[#A6AEBB] text-white p-1.5 rounded-full"
          />
          <FaInstagram
            size={28}
            className="bg-[#A6AEBB] text-white p-1.5 rounded-full"
          />
        </div>
        <NavLink
          to="./contact"
          className="bg-[#D95103] py-2 px-8 text-white font-[12px] rounded-[100px] h-10.25 flex items-center"
        >
          Contact
        </NavLink>

        <div>
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="bg-[#D95103] py-2 px-5 text-white font-[14px] rounded-[100px] h-10.25 flex items-center"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="./login"
              className="bg-[#D95103] py-3 px-5.5 text-white font-[14px] rounded-[100px] h-10.25 flex items-center"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
