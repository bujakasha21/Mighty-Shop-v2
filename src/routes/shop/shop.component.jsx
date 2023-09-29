import React, { useContext } from "react";
import { ProductContext } from "../../contexts/productContext";
import Product from "../../components/product/product.component";

const Shop = () => {
  const products = useContext(ProductContext);
  //console.log(products);

  const productFilter = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <>
      <section className="py-18">
        <div className="container mx-auto mt-16 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {productFilter.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
