import React, { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartitems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  console.log({ cartItems });

  const addQuantity = () => {
    setQuantity(quantity + 1 > 99 ? 1 : quantity + 1);
  };
  const removeQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const addToCart = (product, quantity) => {
    const productExist = cartItems.find((item) => item.slug === product.slug);
    if (productExist) {
      setCartitems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...productExist, quantity: productExist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartitems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  const removeFromCart = () => {};

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
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);
