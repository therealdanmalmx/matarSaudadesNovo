import Link from 'next/link'
import SlideShow from '../components/SliderShow'
import Categorias from '../components/Categorias'
import Banners from '../components/Banners'
import About from '../components/About'
import Newsletter from '../components/Newsletter'
import { getCollections } from './../lib/Shopify';
import useTranslation from 'next-translate/useTranslation';
import slides from "../utils/slides"

function Home({ collections }) {
  let { t } = useTranslation();

  return (
    <div className="text-center justify-start items-start">
      <SlideShow slides={slides} />
      <Categorias collections={collections}/>
      <Banners />
      <About />
      <Newsletter />
    </div>
  );
}

export const getStaticProps = async () => {
  const collections = await getCollections();

  return {
    props: { collections }, // will be passed to the page component as props
  };
};

export default Home;
