import Link from 'next/link';
import Image from 'next/image';
import {formatter} from '../utils/helpers'

const ProductCard = ({ product }) => {
    const {handle, title} = product.node;
    const {altText, originalSrc} = product.node.images.edges[0].node;
    const price = product.node.priceRange.minVariantPrice.amount;
  return (

    <Link href={`/produtos/${handle}`} passHref>
    <a className="group">
        <div className="w-full bg-gray-500 rounded-3xl overflow-hidden">
            <div className="relative group-hover:opacity-75 h-80">
                <Image 
                    src={originalSrc} 
                    alt={altText} 
                    layout='fill'
                    objectFit='cover'
                    priority
                />
            </div>
        </div>
        <div className="flex justify-around items-center">
            <p className="mr-2 text-lg font-medium text-gray-900">{title}</p>
            <p className="text-base tex-gray-700">{formatter.format(price)}</p>
        </div>
    </a>
    </Link>
  );
};

export default ProductCard;