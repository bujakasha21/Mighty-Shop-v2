import React, { useContext } from "react";

import { CartContext } from "../../contexts/cartContext.component";
import { SidebarContext } from "../../contexts/sidebarContext";
import CartItems from "../cart-items/cartItems.component";

import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);

  const { cart, clearCart, numOfItems, total } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-500 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between  border-b py-5">
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <AiOutlineArrowRight className="text-2xl ml-2" />
        </div>
        <h3 className="capitalize text-2xl font-primary">
          Shopping Bag ({numOfItems})
        </h3>
      </div>
      <div className=" flex flex-col gap-y-2 h-[5200px] lg:h-[600px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItems item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className=" flex justify-between items-center w-full">
          <div className="uppercase font-primary text-2xl">
            <span className="mr-2">Total: </span>${parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="flex justify-center items-center p-3 cursor-pointer bg-mainColor text-white text-xl font-secondary w-[120px] h-12 "
          >
            <span>Empty Cart</span>
          </div>
        </div>
        <Link
          to="/"
          className="flex p-4 items-center justify-center border-2 border-mainColor rounded-lg text-mainColor font-secondary font-bold text-2xl"
        >
          View Cart
        </Link>
        <Link className="flex p-4 items-center justify-center border-2 rounded-lg border-mainColor bg-red-900 font-secondary text-2xl">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
