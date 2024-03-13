import React from "react";
import {
  background,
  circles,
  comapany1,
  comapany2,
  comapany3,
  comapany4,
  heroSpan1,
  heroSpan2,
  search,
  searchArrowDownIcon,
  square1,
  square2,
  square3,
  square4,
  square5,
  square6,
} from "../assets";

const Hero = () => {
  return (
    <section className="mt-48 relative">
      <div className="absolute -top-64 left-auto -z-10 w-full h-full">
        <img src={background} alt="" />
      </div>
      <div className="w-[90%] absolute left-auto top-16 flex justify-between ml-20">
        <img src={square1} alt="item1" className="max-h-[140px]" />
        <img src={square2} alt="" className="-mt-20 max-h-[140px]" />
      </div>
      <div className="w-[91%] absolute right-auto top-[22rem] flex justify-between ml-[7rem]">
        <img src={square4} alt="" className="max-h-[140px] ml-32 mt-4" />
        <img src={square3} alt="item1" className="-mt-40  max-h-[140px]" />
      </div>
      <div className="w-[90%] absolute left-auto top-[30rem] flex justify-between ml-20">
        <img src={square6} alt="item1" className="-mr-60 max-h-[140px]" />
        <img src={square5} alt="" className="-mt-10  mr-40 max-h-[140px]" />
      </div>
      <p className="font-inter text-color-2 text-[15px] uppercase text-center mb-3 leading-[18.15px]">
        Non Fungible Tokens
      </p>
      <h1 className="text-8xl font-[600] text-center">
        <span className="flex items-center justify-center gap-2 leading-[120%]">
          A New NFT <img src={heroSpan1} alt="hero-span1" />
        </span>
        <span className="flex items-center justify-center gap-4 md:ml-32">
          <img src={heroSpan2} alt="" />
          Experience
        </span>
      </h1>
      <p className="font-inter text-color-2 text-[24px] uppercase text-center my-16 leading-[18.15px]">
        Discover, collect and sell
      </p>
      <div className="bg-white m-auto flex justify-between items-center p-6 gap-6 max-w-[580px] rounded-xl  text-[20px]">
        <input
          type="text"
          placeholder="Items, collections and creators"
          aria-label="search"
          autoFocus
          className=" text-color-2 w-full h-full outline-none border-none"
        />
        <div className="flex items-center justify-center gap-6 mr-4">
          <p className="font-inter text-[16px] leading-[24px] text-color-2">
            Category
          </p>
          <img src={searchArrowDownIcon} alt="" className="cursor-pointer" />
          <img src={search} alt="" className="cursor-pointer" />
        </div>
      </div>

      <div className="flex justify-center items-center gap-16 mt-28">
        <img src={comapany1} alt="" className="" />
        <img src={comapany2} alt="" className="" />
        <img src={comapany3} alt="" className="" />
        <img src={comapany4} alt="" className="" />
      </div>
    </section>
  );
};

export default Hero;
