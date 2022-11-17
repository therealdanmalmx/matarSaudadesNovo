import Link from "next/link";
import Image from "next/image";

const CategoryCard = ({ category }) => {
  const { handle, title } = category;
  const { url } = category.node.images.edges[0].node;
  return (
    <div>
      <h2 className="mb-12 text-center text-2xl font-extrabold text-gray-900">
        Categorias
      </h2>
      <div className="container mx-auto flex max-w-7xl cursor-pointer justify-between">
        {collections.map((collection) => (
          // <CategoryCard key={category.node.id} product={category}/>
          <Link
            legacyBehavior
            href={`/categories/${handle}`}
            key={collection.node.id}
            passHref
          >
            <ul>
              <Image
                src={url}
                alt={title}
                objectFit="cover"
                priority
                height="150px"
                width="150px"
                className="ml-2 rounded-full"
              />
              <li className="text-center text-lg font-bold text-gray-900">
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
