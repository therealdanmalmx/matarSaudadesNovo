import { getProductsInCollections } from "../lib/Shopify";
import ProductCard from "../components/ProductCard";

function RecommendedList({ products }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-8">
        <h2 className="mb-6 text-center text-2xl font-extrabold text-gray-900">
          Produtos Recomendados
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const products = await getProductsInCollections();
  return {
    props: { products }, // will be passed to the page component as props
  };
};

export default RecommendedList;
