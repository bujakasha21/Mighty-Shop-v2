import React from "react";
import { ReactComponent as MightyDog } from "../../img/SVG/Asset 4.svg";
import { Link } from "react-router-dom";
import SlidingToRight from "../text-effect/slidingToRight";
import SlidingToLeft from "../text-effect/slidingToLeft";
import SlidingToTop from "../text-effect/slidingToTop";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-black to-mainColor w-full h-fit pt-20">
      <div className="flex items-center justify-evenly w-6/7 mx-[10rem]">
        <div className="flex flex-col items-center md:items-start justify-center pb-10 md:pb-0">
          <SlidingToRight>
            <h1 className="flex justify-center font-primary text-[60px] md:text-[100px] text-transparent text-outline opacity-80">
              WELCOME<span className="flex text-[30px] md:text-[80px]">TO</span>
            </h1>
          </SlidingToRight>
          <SlidingToLeft>
            <h1 className="flex justify-end text-white font-primary text-[90px] md:text-[160px]">
              <span className="text-secondaryColor text-[40px] md:text-[100px]">
                THE
              </span>
              MIGHTY
            </h1>
          </SlidingToLeft>
          <SlidingToTop>
            <p className="text-white text-center md:text-left w-[18rem] md:w-[25rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="flex flex-col md:flex-row mx-auto items-center mt-5 ">
              <Link
                to="/sign-in"
                className="border rounded-lg font-secondary text-2xl md:mr-10 px-5 py-2  md:hover:bg-white md:hover:text-mainColor md:transition"
              >
                SIGN IN
              </Link>
              <Link
                to="/shop"
                className="border rounded-lg font-secondary text-2xl mt-5 md:mt-0 px-5 py-2 bg-red-900 md:hover:bg-white md:hover:text-mainColor md:transition"
              >
                SHOP
              </Link>
            </div>
          </SlidingToTop>
        </div>
        <SlidingToTop>
          <div className="hidden md:flex items-end justify-end h-full">
            <MightyDog className="w-[28rem]" />
          </div>
        </SlidingToTop>
      </div>
      {/* <div className="flex flex-row lg:justify-between h-full">
        <div className="mx-[100px] lg:ml-[70px] mt-[100px] w-full lg:w-[700px]">
          <h1 className="flex justify-center text-transparent font-primary text-[60px] md:text-[120px] text-outline opacity-80">
            WELCOME <span className="flex text-[30px] md:text-[80px]">TO</span>
          </h1>
          <h1 className="flex justify-end text-white font-primary text-[110px] md:text-[180px]">
            <span className="text-secondaryColor text-[40px] md:text-[100px]">
              THE
            </span>
            MIGHTY
          </h1>
          <p className="flex justify-center text-white lg:text-xl font-secondary md:ml-[120px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <div className="flex justify-center md:justify-end mr-5 mt-5">
            <Link
              to="/sign-in"
              className="border rounded-lg mr-10 py-2 px-5 text-2xl font-secondary hover:bg-white hover:text-mainColor transition"
            >
              SIGN IN
            </Link>
            <Link
              to="/shop"
              className="border rounded-lg text-2xl py-2 px-5 font-secondary bg-red-900 hover:bg-white hover:text-mainColor transition"
            >
              SHOP
            </Link>
          </div>
        </div>

        <div className="flex justify-end items-end mr-[230px]">
          <MightyDog className="h-[700px] hidden lg:block" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
