import React from "react";
import MightyEagle from "../../img/1x/Asset 3.png";
import { Link } from "react-router-dom";

const HeroShop = () => {
  return (
    <section className="w-full bg-gradient-to-r from-black to-mainColor h-[700px] border-b border-secondaryColor">
      <div className="flex items-center lg:justify-around mx-[200px] h-full w-full">
        <div className="hidden lg:flex items-center my-20 w-[30%]">
          <img className=" w-[370px]" src={MightyEagle} alt="" />
        </div>
        <div className="flex flex-col justify-center lg:justify-start lg:w-[70%] lg:ml-[100px] lg:mt-[150px] h-full">
          <h1 className="font-primary border-b-2 mb-10 w-[550px] border-secondaryColor text-[160px] text-white">
            SHOP
          </h1>
          <p className="w-[500px] text-gray-400 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <Link
            to="/shop"
            className="flex justify-end p-4 border rounded-xl w-fit font-secondary text-2xl hover:bg-white hover:text-mainColor transition"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroShop;
