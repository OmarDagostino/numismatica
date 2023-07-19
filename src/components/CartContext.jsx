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

  const calculateTotalQuantity = (cart, addedQuantity) => {
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


/* import { createContext, useState } from "react";

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
        totalQuantity,
        addItem,
        removeItem,
        clearItem,
        calculateTotalQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
*/

/*import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],totalQuantity:0
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
    updateTotalQuantity();
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);

    const itemToRemove = cart.find((prod) => prod.id === itemId);
    if (itemToRemove) {
      setTotalQuantity((prev) => prev - itemToRemove.quantity);
    }
    updateTotalQuantity();
  };

  const clearItem = (itemId) => {
    setCart([]);
    updateTotalQuantity();
  };

  const updateTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    setTotalQuantity(total);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearItem, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
  
};
*/

/* import { createContext, useState } from "react";
export const CartContext = createContext ({ 
    cart : []
})

      export const CartProvider = ({ children }) => {
        const [cart, setCart] = useState([]);
        const [totalQuantity, setTotalQuantity] = useState(0);
      
        const addItem = (item, quantity) => {
          if (!isInCart(item.id)) {
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
        const cartUpdated = cart.filter((prod) => prod.id !== itemId);
        setCart(cartUpdated);
      
        const itemToRemove = cart.find((prod) => prod.id === itemId);
        if (itemToRemove) {
          setTotalQuantity((prev) => prev - itemToRemove.quantity); 
        }
      };
      

    const clearItem = (itemId) => {
        setCart ([])
    }

    const isInCart =(itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    console.log ("total Q 1")
    console.log (totalQuantity)
    return (
        <CartContext.Provider value= {{ cart, addItem, removeItem, clearItem, totalQuantity}}>
            {children} 
        </CartContext.Provider>)
}
*/