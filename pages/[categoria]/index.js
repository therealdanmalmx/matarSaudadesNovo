import { useQuery } from "urql";
import { getAllProducts } from "../../lib/query";
import { useRouter } from "next/router";
import ProductCard from "../../components/ProductCard";

function ProductDetails() {
  const { query } = useRouter();

  const categoria =
    query.categoria.charAt(0).toUpperCase() + query.categoria.slice(1);

  const [results] = useQuery({
    query: getAllProducts,
    variables: { slug: query.categoria },
  });
  const { data, fetching, error } = results;

  if (fetching) {
    return (
      <p className="text-center">
        <i className="fa fa-fas fa-circle-notch fa-spin"></i>
      </p>
    );
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const produtos = data.produtos.data;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-8">
        <div className="mb-12 text-center text-2xl font-extrabold text-gray-900">
          {categoria}
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
          {produtos.map((product) => (
            <div key={product.id}>
              <ProductCard product={product.attributes} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
