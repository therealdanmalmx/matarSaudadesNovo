export default function Footer() {
  return (
    <footer className="text-left bg-gray-100 text-gray-600 lg:text-left">
      <div className="mx-auto my-11 lg:max-w-screen-xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="footer-col-contacts">
            <h6 className="uppercase font-bold mb-4 flex items-center text-xl md:text-lg justify-start">Contactos</h6>
            <p>
            Lorem ipsum dolor sit amet, modus mediocrem consequat eu vix, in per graeci minimum. Ea latine dolorum pro. 
            Blandit noluisse et eos. Eu iudico option sed, fabulas eloquentiam ex qui. Modus inermis singulis vel et.
            </p>
          </div>

          <div className="footer-col-logo flex items-center justify-center align-middle">
            <h6 className="uppercase font-bold text-6xl mb-4">LOGO</h6>
          </div>

          <div className="footer-col-newsletter">
            <h6 className="uppercase font-bold mb-4 flex items-center text-xl md:text-lg justify-start">Newsletter</h6>
            <form action="#" className="mt-2">
                <div className="flex items-center">
                    <input type="email" className="w-full px-2 py-3 mr-2  bg-gray-100 shadow-inner border border-gray-400 focus:outline-none" required />
                    <button className="bg-blue-600 text-gray-200 px-6 py-3 rounded shadow">Enviar</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
