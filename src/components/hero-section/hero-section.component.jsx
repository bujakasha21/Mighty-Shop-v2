import React from "react";
import { ReactComponent as MightyDog } from "../../img/SVG/Asset 4.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-mainColor h-[800px]">
      <div className="flex flex-row justify-between mx-auto h-full">
        <div className=" ml-[70px] mt-[100px] w-[700px]">
          <h1 className="flex justify-center text-transparent font-primary text-[120px] text-outline opacity-80">
            WELCOME <span className="flex text-[80px]">TO</span>
          </h1>
          <h1 className="flex justify-end text-white font-primary text-[180px]">
            <span className="text-secondaryColor text-[100px]">THE </span>{" "}
            MIGHTY
          </h1>
          <p className="flex justify-center text-white text-xl font-secondary ml-[120px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <div className=" flex justify-end mr-5 mt-5">
            <Link
              to="/sign-in"
              className="border rounded-lg mr-10 py-2 px-5 text-2xl font-secondary"
            >
              SIGN IN
            </Link>
            <Link
              to="/shop"
              className="border rounded-lg text-2xl py-2 px-5 font-secondary"
            >
              SHOP
            </Link>
          </div>
        </div>

        <div className="flex justify-end items-end mr-[250px]">
          <MightyDog className="h-[700px] hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
