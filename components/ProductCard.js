import Link from "next/link";
import Image from "next/image";
import { formatter } from "../utils/helpers";

const ProductCard = ({ product, category }) => {
  const { title, handle } = product;
  const { altText, originalSrc } = product.images.edges[0].node;
  const price = product.priceRange.minVariantPrice.amount;

  return (
    <Link href={`/categorias/${category}/${handle}`} passHref>
      <a className="group">
        <div className="w-11/12">
          <div className="relative h-72 group-hover:opacity-75">
            <Image
              src={originalSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
        <div className="flex w-11/12 items-center justify-around">
          <p className="text-gray-900 mr-2 text-lg font-medium">{title}</p>
          <p className="tex-gray-700 text-base">{formatter.format(price)}</p>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
