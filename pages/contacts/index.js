import React from 'react'
import { HiOutlineMail, HiOutlinePhone, HiOutlineCalendar } from "react-icons/hi";

const about = () => {
  return (
    <div className="app__about w-full px-5 text-center py-20 flex flex-col items-center justify-center">
        <div className="border-b-[1px] border-solid border-grey-25 pb-20 mb-14 md:w-2/4">
            <h1 className="font-merriweather text-grey font-bold text-4xl mb-5 leading-10">
                Entre em Contacto Connosco
            </h1>
            <p>
                Lorem ipsum dolor sit amet, nec ea alii verterem nominati, quo admodum deterruisset ea. 
                Falli causae adipiscing usu ad.
            </p>
        </div>
        <div className="flex flex-col w-full md:flex-row md:justify-center">
          <div className="flex flex-col items-center justify-center px-24 mb-10 md:mb-0">
            <HiOutlineMail className="w-14 h-14 text-grey mb-2" />
            <h1 className="font-normal">geral@matarsaudades.com</h1>
          </div>

          <div className="flex flex-col items-center justify-center px-24 mb-10 md:mb-0">
            <HiOutlinePhone className="w-14 h-14 text-grey mb-2" />
            <h1 className="font-normal">+351 239 319 604</h1>
          </div>

          <div className="flex flex-col items-center justify-center px-24">
            <HiOutlineCalendar className="w-14 h-14 text-grey mb-2" />
            <h1 className="font-normal">
              Horário Apoio ao Cliente: <br/>
              Segunda a Sexta-feira das 9h às 18h.
            </h1>
          </div>

        </div>
    </div>
  )
}

export default about