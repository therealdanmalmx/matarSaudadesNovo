import Image from "next/image";
import { useStoreContext } from "../context/NewContext";
import { formatter } from "../utils/helpers";
import { FaShoppingCart } from "react-icons/fa";
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineClose,
} from "react-icons/ai";

function Cart() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const { cartItems, setShowCart, showCart, addToCart } = useStoreContext();

  return (
    <div
      className="fixed inset-x-0 top-0 flex h-screen w-full justify-end bg-gray-900 bg-opacity-40"
      onClick={() => setShowCart(!showCart)}
    >
      <div
        className="absolute top-5 right-5 z-10"
        onClick={() => setShowCart(!showCart)}
      >
        <AiOutlineClose className="h-6 w-6 hover:text-gray-400 md:h-4 md:w-4" />
      </div>

      <div
        className="relative w-full bg-slate-100 px-8 py-20 md:w-1/4"
        onClick={(e) => e.stopPropagation()}
      >
        {!cartItems.length && (
          <div className="align-center top-0 flex h-full w-full flex-col justify-center text-center">
            <h1>Não existem produtos na cesta</h1>
            <FaShoppingCart className="mx-auto p-2 text-7xl text-gray-400" />
          </div>
        )}
        {cartItems.length &&
          cartItems.map((item) => {
            const { url, alternativeText } = item.image.data.attributes;
            console.log({ item });
            return (
              <div className="img:w-32 z-20 flex items-center justify-between overflow-hidden rounded-2xl bg-white p-2 ">
                <Image
                  src={`${BASE_URL}${url}`}
                  alt={alternativeText}
                  width={80}
                  height={80}
                  priority
                />
                <div className="div:flex div:justify-between w-1/2">
                  <h3>{item.title}</h3>
                  <h3>{formatter.format(item.price)}</h3>
                  <div className="flex items-center justify-start">
                    <span className="mr-2 text-sm">Quantidade:</span>
                    <button>
                      <AiFillMinusCircle />
                    </button>
                    <input
                      className="h-6 w-6 text-center text-sm"
                      type="text"
                      id="quantity"
                      value={item.quantity}
                    />
                    <button>
                      <AiFillPlusCircle onClick={() => addToCart(item, 1)} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Cart;
