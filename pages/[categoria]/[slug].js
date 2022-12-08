import { useRouter } from "next/router";
import { useQuery } from "urql";
import ProductPageContent from "../../components/ProductPageContent";
import { getOneProduct } from "../../lib/query";

function ProductDetails() {
  const { query } = useRouter();
  const [results] = useQuery({
    query: getOneProduct,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = results;

  if (fetching) {
    return <p className="text-center">Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductPageContent product={data.produtos.data} />
    </div>
  );
}

export default ProductDetails;
