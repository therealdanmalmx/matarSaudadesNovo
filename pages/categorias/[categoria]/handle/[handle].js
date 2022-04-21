import {
  getProductsInCollections,
  getCollections,
  getAllProducts,
  getProduct,
} from "../../../../lib/Shopify";
import ProductPageContent from "../../../../../components/ProductPageContent";

export default function ProductPage({ product }) {
  return (
    <div>
      <h1>{product}</h1>
      {/* <ProductPageContent product={product} /> */}
    </div>
  );
}

export const getStaticPaths = async () => {
  const products = getProductsInCollections();

  const paths = products.map((product) => {
    return {
      params: [
        {
          // categoria: product.handle,
          product: product.products.node,
        },
      ],
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // const categoria = await getProductsInCollections(params.categoria);
  const product = await getProduct(params.product.handle);

  return {
    props: {
      product,
    },
  };
};
// export const getStaticProps = async ({ params }) => {
//   const categoria = params.categoria;
//   const handle = params.product;

//   const res = await fetch(
//     `https://novomatarsaudades.myshopify.com//api/2021-07/graphql.json/collectionByHandle/${categoria}/${handle}`
//   );
//   // const product = res.json();
//   // const categoria = params.categoria;
//   // const product = params.product;

//   console.log("categoria", categoria);
//   console.log("product", product);

//   return {
//     props: {
//       product,
//     },
//   };
// };
