import { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatter } from "../utils/helpers";
import { useStoreContext } from "../context/NewContext";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const ProductCard = ({ product }) => {
  const { title, slug, price } = product;
  const { url, alternativeText } = product.image.data.attributes;
  const { quantity, addQuantity, removeQuantity } = useStoreContext();
  const categoria = product.categoria.data.attributes.slug;

  return (
    <div>
      <Link legacyBehavior href={`/${categoria}/${slug}`} passHref>
        <a>
          <div className="mx-auto w-60 md:w-full">
            <div className="relative h-64 group-hover:opacity-75 md:h-72">
              <Image
                src={`${BASE_URL}${url}`}
                alt={alternativeText}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
          <div className="mx-auto mt-8 flex flex-row items-center justify-between">
            <p className="text-lg font-bold text-gray-900">{title}</p>
            <p className="text-md text-gray-900">{formatter.format(price)}</p>
          </div>
          <button
            className="mt-4 w-full bg-red py-2 px-6 text-center font-bold text-white"
            type="submit"
          >
            Adicionar
          </button>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
