export default function ProductPageContent({ produto }) {
  const { title, description } = produto;

  return (
    <div className="m-4">
      <p className="text-2xl font-bold">{title}</p>
      <p className="mt-2 w-1/4">{description}</p>
    </div>
  );
}
