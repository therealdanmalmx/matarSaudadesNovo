import React from 'react'

const Newsletter = () => {
  return (
    <div className="bg-[#f6f6f6] text-gray-600">
      <div className="mx-auto px-10 lg:max-w-screen-xl">
            <div className="newsletter flex flex-col items-center justify-center py-20">
                <h6 className="text-xl text-grey font-bold uppercase md:text-bas pb-3">
                  Newsletter
                </h6>
                <p className="text-base mb-5 text-grey lg:w-1/4">Subscreva a newsletter e ganhe acesso a promoções exclusivas</p>
                <form action="#" className="app__contact-form flex w-full items-center justify-center">
                    <input type="email" placeholder="E-mail" className="w-full lg:w-[40%] px-2 py-3 mr-2  bg-gray-100 shadow-inner focus:outline-none" required />
                    <button class="btn btn-red">
                        Enviar
                    </button>
                </form>
                <p className="text-sm mt-5 text-grey-50">Ao subscrever a newsletter concorda com a informação contida na <span className="underline">Política de Privacidade</span></p>
            </div>
      </div>
    </div>
  )
}

export default Newsletter