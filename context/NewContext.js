import React, { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const StateContext = ({ children }) => {
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const removeQuantity = () => {
    setQuantity((prevQuantity) => {
      return prevQuantity - 1 <= 1 ? 1 : prevQuantity - 1;
    });
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
