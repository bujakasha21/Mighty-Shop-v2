import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShopping, AiFillEye } from "react-icons/ai";

import { CartContext } from "../../contexts/cartContext.component";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const { id, title, image, price, category } = product;
  return (
    <div>
      <div className=" border-2 rounded-2xl border-mainColor h-[300px] mt-5 mb-2 relative overflow-hidden group transition">
        <div className="card-hover flex w-full h-full  justify-center items-center">
          <div className=" flex w-[200px] mx-auto justify-center items-center">
            <img className=" max-h-[170px]" src={image} alt="" />
          </div>
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300ms">
            <button onClick={() => addToCart(product, id)}>
              <div className="flex justify-center items-center bg-mainColor text-white w-12 h-12">
                <AiOutlineShopping className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="flex w-12 h-12 justify-center items-center bg-white text-mainColor text-2xl"
            >
              <AiFillEye />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-md font-secondary capitalize text-gray-600 ">
          {category}
        </p>
        <Link to={`/product/${id}`}>
          <h2 className="font-bold font-primary text-2xl text-mainColor mb-2">
            {title}
          </h2>
        </Link>
        <p className=" font-secondary font-semibold text-xl capitalize text-gray-600 ">{`$${price}`}</p>
      </div>
    </div>
  );
};

export default Product;
