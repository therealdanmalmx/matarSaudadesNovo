import React from "react";

const Newsletter = () => {
  return (
    <div className="text-gray-600 bg-[#f6f6f6]">
      <div className="mx-auto px-10 lg:max-w-screen-xl">
        <div className="newsletter flex flex-col items-center justify-center py-20">
          <h6 className="md:text-bas pb-3 text-xl font-bold uppercase text-grey">
            Newsletter
          </h6>
          <p className="mb-5 text-base text-grey lg:w-1/4">
            Subscreva a newsletter e ganhe acesso a promoções exclusivas
          </p>
          <form
            action="#"
            className="app__contact-form flex w-full items-center justify-center"
          >
            <input
              type="email"
              placeholder="E-mail"
              className="bg-gray-100 mr-2 w-full px-2 py-3  shadow-inner focus:outline-none lg:w-[40%]"
              required
            />
            <button className="btn btn-red">Enviar</button>
          </form>
          <p className="mt-5 text-sm text-grey-50">
            Ao subscrever a newsletter concorda com a informação contida na{" "}
            <span className="underline">Política de Privacidade</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
