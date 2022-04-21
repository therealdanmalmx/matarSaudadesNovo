import {
  getProductsInCollections,
  getCollections,
  getAllProducts,
  getProduct,
} from "../../../lib/Shopify";
import ProductPageContent from "../../../components/ProductPageContent";

export default function ProductPage({ product }) {
  return (
    <div>
      <ProductPageContent product={product} />
    </div>
  );
}

export const getStaticPaths = async () => {
  const products = await getAllProducts();

  const paths = products.map((product) => {
    return {
      params: [
        {
          product: product.node.handle,
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
  const product = await getProduct(params.product);

  return {
    props: {
      product,
    },
  };
};
