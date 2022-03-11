import Image from 'next/Image'
import Logo from '../assets/img/logo.jpg'
import {
  MailIcon,
  PhoneIcon
} from "@heroicons/react/outline";

export default function Footer() {
  return (
    <footer className="text-left bg-white text-gray-600 lg:text-left">
      <div className="px-10 lg:px-0 mx-auto my-11 lg:max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="footer-col-contacts">
            <h6 className="uppercase font-bold mb-4 flex items-center text-xl md:text-lg justify-start">Contactos</h6>
            <div className="flex flex-col">
              <div className="info-mail flex mb-2">
                <MailIcon className="h-6 w-6 mr-2" /> <p>geral@matarsaudades.com</p>
              </div>
              <div className="info-phone flex">
                <PhoneIcon className="h-6 w-6 mr-2" /> <p>+351 234 010 204</p> 
                </div>   
            </div>
          </div>

          <div className="footer-col-logo flex items-center justify-center align-middle">
            <h6 className="uppercase font-bold text-6xl mb-4">
              <Image
                  src={Logo}
                  alt="Matar Saudades"
                  width={187}
                  height={63}
              />
            </h6>
          </div>

          <div className="footer-col-newsletter">
            <h6 className="uppercase font-bold mb-4 flex items-center text-xl md:text-lg justify-start">Newsletter</h6>
            <form action="#" className="mt-2">
                <div className="flex items-center">
                    <input type="email" className="w-full px-2 py-3 mr-2  bg-gray-100 shadow-inner border border-gray-400 focus:outline-none" required />
                    <button class="btn btn-red">
                        Enviar
                    </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
