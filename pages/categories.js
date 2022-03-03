import { getCollections } from './../lib/Shopify';
import Image from 'next/image';

function Categories({ collections }) {

  return (

    <div>
			<h2 className="text-2xl text-center font-extrabold text-gray-900 mb-6">Categorias</h2>
        <div className="container max-w-7xl mx-auto flex justify-between">
          {collections.map((collection) => (
            // <CategoryCard key={category.node.id} product={category}/>
            <ul key={collection.node.id}>
                <Image 
                  src={collection.node.image.originalSrc} 
                  alt={collection.node.title} 
                  objectFit='cover'
                  priority
                  height='150px'
                  width='150px'
                  className="rounded-full border-solid border-2 border-slate-600 ml-2"
                  />
              <li className="text-lg text-center font-bold text-gray-900">{collection.node.title}</li>
            </ul>
          ))}
        </div>
    </div>
  )
}

export const getStaticProps = async () => {
    const collections = await getCollections()
    return {
      props: { collections }, // will be passed to the page component as props
    }
  }

export default Categories
