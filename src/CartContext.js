import React, { createContext } from "react";

const cart = {
  items: [],
};

export const CartContext = createContext(cart);

export function CartProvider({ children, value }) {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
