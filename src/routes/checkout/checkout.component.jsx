import { useContext } from "react";

import { CartContext } from "../../contexts/cartContext.component";
import CheckoutItems from "../../components/checkout-items/checkout-items.component";
import { Link } from "react-router-dom";
import BackToTopButton from "../../components/back-to-top-button/backToTopButton.components";

const Checkout = () => {
  const { cart, total } = useContext(CartContext);

  return (
    <section className="flex flex-col items-center justify-center w-full ">
      <div className="flex items-center justify-center md:justify-start mx-auto mt-16 pb-8 w-[82%] font-primary text-6xl border-b">
        <h1 className="flex items-start font-primary text-6xl">Checkout</h1>
      </div>
      <div className="w-full flex flex-col items-center justify-center md:h[1000px] overflow-y-auto overflow-x-hidden">
        {cart.map((items) => (
          <CheckoutItems key={items.id} items={items} />
        ))}
      </div>

      <span className="flex font-primary text-center text-6xl p-16">
        Total: ${parseFloat(total).toFixed(2)}
      </span>
      <BackToTopButton />
    </section>
  );
};

export default Checkout;
