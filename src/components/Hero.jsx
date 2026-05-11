import React from "react";
import Recipes from "../components/Recipes";
import { BsArrowRightShort } from "react-icons/bs";
import { GiHotMeal, GiCook } from "react-icons/gi";
import { MdCelebration } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="font-medium">
      <section className="flex justify-end bg-white">
        <div className="mt-40 p-4 mr-60 ">
          <div className=" space-y-3">
            <h4 className="text-gray-400">RESTAURANT</h4>
            <h1 className="text-[61px] font-bold">
              The{" "}
              <span
                className="bg-no-repeat w-48 text-white text-center  bg-center inline-block  "
                style={{
                  backgroundImage: `url(src/assets/images/oneBg.jpeg)`,
                }}
              >
                #One
              </span>
            </h1>
            <h1 className="text-[61px]  font-bold   ">
              Momo <span className="text-[#D95103]">Restaurant</span>{" "}
            </h1>
            <p className="text-[20px]  font-semibold  ">
              {" "}
              More than <span className="text-[#D95103]">
                {" "}
                20+ Varieties
              </span>{" "}
              of momo available for you{" "}
            </p>
            <button
            onClick={() => {
            navigate("/menu");
          }}
           className="bg-[#0C6967] flex justify-center items-center gap-2 p-4 mt-4 text-white rounded-[100px]">
              Explore Food Menu
              <BsArrowRightShort size={20} />
            </button>
          </div>
        </div>
        <div className="h-[750px] w-[40%] overflow-hidden flex justify-end relative">
          <img
            className="absolute z-10 top-[28%] w-[500px] right-[60px]"
            src="src/assets/images/momo-pic.png"
            alt="momo"
          />
          <img
            className="absolute h-[100%] -top-10 right-0"
            src="src/assets/images/c.png"
            alt="background"
          />
        </div>
      </section>

      <section className="grid grid-cols-2 gap-8 m-auto px-20 py-20 -mt-20 items-center">
        <img
          src="src/assets/images/customers.png"
          alt="chef"
          className="w-120 mx-auto"
        />

        <div className="">
          <h2 className="text-3xl font-bold mb-7">
            Why Customers <span className="text-orange-500">Love Us</span>
          </h2>

          <p className="text-gray-500 max-w-md mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            eum enim sapiente minima! Eligendi alias incidunt voluptates iure
            possimus. Deserunt, excepturi soluta! Cumque, adipisci laborum culpa
            commodi possimus amet quaerat provident laboriosam illum
            consequuntur placeat! Voluptas fuga eveniet dolorum ipsum.
          </p>

          <button className="bg-[#0C6967] flex justify-center items-center gap-2 p-4 mt-4 text-white rounded-[100px]">
            Explore Our Story
            <BsArrowRightShort size={20} />
          </button>
        </div>
      </section>
      <section className="px-12 py-10 mb-20 text-center">
        <Recipes />
      </section>

      <section>
        <div className="flex items-center justify-center mb-25 -mt-15">
          <h1 className="font-bold text-3xl">
            <span className="text-amber-600">We Offer People </span> The service
            They Want
          </h1>
        </div>
        <div className="relative h-[700px] flex items-center justify-center text-center text-white">
          <img
            src="/src/assets/images/process-bg.jpg"
            alt="process"
            className="absolute w-full h-full object-cover"
          />

          <div className="absolute bg-black/40 w-full h-full"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-3">
              Process behind the making
            </h2>
            <p className="mb-5 text-gray-200">
              See how only chefs cooks only the best momos
            </p>

            <button className="bg-[#0C6967] text-white  px-6 py-3 rounded-full">
              Watch the Video
            </button>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-20 text-center py-20 px-40 bg-white">
        <div className="space-y-3">
          <div className="text-5xl text-orange-500 flex justify-center">
            <GiHotMeal size={60} />
          </div>
          <h3 className="font-bold text-xl">Quality Food</h3>
          <p className="text-gray-500 text-sm">
            Only the best food with top quality products and ingredients
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-5xl text-orange-500 flex justify-center">
            <MdCelebration size={60} />
          </div>
          <h3 className="font-bold text-xl">Private Party</h3>
          <p className="text-gray-500 text-sm">
            Get the best food for all your private parties and events
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-5xl text-orange-500 flex justify-center">
            <GiCook size={60} />
          </div>
          <h3 className="font-bold text-xl">Catering</h3>
          <p className="text-gray-500 text-sm">
            Get the best food for any occasions and gatherings
          </p>
        </div>

        <div className="col-span-3 flex justify-center mt-6">
          <button
          onClick={() => {
            navigate("/service");
          }}
           className="bg-[#0C6967] text-white px-8 py-3 flex justify-center items-center gap-2 rounded-full hover:bg-[#094f4d]">
            Explore Our Services
            <BsArrowRightShort size={20} />
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 -mt-25 gap-10 px-40 py-50 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-2">
            200+ <span className="text-orange-500">Happy Customers</span>
          </h3>

          <p className="text-teal-600 text-xl font-bold mb-4">
            What our customers say about us
          </p>

          <p className="text-gray-500 mb-4 text-2xl italic">
            "Only the best momo you can find in the market. Different varieties
            of momo to choose from. Will be visiting again soon"
          </p>

          <h4 className="font-bold">Livia Dias</h4>

          <div className="flex gap-3 mt-5">
            <button className="w-8 h-8 rounded-full border">‹</button>
            <button className="w-8 h-8 rounded-full border">›</button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="src/assets/images/happyC.jpg"
            className="w-100 h-140 rounded-xl shadow-lg"
            alt="customer"
          />
        </div>
      </section>

      <section className="px-50 py-35 -mt-45">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Get <span className="text-orange-500">In Touch</span>
          </h2>
          <p className="text-gray-500">
            Our friendly team would love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 bg-gray-100 p-10 rounded-xl">
          <div className="bg-teal-700 text-white p-8 rounded-xl space-y-6">
            <div>
              <h4 className="font-bold mb-2">Our Address</h4>
              <p className="text-sm">
                New Baneshwor, Kathmandu, Bagmati, Nepal
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-2">Our Contacts</h4>
              <p className="text-sm">Mobile: 9800000000</p>
              <p className="text-sm">Landline: 01-123456</p>
            </div>

            <div>
              <h4 className="font-bold mb-2">Our Service Time</h4>
              <p className="text-sm">Mon - Fri : 10 am - 8 pm</p>
              <p className="text-sm">Sat - Sun : Closed</p>
            </div>
          </div>

          <form className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 rounded"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 rounded"
            />

            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded col-span-2"
            />

            <select className="border p-2 rounded col-span-2">
              <option>What can we do for you</option>
              <option>Booking</option>
              <option>Catering</option>
              <option>General Inquiry</option>
            </select>

            <input
              type="tel"
              placeholder="Phone Number"
              className="border p-2 rounded col-span-2"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="border p-2 rounded col-span-2"
            ></textarea>

            <div className="col-span-2 flex justify-center">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="w-full mb-10 -mt-10">
        <div className="h-[450px] w-full">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.481059204386!2d85.34317037526434!3d27.671522976203192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190536c1caa7%3A0xf92fcf603dac3960!2sSipalaya%20Info%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1768459839808!5m2!1sen!2snp"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Hero;
