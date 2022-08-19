import { create, useState, useEffect, createContext } from "react";
import { createCheckout, updateCheckout } from "../lib/Shopify";

const CartContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [chechoutId, setChechoutId] = useState("");
  const [checkoutUrl, setChechoutUrl] = useState("");

  async function addToCart(newItem) {
    if (cart.length === 0) {
      setCart([newItem]);

      const checkout = await createCheckout(newItem.id, newItem.quantity);

      setChechoutId(checkout.id);
      setChechoutUrl(checkout.webUrl);

      localStorage.setItem("checkout_id", JSON.stringify([newItem, checkout]));
    } else {
      let newCart = [...cart];
      cart.map((item) => {
        if (item.id === newItem.id) {
          item.quantity++;
          newCart = [...cart];
        } else {
          newCart = [...cart, newItem];
        }
      });

      setCart(newCart);

      const newCheckout = await updateCheckout(chechoutId, newCart);
      localStorage.setItem(
        "checkout_id",
        JSON.stringify([newCart, newCheckout])
      );
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        setCartOpen,
        addToCart,
        checkoutUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const ShopConsumer = CartContext.Consumer;
export { ShopConsumer, CartContext };
export default ShopProvider;
