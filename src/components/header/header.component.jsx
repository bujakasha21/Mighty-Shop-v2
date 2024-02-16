import React, { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

import { ReactComponent as MightyLogo } from "../../img/logo1.svg";
import { FaTimes, FaBars } from "react-icons/fa";

import { SidebarContext } from "../../contexts/sidebarContext";
import { CartContext } from "../../contexts/cartContext.component";
import { UserContext } from "../../contexts/userContext";
import { SignOutUser } from "../../utils/firebase/firebase.utils";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { numOfItems } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-black to-mainColor border-b-2  border-secondaryColor">
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between w-11/12 mx-auto">
          <div className="flex items-center">
            <Link to={"/"} className="text-white text-xl flex my-6">
              <MightyLogo className="h-[60px] md:h-[100px]" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center md:space-x-10 lg:space-x-[120px] px-10 font-secondary font-bold text-2xl">
              <div className="text-hover">
                <Link to={"/"}>HOME</Link>
              </div>
              <div className="text-hover">
                <Link to={"/shop"}>SHOP</Link>
              </div>
              <div className="text-hover">
                {currentUser ? (
                  <Link onClick={SignOutUser}>SIGN OUT</Link>
                ) : (
                  <Link to="/sign-in">SIGN IN</Link>
                )}
              </div>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer flex relative max-w-[50px] text-hover"
              >
                <AiOutlineShoppingCart className="text-2xl lg:text-3xl text-white " />
                <div className="flex absolute items-center justify-center -right-2 -bottom-2 bg-red-900  text-white text-[12px] w-[18px] h-[18px] rounded-full">
                  {numOfItems}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile navbar */}

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondaryColor"
            >
              {isMenuOpen ? (
                <FaTimes className="w-8 h-8" />
              ) : (
                <FaBars className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="md:hidden">
          <div className="px-2 pt-10 pb-10 sm:px-3">
            <div className="flex flex-col items-center justify-center space-y-10 text-xl">
              <div className="font-secondary">
                <Link to={"/"}>HOME</Link>
              </div>
              <div className="font-secondary">
                <Link to={"/shop"}>SHOP</Link>
              </div>
              <div className="font-secondary">
                {currentUser ? (
                  <Link onClick={SignOutUser}>SIGN OUT</Link>
                ) : (
                  <Link to="/sign-in">SIGN IN</Link>
                )}
              </div>
              <div className="font-secondary">
                <Link to={"/checkout"}>
                  CHECKOUT
                  <span className="bg-red-900 rounded-full p-[2px]">
                    ({numOfItems})
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* Navbar desktop 

      <div className="flex items-center">
        <Link to={"/"} className="text-white text-xl flex my-8">
          <MightyLogo className="h-[60px] md:h-[100px]" />
        </Link>
      </div>
      <div className="hidden lg:flex flex-row items-center justify-around w-1/2 gap-[20%] mr-10">
        <div className="text-hover">
          <Link to={"/"}>HOME</Link>
        </div>
        <div className="text-hover">
          <Link to={"/shop"}>SHOP</Link>
        </div>
        <div className="flex lg:text-hover w-fit">
          {currentUser ? (
            <Link onClick={SignOutUser}>SIGN OUT</Link>
          ) : (
            <Link to="/sign-in">SIGN IN</Link>
          )}
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative max-w-[50px] text-hover"
        >
          <AiOutlineShoppingCart className="text-2xl lg:text-4xl text-white " />
          <div className="flex absolute items-center justify-center -right-2 -bottom-2 bg-red-900  text-white text-[12px] w-[18px] h-[18px] rounded-full">
            {numOfItems}
          </div>
        </div>
      </div>


      <div className=" mr-5 flex flex-col lg:hidden">
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-white"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isMenuOpen ? (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-lg">
              <div className="text-white block px-3 py-2 rounded-md text-base">
                <Link to={"/"}>HOME</Link>
              </div>
              <div className="text-white block px-3 py-2 rounded-md text-base">
                <Link to={"/shop"}>SHOP</Link>
              </div>
              <div className="text-white block px-3 py-2 rounded-md text-base">
                {currentUser ? (
                  <Link onClick={SignOutUser}>SIGN OUT</Link>
                ) : (
                  <Link to="/sign-in">SIGN IN</Link>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
      */}
    </header>
  );
};

export default Header;
