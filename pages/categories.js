import { getCollections } from './../lib/Shopify';
import Image from 'next/image';

function Categories({ collections }) {

  return (

    <div>
			<h2 className="text-2xl text-center font-extrabold text-gray-900 mb-4">Categorias</h2>
			<div >
				{collections.map((collection) => (
          <ul key={collection.node.id}>
            console.log(collection);
						<li className="text-xl text-center font-extrabold text-gray-900">{collection.node.title}</li>
            <Image 
              src={collection.node.originalSrc} 
              alt={collection.altText} 
              layout='fill'
              objectFit='cover'
              priority
            />
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
