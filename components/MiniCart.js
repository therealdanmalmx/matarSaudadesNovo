import { Fragment, useContext, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { formatter } from "../utils/helpers";
import { CartContext } from "../context/ShopContext";

export default function MiniCart({ cart }) {
  const cancelButtonRef = useRef();
  const { cartOpen, setCartOpen, checkoutUrl, removeCartItem } =
    useContext(CartContext);

  let cartTotal = 0;
  cart.map((item) => {
    cartTotal += item?.price * item?.quantity;
  });

  return (
    <Transition.Root show={cartOpen} as={Fragment}>
      <Dialog
        initialFocus={cancelButtonRef}
        as="div"
        className="fixed inset-0 z-50 overflow-hidden"
        onClose={() => {
          setCartOpen(!cartOpen);
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="bg-gray-500 absolute inset-0 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-gray-900 text-lg font-medium">
                        Shopping cart
                      </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          ref={cancelButtonRef}
                          type="button"
                          className="text-gray-400 hover:text-gray-500 -m-2 p-2"
                          onClick={() => setCartOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        {cart.length ? (
                          <ul
                            role="list"
                            className="divide-gray-200 -my-6 divide-y"
                          >
                            {cart.map((product) => (
                              <li
                                key={product.id + Math.random()}
                                className="flex py-6"
                              >
                                <div className="border-gray-200 relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                                  <Link
                                    href={`/categorias/bebidas/${product.handle}`}
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
                                    <div className="text-gray-900 flex justify-between text-base font-medium">
                                      <h3>
                                        <Link
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
                                        className="text-gray-500 hover:text-gray-800 font-medium"
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
                          <div>
                            <p>Nothing in your cart!</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {cart.length > 0 ? (
                    <div className="border-gray-200 border-t py-6 px-4 sm:px-6">
                      <div className="text-gray-900 flex justify-between text-base font-medium">
                        <p>Subtotal</p>
                        <p>{formatter.format(cartTotal)}</p>
                      </div>
                      <p className="text-gray-500 mt-0.5 text-xs">
                        Shipping calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <Link
                          href="https://novomatarsaudades.myshopify.com/62406656248/checkouts/3069e57df4cd25f437cd8f0e062cd66f?key=d75995953d16653e360876e1d09fcf4c"
                          passHref
                        >
                          <button className="hover:bg-gray-800 w-full rounded-md border bg-success px-6 py-3 text-base font-medium text-white shadow-sm">
                            Checkout
                          </button>
                        </Link>
                      </div>
                      <div className="text-gray-500 mt-6 flex justify-center text-center text-xs">
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
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
