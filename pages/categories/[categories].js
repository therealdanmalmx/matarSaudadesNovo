import { getCollections, getCollection } from  '../../lib/Shopify'


export default function ProductPage({ product }) {
  return (
        <div>
            <ProductPageContent product={product}/>
        </div>
    );
}

export async function getStaticPaths() {
    const collections = await getCollections();

    const paths = collections.map(item => {
        const collection = String(item.node.handle)

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
      const category = await getCollection(params.handle);

      return {
        props: {
            category,
        }
      }
  }