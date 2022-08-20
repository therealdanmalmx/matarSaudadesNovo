import Link from "next/link";
import Image from "next/image";

const CategoryCard = ({ category }) => {
  const { handle, title } = category;
  const { originalSrc } = category.node.images.edges[0].node;
  return (
    <div>
      <h2 className="text-gray-900 mb-12 text-center text-2xl font-extrabold">
        Categorias
      </h2>
      <div className="container mx-auto flex max-w-7xl cursor-pointer justify-between">
        {collections.map((collection) => (
          // <CategoryCard key={category.node.id} product={category}/>
          <Link
            href={`/categories/${handle}`}
            key={collection.node.id}
            passHref
          >
            <ul>
              <Image
                src={originalSrc}
                alt={title}
                objectFit="cover"
                priority
                height="150px"
                width="150px"
                className="ml-2 rounded-full"
              />
              <li className="text-gray-900 text-center text-lg font-bold">
                {title}
              </li>
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
