import Hero from '../components/Hero';
import Categorias from '../components/Categorias';
import Banners from '../components/Banners';
import About from '../components/About';
import Newsletter from '../components/Newsletter';
import { getCategories } from '../lib/query';
import slides from '../utils/slides';
import { useQuery } from 'urql';

function Home() {
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
      <Hero />
      <Categorias collections={categories} />
      <Banners />
      <About />
      <Newsletter />
    </div>
  );
}

export default Home;
