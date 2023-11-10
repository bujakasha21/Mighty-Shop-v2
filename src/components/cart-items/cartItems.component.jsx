import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { CartContext } from "../../contexts/cartContext.component";

const CartItems = ({ item }) => {
  const { removeFromCart, increaseItem, decreaseItem } =
    useContext(CartContext);

  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-4 border-b border-gray-200 w-full font-light text-gray-500">
      {/*Image*/}
      <div className="w-full min-h-[150px] flex items-center  gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[90px]" src={image} alt="" />
        </Link>
        {/* title and delete*/}
        <div className="flex flex-col w-full">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="font-secondary font-semibold text-md uppercase max-w-[210px] text-mainColor hover:underline"
            >
              {title}
            </Link>
            <div className="flex justify-center items-center bg-mainColor w-10 h-10 cursor-pointer hover:bg-gray-700 transition">
              <AiOutlineDelete
                onClick={() => removeFromCart(id)}
                className="text-xl text-white "
              />
            </div>
          </div>
          <div className="flex gap-x-2 h-[40px] font-secondary text-md">
            {/*quantity*/}
            <div className="flex flex-1  max-w-[100px] border items-center h-full font-primary">
              {/* - */}
              <div
                onClick={() => decreaseItem(id)}
                className="flex-1 flex items-center justify-center h-full cursor-pointer"
              >
                <AiOutlineMinus />
              </div>
              {/* amount */}
              <span className="flex h-full items-center justify-center px-3">
                {amount}
              </span>
              {/* + */}
              <div
                onClick={() => increaseItem(id)}
                className="flex-1 flex items-center justify-center h-full cursor-pointer"
              >
                <AiOutlinePlus />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around text-mainColor text-lg font-primary ">
              ${price}
            </div>
            <div className="flex-1 flex justify-end items-center text-red-700 text-lg font-semibold font-primary">{`$${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
