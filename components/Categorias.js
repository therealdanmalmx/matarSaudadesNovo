import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import { useQuery } from "urql";
import { GET_CATEGORIES } from "../lib/query";

const Categories = () => {
  const URL = process.env.BASE_URL;

  const [results] = useQuery({ query: GET_CATEGORIES });
  const { data, fetching, error } = results;
  let { t } = useTranslation("common");

  console.log({ results });

  if (fetching) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const categorias = data.categorias.data;

  return (
    <section className="categories bg-grey-light pt-10  lg:py-36">
      <p className="font-sans mb-2 text-center text-xl font-normal text-grey-50">
        Descubra as últimas novidades
      </p>
      <h2 className="mb-12 text-center text-5xl font-bold text-red">
        {t("categories.category")}
      </h2>
      <div className="remove-scrollbar container mx-2.5 flex max-w-full cursor-pointer justify-between space-x-2.5 overflow-x-scroll md:mx-auto md:max-w-7xl md:space-x-5">
        {categorias.map((category) => {
          const image = category.attributes.image.data.attributes;
          const { id } = category;
          return (
            <Link
              href={`/categorias/${t(category.attributes.slug)}`}
              passHref
              key={id}
            >
              <ul>
                <Image
                  src={`http://localhost:1337${image.url}`}
                  alt={`Imagem de ${category.attributes.slug}`}
                  height={300}
                  width={200}
                  className="relative inline h-36 w-36 rounded-full"
                />
                <li className="mt-3 text-center text-base font-normal text-grey-75 md:text-xl">
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
