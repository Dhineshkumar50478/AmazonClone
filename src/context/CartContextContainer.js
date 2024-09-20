import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextContainer = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleCart = (name, price) => {
    const data = { description: name, price};
    setCart(prevCart => [...prevCart, data]); // Append new cart item to the array
  };

  return (
    <CartContext.Provider value={{ handleCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextContainer;
