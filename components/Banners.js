import Image from "../assets/img/banner-01.jpg"

export default function Banners() {
  return (
    <section className="lg:max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="bg-cover bg-gray-600 bg-no-repeat bg-center pt-16 pb-60 px-10" style={{ backgroundImage:`url(${Image})` }}>
                <p className="text-left text-white uppercase font-normal mb-2 text-xl">Alimentos que você pode gostar</p>
                <p className="text-left text-white font-bold mb-2 text-4xl">Escolha Alimentos Variados<br/>
                da nossa Mercearia</p>
                <div className="text-left mt-4">
                    <a href="" className="underline text-white text-2xl">Ler mais</a>
                </div>
            </div>
            <div className="bg-cover bg-gray-600 bg-no-repeat bg-center pt-16 pb-60 px-10" style={{ backgroundImage:`url(${Image})` }}>
                <p className="text-left text-white uppercase font-normal mb-2 text-xl">Vinhos que você pode gostar</p>
                <p className="text-left text-white font-bold mb-2 text-4xl">A melhor adega de Vinhos<br/>
                Portugueses</p>
                <div className="text-left mt-4">
                    <a href="" className="underline text-white text-2xl">Ler mais</a>
                </div>
            </div>
        </div>
    </section>
  )
}