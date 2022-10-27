import Link from 'next/link';
import { HiOutlineHeart } from "react-icons/hi";
import { images } from "../../utils";

const myAccount = () => {
  return (
    <>
      <div className="app__account mx-auto lg:max-w-screen-xl justify-items-start py-14 px-8">
          <div className="flex flex-col lg:flex-row ">
            <div className="flex flex-col mb-10 lg:w-2/4 lg:p-10">
                <form
                action="#"
                className="app__contact-form flex flex-col w-full items-start justify-center"
                >
                <label className="mb-3">Nome de utilizador ou email *</label>
                <input
                    type="name"
                    placeholder="Nome"
                    className="bg-gray-100 mr-2 mb-3 w-full px-2 py-3 shadow-inner focus:outline-none"
                    required
                    />
                <label className="mb-3">Password *</label>
                <input
                    type="password"
                    placeholder="Password"
                    className="bg-gray-100 mr-2 mb-3 w-full px-2 py-3 shadow-inner focus:outline-none"
                    required
                    />
                    <button className="btn btn-red w-full">Enviar</button>
                </form>
            </div>
            <div className="flex flex-col items-center lg:w-2/4 lg:p-10">
                <h1 className="mb-5 font-merriweather text-2xl text-center text-black">
                REGISTAR
                </h1>

                <p className="text-base mb-10 lg:mb-5 text-center">
                O registo neste site permite que aceda ao estado e o histórico de encomendas. Basta preencher os campos abaixo e iremos criar uma nova conta para si em breve. Solicitaremos apenas as informações necessárias para tornar o processo de compra mais rápido e fácil.
                </p>
                <button className="btn bg-grey-10 text-black w-2/4">Registar nova conta</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default myAccount