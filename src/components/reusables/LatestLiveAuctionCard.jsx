import React from "react";
import { heartOFf, heartOn, timer } from "../../assets";

const LatestLiveAuctionCard = ({
  img,
  heading,
  eth,
  time,
  avatar,
  bid,
  heart,
  heartNumber,
}) => {
  return (
    <div className="w-[460px] flex flex-col justify-center items-center p-4 border border-color-2 rounded-xl">
      <img
        src={img}
        alt={heading}
        width={400}
        height={520}
        className="w-full  overflow-hidden max-w-[400px] h-[520px]"
      />
      <div className="flex items-center justify-between mt-6 gap-6">
        <h3 className="text-[20px] leading-[25.2px] font-[600]  w-[17rem]">
          {heading}
        </h3>
        <span
          itemProp="price"
          content={eth}
          className="bg-color-11 p-4 text-sm text-color-8 uppercase"
        >
          {eth} ETH
        </span>
      </div>
      <div className="flex items-center justify-center gap-x-1.5 gap-y-3 py-2.5 px-0 -ml-[17rem]">
        <img src={timer} alt="timer" />
        <p className="font-inter text-color-4 text-[14px]">{time}</p>
      </div>
      <hr className="w-full border-color-2 max-w-[400px] mb-4" />

      <div className="flex items-center justify-between  w-full px-3.5 gap-2">
        <div className="flex justify-center items-center">
          <img src={avatar} alt="avatars" className="w" />
          <p className="font-inter text-color-4 text-[14px]">{bid}</p>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <img src={heart === true ? heartOn : heartOFf} alt="like" />
          <span className="text-[14px] text-color-4">{heartNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default LatestLiveAuctionCard;
