import React, { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

import { ReactComponent as MightyLogo } from "../../img/logo1.svg";

import { SidebarContext } from "../../contexts/sidebarContext";
import { CartContext } from "../../contexts/cartContext.component";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { numOfItems } = useContext(CartContext);

  return (
    <header className="flex items-center justify-between bg-mainColor shadow-2xl w-full h-[150px] px-20 font-secondary font-semibold text-2xl">
      <div className="flex flex-row justify-between  w-[300px] ">
        <div className="text-hover">
          <Link to={"/"}>HOME</Link>
        </div>
        <div className="text-hover">
          <Link to={"/shop"}>SHOP</Link>
        </div>
      </div>
      <div className="flex">
        <Link
          to={"/"}
          className="text-white text-xl justify-center items-center"
        >
          <div className="">
            <MightyLogo className="h-[100px]" />
          </div>
        </Link>
      </div>
      <div className="flex  justify-between w-[300px] ">
        <div className="text-hover">
          <Link to={"/sign-in"}>SIGN IN</Link>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative max-w-[50px] text-hover"
        >
          <AiOutlineShoppingCart className="text-4xl text-white " />
          <div className="flex absolute items-center justify-center -right-2 -bottom-2 bg-red-900  text-white text-[12px] w-[18px] h-[18px] rounded-full">
            {numOfItems}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
