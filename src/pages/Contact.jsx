import React from 'react'

const Contact = () => {
  return (
    <div className="w-full bg-white h-full text-gray-700">
      <div className="text-center py-16">
        <p className="text-teal-600 mt-20 font-bold text-xl font-serif italic">
          Our Contact
        </p>
        <h2 className="text-sm text-gray-400 mt-2">GET IN TOUCH</h2>
        <p className="mt-4 text-xl font-bold">
          <span className="text-orange-500">Our Friendly Team </span>
          would love to hear from you
        </p>
      </div>

      <div className="w-4xl mx-auto grid grid-cols-3 gap-12 px-4 mb-5">
        <div className="bg-white rounded-lg shadow px-4 py-6 text-center">
          <h4 className="text-sm font-semibold mb-3">LOCATION</h4>
          <p className="text-sm text-gray-500">New Baneshwor - 44201,</p>
          <p className="text-sm text-gray-500">Kathmandu, Bagmati, Nepal</p>
        </div>

        <div className="bg-white rounded-lg shadow px-4 py-6 text-center">
          <h4 className="text-sm font-semibold mb-3">PHONE</h4>
          <p className="text-sm text-gray-500">Mobile: (+977) 980 4796749</p>
          <p className="text-sm text-gray-500">(+977) 984 2585877</p>
          <p className="text-sm text-gray-500">Tel: 01-4876758</p>
        </div>

        <div className="bg-white rounded-lg shadow px-4 py-6 text-center">
          <h4 className="text-sm font-semibold mb-3">SERVICE TIME</h4>
          <p className="text-sm text-gray-500">MON - FRI 8 am - 8 pm</p>
          <p className="text-sm text-gray-500">SAT - SUN Closed</p>
        </div>
      </div>

      <div className="w-6xl m-auto grid grid-cols-2 gap-12 px-6 py-16">
        <div className="bg-gray-200 rounded-lg h-[420px] flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.481059204386!2d85.34317037526434!3d27.671522976203192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190536c1caa7%3A0xf92fcf603dac3960!2sSipalaya%20Info%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1768459839808!5m2!1sen!2snp"
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bg-white rounded-lg shadow p-8">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm text-gray-500 mb-6">
            If you have any queries, send us a message. Our Friendly team would
            love to hear from you.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <input placeholder="First Name" className="p-3 border rounded" />
            <input placeholder="Last Name" className="p-3 border rounded" />
          </div>

          <select className="w-full mt-4 p-3 border rounded text-gray-500">
            <option>What can we do for you</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

          <input
            placeholder="Email"
            className="w-full mt-4 p-3 border rounded"
          />

          <input
            placeholder="+977 - Phone Number"
            className="w-full mt-4 p-3 border rounded"
          />

          <textarea
            placeholder="Message"
            className="w-full mt-4 p-3 border rounded"
          />

          <button className="mt-6 bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact
