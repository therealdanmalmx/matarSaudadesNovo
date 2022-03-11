import Image from "next/image"
import AboutImg from "../assets/img/about-us.jpg"

export default function About() {
  return (
    <section className="about-us px-10 py-24 lg:px-0 lg:py-36 mx-auto lg:max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="mb-12 lg:mb-0">
                <p className="text-left text-gray-400 uppercase font-normal mb-2 text-xl">História, Propósito e visão</p>
                <p className="text-left text-red-600 font-bold mb-2 text-5xl">A nossa Origem <br/>
                e os nossos costumes</p>
                <p className="text-left text-gray-400 font-normal mb-2 text-xl leading-9 max-w-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                    Ultrices montes, pharetra aliquet arcu consectetur nulla non vitae at. 
                    Velit sed vulputate in venenatis neque sed. Eget tempus at tristique mattis. 
                    Cursus lectus ornare at id scelerisque fringilla. 
                    Blandit viverra sit nulla libero accumsan, ultrices urna porttitor faucibus.</p>
                <div className="text-left mt-4">
                    <button className="btn btn-red">
                        Sobre nós
                    </button>
                </div>
            </div>
            <div>
                <Image
                    src={AboutImg}
                    alt="História, Propósito e visão"
                    width={700}
                    height={500}
                />
            </div>
        </div>
    </section>
  )
}
