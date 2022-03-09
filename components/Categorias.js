import Image from 'next/image';
import Link from 'next/link';

function Categories({ collections }) {
  
  console.log('collections', collections);;
  return (

    <div>
			<h2 className="text-2xl text-center font-extrabold text-gray-900 mb-12">Categorias</h2>
        <div className="container max-w-7xl mx-auto flex justify-between cursor-pointer">
          {collections.map((collection) => (
            <Link 
              href={`/categorias/${collection.node.handle}`} 
              passHref 
              key={collection.node.id}
            >
              <ul>
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
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Categories
