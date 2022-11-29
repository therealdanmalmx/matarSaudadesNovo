import { Fragment, useContext, useRef, useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { formatter } from "../utils/helpers";
import { CartContext } from "../context/ShopContext";
import { motion } from "framer-motion";

export default function MiniCart({ cart }) {
  const { cartOpen, setCartOpen, checkoutUrl, cartItems, removeCartItem } = useContext(CartContext);
  console.log({ cartOpen });

  return (
    <div className="fixed right-0 top-0 h-screen w-full bg-black bg-opacity-40 z-50 flex justify-end">
      <div className="w-3/12 bg-white p-10 overflow-y-scroll relative">
        {cartItems.length < 1 && (
          <div>
            <h1>You have more shopping to do!</h1>
          </div>
        )}
        <div>
          <img src="" alt="" />
          <div>
            <h3>title</h3>
            <h3>Price</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
