import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";

const Hero = () => {
  return (
      <div>
    <section className="flex  justify-end min-h-125 bg-white ">
      <div className="mt-20 p-4  mr-96 ">
        <div className=" space-y-3 ">
          <h4>RESTAURANT</h4>
          <h1 className="text-[61px] font-bold">
            The{" "}
            <span
            className="bg-no-repeat w-48 text-white text-center  bg-center inline-block  "
              style={{
                backgroundImage: `url(src/assets/images/oneBg.jpeg)`,
              }}>
              #One
            </span>
          </h1>
          <h1 className="text-[61px]  font-bold   ">
            Momo <span className="text-[#D95103]">Restaurant</span>{" "}
          </h1>
          <p className="text-[20px]  font-semibold  ">
            {" "}
            More than <span className="text-[#D95103]"> 20+ Varieties</span> of
            momo available for you{" "}
          </p>
          <button className="bg-[#0C6967] flex justify-center items-center gap-2 p-4 mt-4 text-white rounded-[100px]">
            Explore Food Menu 
            <BsArrowRightShort size={20} />
          </button>
        </div>
      </div>
      <div className=" h-150 overflow-hidden w-[30%] flex justify-end relative">
        <img
          className="absolute z-10 top-[26%]  w-96 right-16"
          src='src/assets/images/momo-pic.png'
          alt=""
        />
        <img className="absolute h-full -top-8" src='src/assets/images/c.png' alt="" />
      </div>
    </section>
    </div>
  )
}

export default Hero
