import { getProductsInCollections, getCollections} from '../lib/Shopify';
import ProductCard from '../components/ProductCard';

function Produtos ({ products }){

return <div className="bg-white">
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-8">
      <h2 className="text-2xl text-center font-extrabold text-gray-900 mb-6">
          Produtos
      </h2>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            console.log('product', product),
            <ProductCard key={product.node.id} product={product} /> 
            ))}
      </div>
    </div>
  </div>;
};

export const getStaticProps = async ({ params }) => {
    const products = await getProductsInCollections(params.categoria)
    return {
      props: { products }, // will be passed to the page component as props
    }
  }
  
  export const getStaticPaths = async () => {
    const categorias = await getCollections();

    const paths = categorias.map(categoria => {

        return {
            params: { 
                categoria: categoria.node.handle
            }
        }
    })

    return {
        paths,
        fallback: false,
    }
}


export default Produtos;
