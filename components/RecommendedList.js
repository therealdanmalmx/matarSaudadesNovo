import { getProductsInCollections } from "../lib/Shopify";
import ProductCard from "../components/ProductCard";

function RecommendedList({ products, collection, current }) {
  console.log({ products });
  console.log({ collection });
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-8">
        <h2 className="mb-6 text-center text-2xl font-extrabold text-gray-900">
          Produtos Recomendados
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) =>
            product.node.id === current ? null : (
              <ProductCard
                key={product.node.id}
                product={product}
                collection={collection}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default RecommendedList;
