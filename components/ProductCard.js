import { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '../utils/helpers';
import { useStoreContext } from '../context/NewContext';
const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const ProductCard = ({ product }) => {
  console.log({product});
  const { title, slug, price, product_quantity, product_quantity_value } = product;
  const { url, alternativeText } = product.image.data.attributes;
  console.log({url});
  console.log({alternativeText});
  const { quantity, addToCart, addQuantity, removeQuantity } =
    useStoreContext();
  const categoria = product.categoria.data.attributes.slug;

  console.log({product_quantity});

  return (
    <div className="h-[450px]">
      <Link
        href={`/${categoria}/${slug}`}
        passHref
      >
        <div className="mx-auto w-60 md:w-full">
          <div className="relative h-64 md:h-72">
            <Image
              src={`${BASE_URL}${url}`}
              alt={alternativeText}
              height={1000}
              width={1000}
              priority
              unoptimized={true}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <p className="text-xl text-center font-bold text-gray-900">{title}</p>
            <p className="text-md text-center text-gray-900">{formatter.format(price)}</p>
            <p className="text-md text-center text-gray-900">{product_quantity}</p> x
            <span className="text-md text-center text-gray-900">{product_quantity_value}</span>
          </div>
          <div>

          </div>
        </div>
      </Link>
      <button
        className="flex flex-col items-center mt-2 w-3/5 mx-auto bg-red p-2 md:px-2 md:py-1 rounded-full font-bold text-white"
        onClick={() => addQuantity}
      >
        Adicionar

      </button>
    </div>
  );
};

export default ProductCard;
