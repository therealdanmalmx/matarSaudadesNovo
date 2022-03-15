import Link from 'next/link'

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center hero-bg px-10 py-10 mx-auto text-center md:py-36 lg:max-w-full lg:h-screen">
            <h1 className="font-extrabold mb-6 text-white text-4xl md:text-4xl lg:text-5xl">
                Lorem ipsum dolor sit amet
            </h1>
            <p className="font-normal text-white text-base md:text-3xl lg:text-2xl">
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.
            </p>
            <div className="mt-4 text-center">
                <button className="btn btn-red">Saber Mais</button>
          </div>
    </div>
  )
}
