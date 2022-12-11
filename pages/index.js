import SlideShow from "../components/SliderShow";
import Categorias from "../components/Categorias";
import Banners from "../components/Banners";
import About from "../components/About";
import Newsletter from "../components/Newsletter";
import { getCategories } from "../lib/query";
import useTranslation from "next-translate/useTranslation";
import slides from "../utils/slides";
import { useQuery } from "urql";

function Home() {
  let { t } = useTranslation();
  const [results] = useQuery({ query: getCategories });

  const { data, fetching, error } = results;

  if (fetching) {
    return (
      <p className="text-center">
        <i className="fa fa-fas fa-circle-notch fa-spin"></i>
      </p>
    );
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log({ data });

  const categories = data.categorias.data;

  return (
    <div className="items-start justify-start text-center">
      <SlideShow slides={slides} />
      <Categorias collections={categories} />
      <Banners />
      <About />
      <Newsletter />
    </div>
  );
}

export default Home;
