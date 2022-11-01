import React from "react";

function Register() {
  return (
    <div className="flex flex-col items-center lg:w-2/4 lg:p-10">
      <h1 className="mb-5 text-center font-merriweather text-2xl text-black">
        REGISTAR
      </h1>

      <p className="mb-10 text-center text-base lg:mb-5">
        O registo neste site permite que aceda ao estado e o histórico de
        encomendas. Basta preencher os campos abaixo e iremos criar uma nova
        conta para si em breve. Solicitaremos apenas as informações necessárias
        para tornar o processo de compra mais rápido e fácil.
      </p>
      <button className="btn w-full bg-grey-10 text-black md:w-2/4">
        Registar nova conta
      </button>
    </div>
  );
}

export default Register;
