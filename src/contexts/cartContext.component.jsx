import React, { useState, createContext, useEffect } from "react";
import { Link } from "react-router-dom";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [numOfItems, setNumOfItems] = useState(0);

  //add item

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // remove item

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //clear cart

  const clearCart = () => {
    setCart([]);
  };

  //increase

  const increaseItem = (id) => {
    const itemCart = cart.find((item) => item.id === id);
    addToCart(itemCart, id);
  };

  //decrease

  const decreaseItem = (id) => {
    const itemCart = cart.find((item) => {
      return item.id === id;
    });
    if (itemCart) {
      const newItem = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: itemCart.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newItem);
    }
    if (itemCart.amount < 2) {
      return removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseItem,
        decreaseItem,
        numOfItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
