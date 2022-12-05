import React, { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const StateContext = ({ children }) => {
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity(quantity + 1 > 99 ? 1 : quantity + 1);
  };
  const removeQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };
  return (
    <StoreContext.Provider
      value={{ quantity, setQuantity, addQuantity, removeQuantity }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);
