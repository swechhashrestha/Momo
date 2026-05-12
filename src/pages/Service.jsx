import React from 'react';
import chef from "../assets/images/chef.png";
import bgservice from "../assets/images/bgservice.png";
import party from "../assets/images/party.png";

const Service = () => {
  return (
    <div className="py-10">
      <section className="w-7xl m-auto px-14 py-10 flex flex-col-2 gap-30 items-center">
        <div>
          <p className="text-teal-600 text-4xl mb-10 font-serif italic">
            Our Services
          </p>
          <h2 className="text-lg text-gray-400 mb-4">KNOWING OUR CUSTOMERS NEED</h2>
          <h2 className="text-3xl font-bold text-orange-500">
              We’re more than just momos.
              <br />
            <span className="text-black">
            We’re a full-service dining experience.</span>
          </h2>
        </div>

        <div className="flex justify-center">
          <img className="w-100" src={chef} alt="Chef" />
        </div>
      </section>

      <section
        className="relative bg-center bg-cover bg-no-repeat py-28 mb-20"
      style={{ backgroundImage: `url(${bgservice})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/40"></div>
        <div className="relative z-10 w-7xl flex items-end  m-auto px-16">
          <div className="p-6 rounded-xl text-white mt-10">
            <h2 className="text-3xl font-bold">Dine With Us</h2>
            <p className="mb-6">
              Enjoy our momos in the comfort of your own home with our delivery
              services.
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-full text-sm font-semibold text-white">
              Watch the video
            </button>
          </div>
        </div>
      </section>

      <section className="w-6xl m-auto px-8 py-20 flex flex-col-2 justify-center gap-40">
        <div className="p-6 w-110 shadow-lg rounded-xl">
          <h3 className="text-xl font-bold">Private Party</h3>
          <p className="text-gray-600 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            laudantium rerum eligendi minima eveniet velit fugiat doloribus
            aliquid adipisci tempore.
          </p>
          <div className="">
            <p className="text-sm mt-15 text-gray-500">
              <span className="text-teal-600 font-bold text-xl">
                Scan the QR code to <br />
              </span>
              You can also check about the service
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-xl">
          <img src={party} alt="" className="w-full h-90" />
        </div>
      </section>

      <section className="w-6xl m-auto px-8 py-20 flex flex-col-2 justify-center gap-40">
        <div className="bg-white shadow-lg rounded-xl">
          <img src={party} alt="" className="w-full h-90" />
        </div>
        <div className="p-6 w-110 shadow-lg rounded-xl">
          <h3 className="text-xl font-bold">Catering</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            labore quia id minus expedita vel rerum incidunt quis, repudiandae
            laboriosam?
          </p>
          <div>
            <p className="text-sm mt-15 text-gray-500">
              <span className="text-teal-600 font-bold text-xl">
                Scan the QR code to <br />
              </span>
              You can also check about the service
            </p>
          </div>
        </div>
      </section>

      <section className="w-7xl m-auto px-6 py-16 text-center">
        <div className="bg-gray-100 rounded-xl p-10">
          <h3 className="text-xl mb-3 font-bold">Got any Queries?</h3>
          <p className="text-gray-600 text-sm mb-8">
           If you have any queries, send us a message. Our Friendly team would love to hear from you
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 px-6 py-3 font-semibold rounded-full text-white text-sm">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}

export default Service
