import Image from "next/image";
import Link from "next/link";
import React from "react";
import useTranslation from "next-translate/useTranslation";

function Categories({ collections }) {
  let { t } = useTranslation("common");

  return (
    <div>
      <h2 className="mb-12 text-center text-2xl font-extrabold text-gray-900">
        {t("categories.category")}
      </h2>
      <div className="remove-scrollbar mx-2.5 flex max-w-full cursor-pointer justify-between space-x-2 overflow-x-scroll lg:mx-auto lg:max-w-7xl">
        {collections.map((collection) => (
          <Link
            href={`/categorias/${t(collection.node.handle)}`}
            passHref
            key={collection.node.id}
          >
            <ul>
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
              <li className="text-center text-lg font-bold text-gray-900">
                {t(collection.node.title)}
              </li>
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
