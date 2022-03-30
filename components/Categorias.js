import Image from "next/image";
import Link from "next/link";
import React from "react";
import useTranslation from "next-translate/useTranslation";

function Categories({ collections }) {
  let { t } = useTranslation("common");

  return (
    <section className="categories bg-grey-light pt-10  lg:py-36">
      <p className="mb-2 text-center text-xl font-normal text-grey-50 font-sans">
        Descubra as últimas novidades
      </p>
      <h2 className="mb-12 text-center text-5xl font-bold text-red">
        {t("categories.category")}
      </h2>
      <div className="remove-scrollbar container mx-2.5 flex max-w-3xl cursor-pointer justify-between space-x-2.5 overflow-x-scroll md:mx-2.5 lg:mx-auto lg:max-w-7xl lg:space-x-5 xl:mx-auto 2xl:mx-auto">
        {collections.map((collection) => (
          <Link
            href={`/categorias/${t(collection.node.handle)}`}
            passHref
            key={collection.node.id}
          >
            <ul className="mb-5">
              <Image
                src={collection.node.image.originalSrc}
                alt={collection.node.title}
                objectFit="cover"
                layout="fixed"
                priority
                height="150px"
                width="150px"
                className="rounded-full border-2 border-solid border-slate-600"
              />
              <li className="text-center text-xl mt-3 font-normal text-grey-75">
                {t(collection.node.title)}
              </li>
            </ul>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;
