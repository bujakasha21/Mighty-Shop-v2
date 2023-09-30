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
    <section className="pt-32 pb-12 lg:py-32 h-screen">
      <div className="flex w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-16 lg:mb-2">
            <img
              className="max-w-[250px] lg:max-w-[300px]:"
              src={image}
              alt=""
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="flex justify-center items-center text-[30px] font-primary mb-1 max-w-[450px] lg:mx-0">
              {title}
            </h1>
            <div className="text-red-700 font-secondary font-bold text-2xl mb-4">
              ${price}
            </div>
            <p className="max-w-[600px] mb-8">{description}</p>
            <button onClick={() => addToCart(product, product.id)}>
              Add To Bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsProduct;
