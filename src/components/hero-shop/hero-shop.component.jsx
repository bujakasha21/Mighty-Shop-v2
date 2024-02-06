import React from "react";
import MightyEagle from "../../img/1x/Asset 3.png";
import { Link } from "react-router-dom";

const HeroShop = () => {
  return (
    <section className="bg-gradient-to-r from-black to-mainColor w-full h-fit">
      <div className="flex items-center justify-between w-6/7 mx-auto py-20">
        <div className="hidden lg:flex items-center my-20 w-[25rem] ml-[20rem]">
          <img className=" w-[470px]" src={MightyEagle} alt="eagle" />
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start lg:pl-[10rem]  h-full">
          <h1 className="font-primary border-b mb-10 text-center w-[50%] border-secondaryColor text-[100px] md:text-[160px] text-white">
            SHOP
          </h1>
          <p className="md:w-[60%] w-[80%] text-center md:text-left text-gray-400 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <Link
            to="/shop"
            className="flex justify-end p-3 md:p-4 border rounded-xl w-fit font-secondary text-2xl hover:bg-white hover:text-mainColor md:transition"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroShop;
