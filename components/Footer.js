import Image from "next/image";
import Logo from "../assets/img/logo.jpg";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

export default function Footer() {
  return (
    <footer className="bg-white text-left text-gray-600 lg:text-left">
      <div className="mx-auto my-11 px-10 lg:max-w-screen-xl lg:px-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="footer-col-contacts">
            <h6 className="mb-4 flex items-center justify-start text-xl font-bold uppercase md:text-lg">
              Contactos
            </h6>
            <div className="flex flex-col">
              <div className="info-mail mb-2 flex">
                <MailIcon className="mr-2 h-6 w-6" />{" "}
                <p>geral@matarsaudades.com</p>
              </div>
              <div className="info-phone flex">
                <PhoneIcon className="mr-2 h-6 w-6" /> <p>+351 234 010 204</p>
              </div>
            </div>
          </div>

          <div className="footer-col-logo flex items-center justify-center align-middle">
            <h6 className="mb-4 text-6xl font-bold uppercase">
              <Image src={Logo} alt="Matar Saudades" width={187} height={63} />
            </h6>
          </div>

          <div className="footer-col-newsletter">
            <h6 className="mb-4 flex items-center justify-start text-xl font-bold uppercase md:text-lg">
              Newsletter
            </h6>
            <form action="#" className="mt-2">
              <div className="flex items-center">
                <input
                  type="email"
                  className="mr-2 w-full border border-gray-400  bg-gray-100 px-2 py-3 shadow-inner focus:outline-none"
                  required
                />
                <button className="btn btn-red">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
