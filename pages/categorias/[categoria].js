import { getProductsInCollections, getCollections} from '../../lib/Shopify';
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '../../components/ProductCard';


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

export const getStaticProps = async ({ params }) => {
    const categoria = await getProductsInCollections(params.categoria);
    console.log('categoria', categoria);
    
    return {
        props: {
            categoria
        }
    }

}

const Categoria = ({ categoria }) => {

    console.log('categoria', categoria);
    console.log('products', categoria.products.edges);
    
    const products = categoria.products.edges;
    
    return (
        <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-8">
            <div className="text-2xl text-center font-extrabold text-gray-900 mb-12">{categoria.title}</div>
            {products.map((product) => {
                const prod = product.node
                const { altText, originalSrc } = prod.images.edges[0].node;
                
                console.log('prod', prod)
                console.log('originalSrc', originalSrc);
                console.log('altText', altText);
                
                return (
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
                        <ProductCard key={product.node.id} product={product.node}/> 
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Categoria