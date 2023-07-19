import React, { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  addItem: () => {},
  removeItem: () => {},
  clearItem: () => {}
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (item, quantity) => {
    const itemInCart = cart.find((prod) => prod.id === item.id);

    if (!itemInCart) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      setCart((prev) =>
        prev.map((prod) =>
          prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
        )
      );
    }

    setTotalQuantity((prev) => prev + quantity);
  };

  const removeItem = (itemId) => {
    const itemToRemove = cart.find((prod) => prod.id === itemId);
    if (itemToRemove) {
      setTotalQuantity((prev) => prev - itemToRemove.quantity);
      setCart((prev) => prev.filter((prod) => prod.id !== itemId));
    }
  };

  const clearItem = (itemId) => {
    setCart([]);
    setTotalQuantity(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalQuantity,
        addItem,
        removeItem,
        clearItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
