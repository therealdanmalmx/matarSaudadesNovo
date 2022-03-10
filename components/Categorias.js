import Image from "next/image";
import Link from "next/link";
import React from "react";
import useTranslation from "next-translate/useTranslation";

function Categories({ collections }) {
  let { t } = useTranslation("common");

  return (
    <div>
      <h2 className="mb-12 text-center text-2xl font-extrabold text-gray-900">
        {t("categories")}
      </h2>
      <div className="mx-auto flex w-11/12 cursor-pointer justify-between overflow-x-scroll">
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
                priority
                height="100%"
                width="100%"
                className="ml-2 rounded-full border-2 border-solid border-slate-600"
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
