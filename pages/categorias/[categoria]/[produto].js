import { getAllProducts, getProduct } from "../../../lib/Shopify";
import ProductPageContent from "../../../components/ProductPageContent";

export default function ProductPage({ produto }) {
  return (
    <div>
      <ProductPageContent produto={produto} />
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((item) => {
    const produto = item.node.handle.toString();
    const categoria = item.node.collections.edges[0].node.handle.toString();

    return {
      params: {
        produto,
        categoria,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const produto = await getProduct(params.produto);

  return {
    props: {
      produto,
    },
  };
}
