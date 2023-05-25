import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '../utils/helpers';
import { useStoreContext } from '../context/NewContext';
const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const ProductCard = ({ product }) => {
  console.log({product});
  const { title, slug, price, product_quantity, product_quantity_size, product_quantity_measure } = product;
  const { url } = product.image.data.attributes;
  console.log({url});
  const { quantity, addToCart } =
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
              alt={`Imagem de ${slug}`}
              height={1000}
              width={1000}
              priority="true"
              unoptimized={true}
            />
          </div>
        </div>
        <p className="text-xl text-center font-bold text-gray-900">{title}</p>
        <div className="flex flex-row mx-auto text-center items-center justify-between w-1/2 mt-2">
            {product_quantity && (
              <span className="flex flex-row mx-auto items-center justify-between text-md text-center text-gray-900">{formatter.format(price)}</span>
              )}
            {!product_quantity && (
              <span className="flex flex-row mx-auto items-center justify-center text-md text-center text-gray-900">{formatter.format(price)}</span>
            )}
          {product_quantity && (
            <div>
              <span className="text-md text-center text-gray-900">
                ({product_quantity} x {product_quantity_size} {product_quantity_measure})
              </span>
            </div>
          )}

        </div>
      </Link>
      <button
        className="flex flex-col items-center mt-4 w-3/5 mx-auto bg-red p-2 md:px-2 md:py-1 rounded-full font-bold text-white"
        onClick={() => {
          addToCart(product, quantity);
        }}
      >
        Adicionar

      </button>
    </div>
  );
};

export default ProductCard;
