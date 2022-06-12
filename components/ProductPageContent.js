import Image from "next/image";
import ProductForm from "./ProductForm";

export default function ProductPageContent({ produto }) {
  console.log({ produto });
  const { title, description } = produto;

  return (
    <div className="lg_space-x-8 mx-auto flex w-11/12 max-w-6xl flex-col items-center justify-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 ">
      <div className="relative h-96 w-full md:w-1/3">
        <Image
          src={produto.images.edges[0].node.originalSrc}
          alt={produto.images.edges[0].node.altText}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="w-full md:w-1/3">
        <ProductForm produto={produto} />
      </div>
    </div>
  );
}
