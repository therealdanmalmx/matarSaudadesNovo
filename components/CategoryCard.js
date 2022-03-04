import Link from 'next/link';
import Image from 'next/image';

const CategoryCard = ({ category }) => {
    const {handle, title} = category;
    const {originalSrc} = category.node.images.edges[0].node;
    console.log('category', category)
  return (

    <div>
        <h2 className="text-2xl text-center font-extrabold text-gray-900 mb-12">Categorias</h2>
        <div className="container max-w-7xl mx-auto flex justify-between cursor-pointer">
            {collections.map((collection) => (
                // <CategoryCard key={category.node.id} product={category}/>
                <Link href={`/categories/${handle}`}>
                <ul key={collection.node.id}>
                    <Image 
                        src={originalSrc} 
                        alt={title} 
                        objectFit='cover'
                        priority
                        height='150px'
                        width='150px'
                        className="rounded-full ml-2"
                        />
                    <li className="text-lg text-center font-bold text-gray-900">{title}</li>
                </ul>
                </Link>
            ))}
        </div>
    </div>
  );
};

export default CategoryCard;