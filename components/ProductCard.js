import { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '../utils/helpers';
import { useStoreContext } from '../context/NewContext';
const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const ProductCard = ({ product }) => {
  const { title, slug, price } = product;
  const { url, alternativeText } = product.image.data.attributes;
  const { quantity, addToCart, addQuantity, removeQuantity } =
    useStoreContext();
  const categoria = product.categoria.data.attributes.slug;

  return (
    <div className="h-[450px]">
      <Link legacyBehavior href={`/${categoria}/${slug}`} passHref>
        <a>
          <div className="md:w-full mx-auto">
            <div className="relative pb-4">
              <img
                src={`${BASE_URL}${url}`}
                alt={alternativeText}
                height={1000}
                width={1000}
                priority
                unoptimized={false}
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-gray-900">{title}</p>
            <p className="text-md text-gray-900">{formatter.format(price)}</p>
            <button
              className="bg-red w-2/5 py-2 mt-4 font-bold text-center text-white"
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
