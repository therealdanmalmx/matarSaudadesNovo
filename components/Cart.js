import Image from "next/image";
import { useStoreContext } from "../context/NewContext";

function Cart() {
  const { cartItems, setShowCart, addToCart } = useStoreContext();
  return (
    <div>
      <div>
        <div>
          <h1>Não existem produtos na cesta</h1>
        </div>
        <div>
          <Image src="" alt="" />
          <div>
            <h3>Title</h3>
            <h3>Price</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
