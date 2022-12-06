import { formatter } from "../utils/helpers";
import useTranslation from "next-translate/useTranslation";
import { useStoreContext } from "../context/NewContext";

export default function ProductForm({ produto }) {
  const { quantity, addQuantity, removeQuantity, addToCart } =
    useStoreContext();

  const products = produto.map((product) => {
    console.log({ product });
    return {
      image: product.attributes.image.data.url,
      id: product.id,
      quantity: 1,
      price: product.attributes.price,
    };
  });

  const { title, description, price } = produto[0].attributes;
  let { t } = useTranslation("common");

  console.log("produto[0]", produto[0].attributes);

  return (
    <div className="flex h-full flex-col justify-between">
      <p className=" font-merriweather text-2xl font-bold md:text-left md:text-[1.625rem]">
        {title}
      </p>
      <span className="font-merriweather text-xl leading-10">
        {formatter.format(price)}
      </span>
      <p className="font-noto-sans mt-2 leading-6 md:mt-4">{description}</p>
      <div className="mt-6 flex items-center justify-center">
        <button
          onClick={() => {
            addToCart(produto[0].attributes, quantity);
          }}
          className="font-inter bg-red px-2 py-4 font-bold text-white duration-300 ease-in-out hover:border-2 md:h-12 md:w-28 md:px-3 md:py-2 md:hover:bg-white md:hover:text-red"
        >
          {t("product.add")}
        </button>
        <div className="flex-rows ml-8 flex w-20 justify-between">
          <button
            className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 p-2"
            onClick={removeQuantity}
          >
            -
          </button>
          <input
            className="h-6 w-6 rounded-full border text-center"
            type="text"
            id="quantity"
            value={quantity}
          />
          <button
            className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 p-2"
            onClick={addQuantity}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
