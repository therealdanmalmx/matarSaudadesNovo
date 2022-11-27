import { Fragment, useContext, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { formatter } from "../utils/helpers";
import { CartContext } from "../context/ShopContext";
import { motion } from "framer-motion";

export default function MiniCart({ cart }) {
  const cancelButtonRef = useRef();
  const { cartOpen, setCartOpen, checkoutUrl, removeCartItem } = useContext(CartContext);
  console.log(cartOpen);

  let cartTotal = 0;
  cart.map((item) => {
    cartTotal += item?.price * item?.quantity;
  });

  return (
    <motion.div
        animate={{ opacity: 1}}
        initial={{ opacity: 0}}
        className="fixed right-0 top-0 h-full w-full z-50 flex bg-black/[0.7] justify-end"
        onClick={() => {
          setCartOpen(!cartOpen);
        }}
      >
        <motion.div
          initial={{ x:'50%' }}
          animate={{ x:'0%' }} 
          transition={{ type: "tween" }}
          className='w-1/4 bg-white p-8 overflow-scroll relative'>
              <div className="ml-3 flex h-7 items-center absolute right-5 top-5">
                <button
                  ref={cancelButtonRef}
                  type="button"
                  className="-m-2 p-2 text-gray-400 outline-none hover:text-gray-500"
                  onClick={() => setCartOpen(false)}
                >
                  <span className="sr-only">Close panel</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>  
              <div className="text-lg font-medium text-gray-900">
                Shopping cart
              </div>
              <div className="mt-8">
                <div className="flow-root">
                  {cart.length >=1 ? (
                    <ul
                      role="list"
                      className="-my-6 divide-y divide-gray-200"
                    >
                      {cart.map((product) => (
                        <li
                          key={product.id + Math.random()}
                          className="flex py-6"
                        >
                          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <Link
                              legacyBehavior
                              href={`/categorias/bebidas/${product.handle}`}
                              passHref
                            >
                              <Image
                                src={product.image}
                                alt={product.title}
                                layout="fill"
                                objectFit="cover"
                                href={`/categorias/bebidas/${product.handle}`}
                                className="hover:cursor-pointer"
                                onClick={() => setCartOpen(false)}
                              />
                            </Link>
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <Link
                                    legacyBehavior
                                    href={`/categorias/bebidas/${product.handle}`}
                                    passHref
                                    className="cursor-pointer"
                                  >
                                    <a onClick={() => setCartOpen(false)}>
                                      {product.title}
                                    </a>
                                  </Link>
                                </h3>
                                <p className="ml-4">
                                  {formatter.format(product.price)}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <p className="text-gray-500">
                                Qty {product.quantity}
                              </p>

                              <div className="flex">
                                <button
                                  onClick={() =>
                                    removeCartItem(product.id)
                                  }
                                  type="button"
                                  className="font-medium text-gray-500 hover:text-gray-800"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <motion.div
                      initial={{opacity: 0, scale: 0.8}}
                      animate={{opacity: 1, scale: 1}}
                    >
                      <p>Nothing in your cart!</p>
                    </motion.div>
                  )}
                </div>
              </div>
              {cart.length > 0 ? (
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>{formatter.format(cartTotal)}</p>
                </div>
                <p className="mt-0.5 text-xs text-gray-500">
                  Shipping calculated at checkout.
                </p>
                <div className="mt-6">
                  <Link legacyBehavior href={checkoutUrl} passHref>
                    <button className="w-full rounded-md border bg-success px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-success-hover active:bg-success">
                      Checkout
                    </button>
                  </Link>
                </div>
                <div className="mt-6 flex justify-center text-center text-xs text-gray-500">
                  <button
                    className="hover:text-gray-800"
                    onClick={() => setCartOpen(false)}
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </div>
              </div>
              ) : null}
        </motion.div>
      </motion.div>
  );
}
