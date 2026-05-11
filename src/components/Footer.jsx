import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'

const Footer = () => {
return (
      <footer className="bg-gray-100 py-10">
        <div className="w-6xl mx-auto px-6 flex flex-col-4 justify-between gap-6 text-sm text-gray-600">
          <div>
            <h4 className="font-bold text-xl text-teal-700">momos</h4>
            <p className="max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae illo debitis voluptatum odit inventore sunt ratione
              aperiam magni perferendis officiis nemo aut excepturi recusandae
              nam rerum in, deleniti possimus impedit.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm text-teal-700">momos</h4>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Our Menu</li>
              <li>Our Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm text-teal-700">Legals</h4>
            <ul className="space-y-1">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm text-teal-700">Follow Us</h4>
            <div className="flex gap-4 mt-2">
              <FaFacebookF size={20} />
              <FaInstagram size={20} />
              <FaTiktok size={20} />
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-10 pt-10 border-t">
        CopyRight@2026 EverestMomo Pvt Ltd. All Rights Reserved
      </div>
      </footer>
  )
}


export default Footer
