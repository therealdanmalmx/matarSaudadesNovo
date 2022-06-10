import { formatter } from "../utils/helpers";
import useTranslation from "next-translate/useTranslation";

export default function ProductForm({ produto }) {
  console.log({ produto });
  const { title, description } = produto;
  let { t } = useTranslation("common");

  const hanldeAddProduct = () => {};

  return (
    <div className="flex h-full flex-col justify-between">
      <p className=" font-merriweather text-2xl font-bold md:text-left md:text-[1.625rem]">
        {title}
      </p>
      <span className="font-merriweather text-xl leading-10">
        {formatter.format(produto.priceRange.minVariantPrice.amount)}
      </span>
      <p className="mt-2 font-noto-sans leading-6 md:mt-4">{description}</p>
      <button
        onClick={hanldeAddProduct}
        className="mt-6 bg-red px-2 py-4 font-inter font-bold text-white duration-300 ease-in-out hover:border-2 md:h-12 md:w-28 md:px-3 md:py-2 md:hover:bg-white md:hover:text-red"
      >
        {t("product.add")}
      </button>
    </div>
  );
}
