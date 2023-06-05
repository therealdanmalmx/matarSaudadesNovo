import React, { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addQuantity = () => {
    setQuantity(quantity + 1 > 99 ? 1 : quantity + 1);
  };

  const removeQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const addToCart = (product, quantity) => {
    setTotalQuantity((prevTotal) => prevTotal + quantity);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    const productExist = cartItems.find((item) => item.slug === product.slug);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...productExist, quantity: productExist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  const removeFromCart = (product) => {
    setTotalQuantity((prevTotal) => prevTotal - 1);
    setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price);
    const productExist = cartItems.find((item) => item.slug === product.slug);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <StoreContext.Provider
      value={{
        quantity,
        setQuantity,
        addQuantity,
        removeQuantity,
        showCart,
        setShowCart,
        cartItems,
        addToCart,
        removeFromCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);
