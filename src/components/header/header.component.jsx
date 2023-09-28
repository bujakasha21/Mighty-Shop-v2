import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { SidebarContext } from "../../contexts/sidebarContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <header className="bg-mainColor">
      <h1 className="text-white text-xl justify-center items-center">Header</h1>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex relative"
      >
        <AiOutlineShoppingCart className="text-3xl text-white" />
      </div>
    </header>
  );
};

export default Header;
