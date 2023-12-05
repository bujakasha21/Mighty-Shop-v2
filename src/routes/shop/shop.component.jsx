import React, { useContext, useState } from "react";
import { ProductContext } from "../../contexts/productContext";
import Product from "../../components/product/product.component";
import Spinner from "../../components/spinner/spinner.components";
import BackToTopButton from "../../components/back-to-top-button/backToTopButton.components";

const Shop = () => {
  const [isLoading, setIsLoading] = useState(false);
  const products = useContext(ProductContext);

  const productFilter = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <>
      <section className="py-18 mb-20">
        <div className="container mx-auto">
          <h1 className="flex items-center justify-center md:justify-start mt-16 pb-8 font-primary text-6xl border-b">
            shop
          </h1>
        </div>
        <div className="container mx-auto mt-16 ">
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {productFilter &&
                productFilter.map((product) => (
                  <Product key={product.id} product={product} />
                ))}
            </div>
          )}
        </div>
      </section>
      <BackToTopButton />
    </>
  );
};

export default Shop;
