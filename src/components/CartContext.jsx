import React, { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  addItem: () => {},
  removeItem: () => {},
  clearItem: () => {},
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

  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    const removedItem = cart.find((item) => item.id === itemId);

    if (removedItem) {
      const removedQuantity = removedItem.quantity;
      const newTotalQuantity = calculateTotalQuantity(updatedCart, -removedQuantity);

      setCart(updatedCart);
      setTotalQuantity(newTotalQuantity);
    }
  };

  const clearItem = (itemId) => {
    const removedItem = cart.find((item) => item.id === itemId);

    if (removedItem) {
      const removedQuantity = removedItem.quantity;
      const newTotalQuantity = calculateTotalQuantity(cart, -removedQuantity);

      setCart(cart.filter((item) => item.id !== itemId));
      setTotalQuantity(newTotalQuantity);
    }
  };

  const calculateTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        calculateTotalQuantity,
        addItem,
        removeItem,
        clearItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

