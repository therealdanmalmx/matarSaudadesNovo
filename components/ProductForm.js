import { formatter } from "../utils/helpers";
import useTranslation from "next-translate/useTranslation";
import { CartContext } from "../context/ShopContext";
import { useContext } from "react";

export default function ProductForm({ produto }) {
  const { addToCart } = useContext(CartContext);

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

  return (
    <div className="flex h-full flex-col justify-between">
      <p className=" font-merriweather text-2xl font-bold md:text-left md:text-[1.625rem]">
        {title}
      </p>
      <span className="font-merriweather text-xl leading-10">
        {formatter.format(price)}
      </span>
      <p className="font-noto-sans mt-2 leading-6 md:mt-4">{description}</p>
      <button
        onClick={() => {
          addToCart(products);
        }}
        className="font-inter mt-6 bg-red px-2 py-4 font-bold text-white duration-300 ease-in-out hover:border-2 md:h-12 md:w-28 md:px-3 md:py-2 md:hover:bg-white md:hover:text-red"
      >
        {t("product.add")}
      </button>
    </div>
  );
}
