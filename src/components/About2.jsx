import React from "react";
import Button from "./reusables/Button";
import { leftImage } from "../assets";

const About2 = () => {
  return (
    <article
      className="flex items-center justify-between max-w-[1392px] mx-auto mb-40"
      id="discover"
    >
      <div className="">
        <img src={leftImage} alt="right bucket" />
      </div>
      <div className="flex-1 flex flex-col gap-4 max-w-[590px] my-auto">
        <p className="uppercase text-color-2 text-[15px]">Overline</p>
        <h2 className="text-6xl mb-2.5">
          Sapien ipsum scelerisque convallis fusce
        </h2>
        <p className="text-color-2 text-[16px]  mb-2.5">
          Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
          pulvinar ultricies dolor feugiat aliquam commodo.
        </p>
        <div className="flex justify-start gap-3">
          <Button className="text-white bg-color-8 " text="Get started" />
          <Button className="border border-color-2  " text="Learn more" />
        </div>
      </div>
    </article>
  );
};

export default About2;
