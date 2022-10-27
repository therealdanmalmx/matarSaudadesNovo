import Link from "next/link";
import { HiOutlineHeart } from "react-icons/hi";
import { images } from "../../utils";

const myAccount = () => {
  return (
    <>
      <div className="app__account mx-auto justify-items-start py-14 px-8 lg:max-w-screen-xl">
        <div className="flex flex-col lg:flex-row ">
          <div className="mb-10 flex flex-col lg:w-2/4 lg:p-10">
            <form
              action="#"
              className="app__contact-form flex w-full flex-col items-start justify-center"
            >
              <label className="mb-3">Nome de utilizador ou email *</label>
              <input
                type="name"
                placeholder="Nome"
                className="mr-2 mb-3 w-full bg-gray-100 px-2 py-3 shadow-inner focus:outline-none"
                required
              />
              <label className="mb-3">Password *</label>
              <input
                type="password"
                placeholder="Password"
                className="mr-2 mb-3 w-full bg-gray-100 px-2 py-3 shadow-inner focus:outline-none"
                required
              />
              <button className="btn btn-red w-full">Enviar</button>
            </form>
          </div>
          <div className="flex flex-col items-center lg:w-2/4 lg:p-10">
            <h1 className="mb-5 text-center font-merriweather text-2xl text-black">
              REGISTAR
            </h1>

            <p className="mb-10 text-center text-base lg:mb-5">
              O registo neste site permite que aceda ao estado e o histórico de
              encomendas. Basta preencher os campos abaixo e iremos criar uma
              nova conta para si em breve. Solicitaremos apenas as informações
              necessárias para tornar o processo de compra mais rápido e fácil.
            </p>
            <button className="btn w-full bg-grey-10 text-black md:w-2/4">
              Registar nova conta
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default myAccount;
