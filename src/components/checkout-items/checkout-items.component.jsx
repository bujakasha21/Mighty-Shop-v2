import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext.component";
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CheckoutItems = ({ items }) => {
  const { increaseItem, decreaseItem, removeFromCart } =
    useContext(CartContext);

  const { id, image, title, price, amount } = items;

  const increase = () => increaseItem(id);
  const decrease = () => decreaseItem(id);
  const deleteItem = () => removeFromCart(id);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-[75%] border-b mt-10 p-10">
      <div className="flex h-[100px] w-[100px] md:h-[150px] md:w-[150px] ">
        <img src={image} alt={`${title}`} />
      </div>

      <span className="font-secondary font-semibold text-xl md:w-[200px] mt-4">
        {title}
      </span>
      <div className="flex flex-row items-center border mt-4 px-4 py-2">
        <div onClick={decrease} className="cursor-pointer">
          <AiOutlineMinus className="opacity-60" />
        </div>
        <span className="px-4 font-primary text-lg">{amount}</span>
        <div onClick={increase} className="cursor-pointer">
          <AiOutlinePlus className="opacity-60" />
        </div>
      </div>
      <span className="font-primary font-semibold text-2xl mt-4 text-red-700">
        ${price * amount}
      </span>
      <span
        onClick={deleteItem}
        className="flex items-center justify-center bg-mainColor w-14 h-14 mt-5 cursor-pointer hover:bg-gray-700 transition"
      >
        <AiOutlineDelete className="text-2xl text-white" />
      </span>
    </div>
  );
};

export default CheckoutItems;
