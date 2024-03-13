import React from "react";
import { logo } from "../assets";
import Button from "./reusables/Button";

const Nav = () => {
  return (
    <nav>
      <div className="flex justify-between items-center my-4 mx-8">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <menu className="flex items-center gap-12 justify-center text-color-4 text-[16px]">
          <li>
            <a href="#auctions">Auctions</a>
          </li>
          <li>
            <a href="#roadmap">Roadmap</a>
          </li>
          <li>
            <a href="#discover">Discover</a>
          </li>
          <li>
            <a href="community">Community</a>
          </li>
        </menu>
        <div className="flex items-center gap-4 justify-between">
          <Button className="border border-color-2  " text="Contact" />
          <Button className="text-white bg-color-8 " text="My account" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
