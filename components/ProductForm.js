export default function ProductForm({ produto }) {
  console.log({ produto });
  const { title, description } = produto;

  return (
    <div className="flex flex-col justify-between">
      <p>{description}</p>
      <button className="btn mt-4 bg-success text-white duration-300 ease-in-out hover:bg-success-hover">
        Adicionar
      </button>
    </div>
  );
}
