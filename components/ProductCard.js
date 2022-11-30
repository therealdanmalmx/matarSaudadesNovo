import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatter } from "../utils/helpers";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const ProductCard = ({ product }) => {
  console.log({ product });

  let [count, setCount] = useState(1);
  const { title, slug, price } = product;
  const { url } = product.image.data.attributes;
  const categoria = product.categoria.data.attributes.slug;

  return (
    <div>
      <Link legacyBehavior href={`/${categoria}/${slug}`} passHref>
        <a>
          <div className="mx-auto w-full">
            <div className="relative h-72 group-hover:opacity-75">
              <Image
                src={`${BASE_URL}${url}`}
                alt={`${slug} logo`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
          <p className="mr-2 text-center text-lg font-bold text-gray-900">
            {title}
          </p>
          <p className="text-center text-xl text-gray-900">
            {formatter.format(price)}
          </p>
        </a>
      </Link>
      <div className="mx-auto mt-4 flex flex-row items-center justify-around">
        <div>
          <button
            className="w-fit bg-red py-2 px-6 text-center font-bold text-white"
            type="submit"
          >
            Adicionar
          </button>
        </div>
        <div className="flex w-20 justify-between">
          <button
            className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 p-2"
            onClick={() => setCount(--count)}
          >
            -
          </button>
          <input
            maxLength="2"
            className="h-6 w-6 rounded-full border text-center"
            type="output"
            id="quantity"
            value={count < 1 ? setCount(1) : count > 99 ? setCount(1) : count}
          />
          <button
            className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 p-2"
            onClick={() => setCount(++count)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
