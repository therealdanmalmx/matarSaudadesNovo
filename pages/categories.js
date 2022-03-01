import { getCollections } from './../lib/Shopify';
import Image from 'next/image';

function Categories({ collections }) {

  const collection = collections.map((collection) => {
    return collection;
  })

  return (


    <div>
			<h2 className="text-2xl text-center font-extrabold text-gray-900 mb-4">Categorias</h2>
        <div>
          {collections.map((collection) => (
            // <CategoryCard key={category.node.id} product={category}/>
            <ul key={collection.node.id}>
              <li className="text-xl text-center font-extrabold text-gray-900">{collection.node.title}</li>
                <a>
                  <Image 
                    src={collection.node.image.originalSrc} 
                    alt={collection.altText} 
                    objectFit='cover'
                    priority
                    height='125px'
                    width='125px'
                    className="rounded-full border-solid border-2 border-slate-600"
                  />
                </a>
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
