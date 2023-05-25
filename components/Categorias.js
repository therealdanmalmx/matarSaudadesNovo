import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { useQuery } from 'urql';
import { getCategories } from '../lib/query';

const findCategories = async () => {
  const res = await fetch('http://localhost:1337/api/categorias');
  const data = await res.json();
};

const Categories = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

  const [results] = useQuery({ query: getCategories });
  const { data, fetching, error } = results;
  let { t } = useTranslation('common');

  if (fetching) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const categorias = data.categorias.data;

  return (
    <section className="categories bg-grey-light lg:py-36 pt-10">
      <p className="text-grey-50 mb-2 font-sans text-xl font-normal text-center">
        Descubra as últimas novidades
      </p>
      <h2 className="text-red mb-12 text-5xl font-bold text-center">
        {t('categories.category')}
      </h2>
      <div className="remove-scrollbar mx-0.5 flex justify-between space-x-2.5 overflow-x-scroll md:mx-auto md:max-w-7xl md:space-x-5">
        {categorias.map((category) => {
          const { url, alt } = category.attributes.image.data.attributes;
          const { id } = category;
          return (
            <Link href={`/${category.attributes.slug}`} passHref key={id}>
              <ul className="md:h-full w-36 md:w-full h-56 cursor-pointer">
                <img
                  src={`${BASE_URL}${url}`}
                  alt={`Imagem de ${category.attributes.slug}`}
                  height={1000}
                  width={1000}
                  className="h-36 w-36 rounded-full object-cover"
                  priority="true"
                />
                <li className="text-grey-75 md:text-lg w-full mt-3 text-base text-center">
                  {t(category.attributes.title)}
                </li>
              </ul>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
