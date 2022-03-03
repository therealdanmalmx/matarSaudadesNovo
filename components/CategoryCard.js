import Link from 'next/link';
import Image from 'next/image';

const CategoryCard = ({ category }) => {
    const {handle, title} = category;
    const {altText, originalSrc} = category.node.images.edges[0].node;
    console.log('category', category)
  return (

    <Link href={`/categories/${handle}`} passHref>
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
            </div>
        </a>
    </Link>
  );
};

export default CategoryCard;