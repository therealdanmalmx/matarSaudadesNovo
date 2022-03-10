import Link from 'next/link'
import Categorias from '../components/Categorias'
import Banners from '../components/Banners'
import { getCollections } from './../lib/Shopify';
import useTranslation from 'next-translate/useTranslation'


function Home({ collections }) {

  let { t } = useTranslation();

  return (
    <div className="text-center justify-start items-start">
      <Categorias collections={collections}/>
      <Banners />
    </div>
  )
}

export const getStaticProps = async () => {
  const collections = await getCollections()

  return {
    props: { collections }, // will be passed to the page component as props
  }
}

export default Home
