import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero-bg mx-auto flex flex-col items-center justify-center px-10 py-10 text-center md:py-36 lg:h-screen lg:max-w-full">
      <h1 className="text text-white mb-6 text-4xl font-extrabold md:text-4xl lg:text-5xl">
        Lorem ipsum dolor sit amet
      </h1>
      <p className="text-white text-base font-normal md:text-3xl lg:text-2xl">
        Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no
        suscipit quaerendum.
      </p>
      <div className="mt-4 text-center">
        <button className="btn btn-red">Saber Mais</button>
      </div>
    </div>
  );
}
