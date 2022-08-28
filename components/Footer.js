import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/img/logo.jpg";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const company = [
  { title: "História da Marca", url: "" },
  { title: "Política de Privacidade", url: "" },
  { title: "Termos e Condições", url: "" },
];

const help = [
  { title: "Perguntas Frequentes", url: "" },
  { title: "Despesas de Envio", url: "" },
  { title: "Trocas e Devoluções", url: "" },
  { title: "Livro de Reclamações ", url: "" },
];

export default function Footer() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const clearModal = setTimeout(() => {
      //setOpenModal(true);
    }, 3000);

    return () => clearTimeout(clearModal);
  }, []);

  return (
    <footer className="solid border-t-[1px] border-grey-10 bg-white text-left text-gray-600 lg:text-left">
      <div className="mx-auto my-11 px-10 lg:max-w-screen-xl lg:px-0">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="footer-col-company">
            <h6 className="mb-4 flex items-center justify-start text-xl font-bold uppercase text-grey md:text-base">
              Matar Saudades
            </h6>
            <ul>
              {company.map((item, index) => (
                <li className="pb-3" key={item.title + index}>
                  <Link href={item.url}>
                    <a className="cursor-pointer text-base font-normal hover:text-red">
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col-help">
            <h6 className="mb-4 flex items-center justify-start text-xl font-bold uppercase text-grey md:text-base">
              Ajuda
            </h6>
            <ul>
              {help.map((item, index) => (
                <li className="pb-3" key={item.title + index}>
                  <Link href={item.url}>
                    <a className="cursor-pointer text-base font-normal hover:text-red">
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col-contacts">
            <h6 className="mb-4 flex items-center justify-start text-xl font-bold uppercase text-grey md:text-base">
              Fale Connosco
            </h6>
            <div className="flex flex-col">
              <div className="info-mail mb-2 flex">
                <MailIcon className="mr-2 h-6 w-6" />{" "}
                <p className="md:text-base">geral@matarsaudades.com</p>
              </div>
              <div className="info-phone flex">
                <PhoneIcon className="mr-2 h-6 w-6" />{" "}
                <p className="md:text-base">+351 234 010 204</p>
              </div>
            </div>
          </div>

          <div className="footer-col-social">
            <h6 className="mb-4 flex items-center justify-start text-xl font-bold uppercase text-grey md:text-base">
              Redes Sociais
            </h6>
            <div className="flex">
              <div className="group">
                <a
                  href=""
                  className="mr-4 flex cursor-pointer items-center justify-center rounded-full bg-white duration-300 ease-in-out"
                >
                  <FaInstagram className="h-7 w-7 text-grey group-hover:text-red" />
                </a>
              </div>
              <div className="group">
                <a
                  href=""
                  className="mr-4 flex cursor-pointer items-center justify-center rounded-full bg-white duration-300 ease-in-out"
                >
                  <FaTwitter className="h-7 w-7 text-grey group-hover:text-red" />
                </a>
              </div>
              <div className="group">
                <a
                  href=""
                  className="mr-4 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white duration-300 ease-in-out"
                >
                  <FaLinkedinIn className="h-7 w-7 text-grey group-hover:text-red" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="solid border-t-[1px] border-grey-10 py-5 text-center">
        <p className="px-10 text-base">
          ©{new Date().getFullYear()} Todos os direitos reservados. Matar
          Saudades made by{" "}
          <Link href="http://www.miseendigital.com" noopen blank passHref>
            <a
              className="blank cursor-pointer text-slate-400"
              target="_blank"
              noreferrer="true"
              noopener="true"
            >
              mise en digital
            </a>
          </Link>{" "}
        </p>
      </div>
      {openModal ? (
        <Modal
          description="Campanha em vigor com 20% de desconto em todos os produtos na sua Loja Online"
          onClose={() => setOpenModal(false)}
        />
      ) : null}
    </footer>
  );
}
