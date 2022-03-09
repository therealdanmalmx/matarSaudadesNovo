import Link from 'next/link'
import Categorias from '../components/Categorias'
import { getCollections } from './../lib/Shopify';

function Home({ collections }) {
  return (
    <div>
      {/* <h1 className='text-3xl font-bold mt-4'>O novo <span className='italic'>look</span> da Matar Saudades</h1> */}
      <Categorias  collections={collections}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const collections = await getCollections()
  console.log('collections', collections);
  return {
    props: { collections }, // will be passed to the page component as props
  }
}

export default Home
