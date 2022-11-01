import Link from "next/link";
import { HiOutlineHeart } from "react-icons/hi";
import { images } from "../../utils";

function Login() {
  return (
    <div className="mb-10 flex flex-col lg:w-2/4 lg:p-10">
      <h1 className="mb-5 text-center font-merriweather text-2xl text-black">
        FAZER LOGIN
      </h1>
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
  );
}

export default Login;
