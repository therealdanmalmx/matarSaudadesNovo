import ProductCard from "../components/ProductCard";

function RecommendedList({ products, current }) {
  const productsList = products.collections.edges[0].node.products.edges;
  return (
    <div className="bg-white md:mt-40">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-8">
        <h2 className="mb-6 text-center text-2xl font-extrabold text-gray-900">
          Produtos Recomendados
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
          {productsList.map((product) =>
            product.node.id === current ? null : (
              <ProductCard
                key={product.node.id}
                product={product}
                category={product.node}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default RecommendedList;
