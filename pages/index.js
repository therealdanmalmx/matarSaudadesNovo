import Link from "next/link";
import SlideShow from "../components/SliderShow";
import Categorias from "../components/Categorias";
import Banners from "../components/Banners";
import About from "../components/About";
import Newsletter from "../components/Newsletter";
import { getCollections } from "./../lib/Shopify";
import useTranslation from "next-translate/useTranslation";
import slides from "../utils/slides";
import { useQuery } from "urql";
import { getAllProducts } from "../lib/query";

function Home({ collections }) {
  let { t } = useTranslation();
  const [results] = useQuery({ query: getAllProducts });

  const { data, fetching, error } = results;

  return (
    <div className="items-start justify-start text-center">
      <SlideShow slides={slides} />
      <Categorias collections={collections} />
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
