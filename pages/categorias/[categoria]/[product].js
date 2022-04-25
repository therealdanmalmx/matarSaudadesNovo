import ProductPageContent from '../../../components/ProductPageContent'
import { getAllProducts, getProduct } from '../../../lib/Shopify'


export default function ProductPage({ product }) {
console.log(product)
  return (
    <div>
      <ProductPageContent product={product} />
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map(item => {
    const product = item.node.handle.toString()

    return {
      params: { 
        product,
        categoria: "bebidas"
      }
    }
  })

  console.log(paths)

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);

  return {
    props: {
      product,
    }
  }
}