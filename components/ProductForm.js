import { formatter } from "../utils/helpers";

export default function ProductForm({ produto }) {
  console.log({ produto });
  const { title, description } = produto;

  const hanldeAddProduct = () => {};

  return (
    <div className="flex h-full flex-col justify-between">
      <p className="mb-2 text-2xl font-bold md:text-left">{title}</p>
      <p>{description}</p>
      <span className="flex justify-between pt-6 font-bold">
        Preço por unidade (de 6){" "}
        <span>
          {formatter.format(produto.priceRange.minVariantPrice.amount)}
        </span>
      </span>
      <button
        onClick={hanldeAddProduct}
        className="btn mt-4 bg-success text-white duration-300 ease-in-out hover:bg-success-hover"
      >
        Adicionar
      </button>
    </div>
  );
}
