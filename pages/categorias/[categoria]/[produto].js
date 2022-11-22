// import { getAllProducts, getProduct } from "../../../lib/Shopify";
import ProductPageContent from "../../../components/ProductPageContent";

// export default function ProductPage({ produto }) {
//   return (
//     <div className="min-h-screen py-12 sm:pt-20">
//       <ProductPageContent produto={produto} />
//     </div>
//   );
// }

// export async function getStaticPaths() {
//   const products = await getAllProducts();

//   const paths = products.map((item) => {
//     const produto = item.node.handle.toString();
//     const category = item.node.collections.edges[0].node.handle.toString();
//     // item.node.collections.edges.map((item) => {
//     //   item.node.handle.toString();
//     // });

//     return {
//       params: {
//         produto,
//         categoria: category.toString(),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const produto = await getProduct(params.produto);

//   return {
//     props: {
//       produto,
//     },
//   };
// }

import { useQuery } from "urql";
import { getProductOne } from "../../../lib/query";
import { useRouter } from "next/router";

function ProductDetails() {
  const { query } = useRouter();
  const [results] = useQuery({
    query: getProductOne,
    variables: { slug: query.produto },
  });
  const { data, fetching, error } = results;

  if (fetching) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log({ data });

  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductPageContent produto={data.produtos.data[0].attributes} />
    </div>
  );
}

export default ProductDetails;
