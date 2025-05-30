import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  // Safe function to parse localStorage data
  const safeParseJSON = (item, fallback = []) => {
    try {
      if (!item || item === "undefined" || item === "null") {
        return fallback;
      }
      const parsed = JSON.parse(item);
      return Array.isArray(parsed) ? parsed : fallback;
    } catch (error) {
      console.warn(`Error parsing localStorage item:`, error);
      return fallback;
    }
  };

  // Initialize cart state
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return safeParseJSON(savedCart, []);
    }
    return [];
  });

  // Initialize wishlist state
  const [wishList, setWishList] = useState(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlist");
      return safeParseJSON(storedWishlist, []);
    }
    return [];
  });

  // Save wishlist to localStorage with error handling
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("wishlist", JSON.stringify(wishList));
      } catch (error) {
        console.error("Error saving wishlist to localStorage:", error);
      }
    }
  }, [wishList]);

  // Save cart to localStorage with error handling
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("cart", JSON.stringify(cart));
      } catch (error) {
        console.error("Error saving cart to localStorage:", error);
      }
    }
  }, [cart]);

  // ========================
  // Wishlist Functions
  // ========================
  const addToWishlist = (product) => {
    setWishList((prev) => {
      const alreadyInWishlist = prev.some((item) => item.id === product.id);
      if (alreadyInWishlist) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishList((prev) => prev.filter((item) => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishList.some((item) => item.id === productId);
  };

  // Clear wishlist
  const clearWishlist = () => {
    setWishList([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("wishlist");
    }
  };

  // ========================
  // Cart Functions
  // ========================
  const addToCart = (item) => {
    setCart((prevCart) => {
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
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const updateCart = (newCart) => {
    setCart(newCart);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // ========================
  // Context Value
  // ========================
  const info = {
    cart,
    cartCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    updateCart,

    wishList,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
  };

  return <UserContext.Provider value={info}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };