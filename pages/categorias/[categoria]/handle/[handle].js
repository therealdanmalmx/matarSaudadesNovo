import {
  getProductsInCollections,
  getCollections,
  getAllProducts,
  getProduct,
} from "../../../../lib/Shopify";
import ProductPageContent from "../../../../../components/ProductPageContent";
// import { getAllProducts, getProduct } from "../../../../../lib/Shopify";

export default function ProductPage({ product }) {
  return (
    <div>
      <h1>{product}</h1>
      {/* <ProductPageContent product={product} /> */}
    </div>
  );
}

// export async function getStaticPaths() {
//   const products = await getAllProducts();

//   const paths = products.map((item) => {
//     const product = String(item.node.handle);

//     return {
//       params: { product },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const product = await getProduct(params.product);

//   return {
//     props: {
//       product,
//     },
//   };
// }

export const getStaticPaths = async () => {
  const categorias = getCollections();

  const paths = categorias.map((categoria) => {
    return {
      params: [
        {
          // categoria: categoria.handle,
          handle: categoria.products.edges.node.handle,
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
  const categoria = params.categoria;
  const handle = params.handle;

  const res = await fetch(
    `https://novomatarsaudades.myshopify.com//api/2021-07/graphql.json/categorias/${categoria}/${handle}`
  );
  const product = res.json();
  // const categoria = getProductsInCollections(params.categoria);
  // const product = getProduct(params.handle);
  //
  // console.log("categoria", categoria);
  console.log("product", product);

  return {
    props: {
      product,
    },
  };
};
