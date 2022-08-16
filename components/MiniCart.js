import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { formatter } from "../utils/helpers";
import { CartContext } from "../context/ShopContext";

export default function MiniCart({ cart }) {
  const cancelButtonRef = useRef();
  const [cartOpen, setCartOpen, checkoutUrl] = useContext(CartContext);
  const [show, setShow] = useState(false);

  let cartTotal = 0;
  cart.map((item) => {
    cartTotal += item?.variantPrice * item?.variantQuantity;
  });

  return (
    <Transition.Root show={cartOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          setCartOpen(!cartOpen);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="bg-gray-500 fixed inset-0 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-gray-900 text-lg font-medium">
                          {" "}
                          Shopping cart{" "}
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
                          <ul
                            role="list"
                            className="divide-gray-200 -my-6 divide-y"
                          >
                            {cart.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="border-gray-200 relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                                  <Image
                                    src={product.image}
                                    alt={product.title}
                                    layout="fill"
                                    objectFit="cover"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="text-gray-900 flex justify-between text-base font-medium">
                                      <h3>
                                        <a href={product.href}>
                                          {" "}
                                          {product.title}{" "}
                                        </a>
                                      </h3>
                                      <p className="ml-4">
                                        {formatter.format(product.variantPrice)}
                                      </p>
                                    </div>
                                    <p className="text-gray-500 mt-1 text-sm">
                                      {product.variantTitle}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      Qty {product.variantQuantity}
                                    </p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="text-indigo-600 hover:text-indigo-500 font-medium"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {cart.length > 0 ? (
                      <div className="border-gray-200 border-t py-6 px-4 sm:px-6">
                        <div className="text-gray-900 flex justify-between text-base font-medium">
                          <p>Subtotal</p>
                          <p>{formatter.format(cartTotal)}</p>
                        </div>
                        <p className="text-gray-500 mt-0.5 text-sm">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <a
                            href={checkoutUrl}
                            className="border-transparent bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center rounded-md border px-6 py-3 text-base font-medium text-white shadow-sm"
                          >
                            Checkout
                          </a>
                        </div>
                        <div className="text-gray-500 mt-6 flex justify-center text-center text-sm">
                          <p>
                            or{" "}
                            <button
                              type="button"
                              className="text-indigo-600 hover:text-indigo-500 font-medium"
                              onClick={() => setCartOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
