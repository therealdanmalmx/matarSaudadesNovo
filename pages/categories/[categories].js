import ProductPageContent from '../../components/ProductPageContent'
import { getCollections, getProduct } from  '../../lib/Shopify'


export default function ProductPage({ product }) {
  return (
        <div>
            <ProductPageContent product={product}/>
        </div>
    );
}

export async function getStaticPaths() {
    const collection = await getCollections();

    const paths = collection.map(item => {
        const product = String(item.node.handle)

        return {
            params: { collection }
        }
    })

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