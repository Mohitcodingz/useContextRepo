// the context is created here and the provider too.
// This file creates the context, manages the state (adding items), and exports a custom hook (useCart) to make consuming it clean.

import { createContext, useContext, useState } from 'react';

// 1. Create the Context
const CartContext = createContext();

// 2. Create the Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Added to cart on localhost:", product);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Custom hook for easy consumption
export const useCart     = () => useContext(CartContext);
