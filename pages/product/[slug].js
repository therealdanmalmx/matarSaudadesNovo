import { useQuery } from "urql";
import { getProductOne } from "../../lib/query";
import { useRouter } from "next/router";

function ProductDetails() {
  const { query } = useRouter();
  const [results] = useQuery({
    query: getProductOne,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = results;

  if (fetching) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log({ data });

  return <div>Hello</div>;
}

export default ProductDetails;
