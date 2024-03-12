import React from "react";
import { heroSpan1, heroSpan2, search } from "../assets";

const Hero = () => {
  return (
    <section className="mt-48">
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
      <div className="bg-white m-auto flex justify-between items-center py-4  px-8 gap-6 max-w-[600px] rounded-xl">
        <input type="text" />
        <div className="">
          <p className="font-inter text-[16px] leading-[24px] text-color-2">
            Category
          </p>
          <img src="" alt="" />
          <img src={search} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
