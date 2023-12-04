import React, { useContext } from "react";

import { useParams } from "react-router-dom";

import { CartContext } from "../../contexts/cartContext.component";

import { ProductContext } from "../../contexts/productContext";

const DetailsProduct = () => {
  const { id } = useParams();
  const products = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <h1 className="h-screen flex items-center justify-center">Loading...</h1>
    );
  }

  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen mb-20">
      <div className="flex w-full mx-auto ">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex flex-1 justify-center items-center mb-16 lg:mb-2">
            <img
              className="max-w-[250px] lg:max-w-[350px]:"
              src={image}
              alt=""
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="flex justify-center lg:justify-start items-center text-[30px] font-primary mb-1 w-full mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-red-700 font-secondary font-bold text-2xl mb-4">
              ${price}
            </div>
            <p className="max-w-[600px] mx-20 lg:mx-0 mb-8">{description}</p>
            <button
              className="border rounded-lg text-2xl py-2 px-5 text-white font-secondary bg-red-900 hover:bg-mainColor hover:text-white md:transition"
              onClick={() => addToCart(product, product.id)}
            >
              Add To Bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsProduct;
