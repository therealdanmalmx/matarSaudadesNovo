import { crete, useState, useEffect, createContext } from "react";
import { createCheckout } from "../lib/Shopify";

const cartContext = createContext();

export default function ShopContext({ children }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [chechoutId, setChechoutId] = useState("");
  const [chechoutUrl, setChechoutUrl] = useState("");

  async function addToCart(newItem) {
    if (cart.length === 0) {
      setCart([newItem]);

      const checkout = await createCheckout(newItem.id, newItem.quantity);

      setChechoutId(checkout.id);
      setChechoutUrl(checkout.webUrl);

      localstorage.setItem("checkout_id", JSON.stringify([newItem, checkout]));
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
    }
  }

  return <div></div>;
}
