import { useContext } from "react";

import { CartContext } from "../../contexts/cartContext.component";
import CheckoutItems from "../../components/checkout-items/checkout-items.component";

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
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-around md:border-t border-gray-200 w-[82%] mb-10 mt-10">
        <button className="border rounded-lg py-2 px-5 text-2xl bg-mainColor text-white font-primary hover:bg-white hover:text-mainColor transition">
          Pay with card
        </button>
        <span className="flex font-primary text-6xl p-10">
          Total: ${parseFloat(total).toFixed(2)}
        </span>
      </div>
    </section>
  );
};

export default Checkout;
