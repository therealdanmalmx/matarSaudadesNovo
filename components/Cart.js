import Image from "next/image";
import { useStoreContext } from "../context/NewContext";
import { formatter } from "../utils/helpers";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";
import getStripe from "../lib/getStripe";
// const { motion } = require("framer-motion");

function Cart() {
  const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

  const {
    cartItems,
    setShowCart,
    showCart,
    addToCart,
    removeFromCart,
    totalPrice,
  } = useStoreContext();

  const handleCheckout = async () => {
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    const stripe = await getStripe();
    await stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="fixed inset-x-0 top-0 flex h-screen w-full justify-end bg-gray-900 bg-opacity-40"
      onClick={() => setShowCart(!showCart)}
    >
      <div
        className="absolute top-5 right-5 z-10"
        onClick={() => setShowCart(!showCart)}
      >
        <VscChromeClose className="h-6 w-6 hover:text-gray-400 md:h-4 md:w-4" />
      </div>

      <motion.div
        initial={{ x: "50%" }}
        animate={{ x: "0%" }}
        transition={{ type: "tween" }}
        exit={{ x: "50%" }}
        className="relative flex w-full flex-col justify-between bg-slate-100 px-8 py-16 md:w-1/4"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {!cartItems.length && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute mx-auto flex h-full w-full flex-col items-center justify-center p-2 text-center text-gray-400"
            >
              <h1>Não existem produtos na cesta</h1>
              <FaShoppingCart className="mt-2 text-7xl" />
            </motion.div>
          )}
          {!!cartItems.length &&
            cartItems.map((item) => {
              const { url } = item.image.data.attributes;
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  key={item.slug}
                  className="z-20 mt-4 flex items-center justify-between overflow-hidden rounded-2xl bg-white p-2 first-of-type:mt-0 "
                >
                  <Image
                    src={`${BASE_URL}${url}`}
                    alt={`Imagem de ${item.slug}`}
                    width={80}
                    height={80}
                    priority="true"
                    unoptimized="true"
                    />
                  <div className="div:flex div:justify-between w-1/2">
                    <h3>{item.title}</h3>
                    <h3>{formatter.format(item.price)}</h3>
                    <div className="flex items-center justify-start">
                      <span className="mr-2 text-sm">Quantidade:</span>
                      <button>
                        <AiFillMinusCircle
                          onClick={() => removeFromCart(item)}
                        />
                      </button>
                      <input
                        className="h-6 w-6 text-center text-sm"
                        type="text"
                        id="quantity"
                        placeholder={item.quantity}
                      />
                      <button>
                        <AiFillPlusCircle onClick={() => addToCart(item, 1)} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>
        <div>
          {cartItems.length >= 1 && (
            <div>
              <h3 className="mt-8 text-right text-sm">
                Subtotal: {formatter.format(totalPrice)}
              </h3>
              <button
                className="z-10 mt-5 w-full bg-black py-3 px-6 text-center text-sm text-white focus:bg-gray-800"
                onClick={() => handleCheckout()}
              >
                Comprar
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Cart;
