import { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatter } from "../utils/helpers";
import { useStoreContext } from "../context/NewContext";
const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const ProductCard = ({ product }) => {
  const { title, slug, price } = product;
  const { url, alternativeText } = product.image.data.attributes;
  console.log({url});
  console.log({alternativeText});
  const { quantity, addToCart, addQuantity, removeQuantity } =
    useStoreContext();
  const categoria = product.categoria.data.attributes.slug;

  return (
    <div className="h-[450px]">
      <Link legacyBehavior href={`/${categoria}/${slug}`} passHref>
        <a>
          <div className="mx-auto w-60 md:w-full">
            <div className="relative h-64 md:h-72">
              <Image
                src={`${BASE_URL}${url}`}
                alt={`Imagem de ${slug}`}
                height={1000}
                width={1000}
                priority
                unoptimized={true}
              />
            </div>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">{title}</p>
            <p className="text-md text-gray-900">{formatter.format(price)}</p>
            <button
              className="mt-4 w-2/5 bg-red py-2 text-center font-bold text-white"
              onClick={() => addQuantity}
            >
              Adicionar
            </button>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
