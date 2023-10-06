import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [numOfItems, setNumOfItems] = useState(0);

  // total price

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, currentItem) => {
      return acc + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });

  //update item amount

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, currentItem) => {
        return acc + currentItem.amount;
      }, 0);
      setNumOfItems(amount);
    }
  }, [cart]);

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
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
