import React from "react";
import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          GitHub
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Alchemy
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Metamask
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Sepolia ETH
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          HardHat
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Waffle
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Ethereum
        </p>
      </div>
    </div>
    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-lg text-center italic">
        "Pretty fast and easy on your wallets"
      </p>
      <p className="text-white text-lg text-center font-medium mt-2">
        {" "}
        - PandaCoin 🐼
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@pandacoin</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
