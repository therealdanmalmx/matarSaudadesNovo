import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import { useQuery } from "urql";
import { getCategories } from "../lib/query";

const Categories = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:1337";

  const [results] = useQuery({ query: getCategories });
  const { data, fetching, error } = results;
  let { t } = useTranslation("common");

  if (fetching) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const categorias = data.categorias.data;

  return (
    <section className="categories bg-grey-light pt-10 lg:py-36">
      <p className="font-sans mb-2 text-center text-xl font-normal text-grey-50">
        Descubra as últimas novidades
      </p>
      <h2 className="mb-12 text-center text-5xl font-bold text-red">
        {t("categories.category")}
      </h2>
      <div className="remove-scrollbar mx-0.5 flex justify-between space-x-2.5 overflow-x-scroll md:mx-auto md:max-w-7xl md:space-x-5">
        {categorias.map((category) => {
          const image = category.attributes.image.data.attributes;
          const { id } = category;
          return (
            <Link href={`/${category.attributes.slug}`} passHref key={id}>
              <ul className="d:h-full h-56 w-36 cursor-pointer md:w-full">
                <Image
                  src={`${BASE_URL}${image.url}`}
                  alt={`Imagem de ${category.attributes.slug}`}
                  height={300}
                  width={200}
                  className="h-36 w-36 rounded-full"
                />
                <li className="mt-3 w-full text-center text-base text-grey-75 md:text-lg">
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
