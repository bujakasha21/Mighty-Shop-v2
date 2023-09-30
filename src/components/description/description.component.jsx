import React from "react";

import FirstImage from "../../img/8E44D046-6DD5-4B3D-B8D3-31BFE9F2DBFC.png";
import SecondImage from "../../img/D4EE406C-69BA-4288-A9B3-50E8B0D16868.png";
import ThirdImage from "../../img/5A151FBC-E938-41EE-84F4-C085C3C33D84.png";
const Description = () => {
  return (
    <section className=" flex w-full items-center justify-around py-[5rem] px-[2rem] h-[800px]">
      <div className="my-0 mx-5 flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <img className="img" src={FirstImage} alt="" />
        </div>
        <h3 className="font-primary text-3xl text-mainColor border-b-2 border-mainColor mb-8">
          Resilent
        </h3>
        <p className="font-secondary text-xl text-gray-500 font-semibold w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>
      <div className="my-0 mx-5 flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <img className="img" src={SecondImage} alt="" />
        </div>
        <h3 className="font-primary text-3xl text-mainColor border-b-2 border-mainColor mb-8">
          Resilent
        </h3>
        <p className="font-secondary text-xl text-gray-500 font-semibold w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>
      <div className="my-0 mx-5 flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <img className="img" src={ThirdImage} alt="" />
        </div>
        <h3 className="font-primary text-3xl text-mainColor border-b-2 border-mainColor mb-8">
          Resilent
        </h3>
        <p className="font-secondary text-xl text-gray-500 font-semibold w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>
    </section>
  );
};

export default Description;
