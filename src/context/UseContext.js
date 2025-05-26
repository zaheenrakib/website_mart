import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    if (cart !== null) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      if (!prevCart) return [{ ...item, quantity: item.quantity || 1 }];

      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += item.quantity || 1;
        return updatedCart;
      }

      return [...prevCart, { ...item, quantity: item.quantity || 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart?.filter((item) => item.id !== itemId) || []);
  };

  const clearCart = () => {
    setCart([]); // Update state first
    localStorage.removeItem("cart"); // Then remove from localStorage
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCart((prevCart) => {
      if (!prevCart) return [];
      return prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const updateCart = (newCart) => {
    setCart(newCart);
  }



  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const info = { addToCart, removeFromCart, updateQuantity, clearCart, cart, cartCount, updateCart };

  return <UserContext.Provider value={info}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
