import { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const initialValues_login = {
  email: "",
  password: "",
};
const initialValues_register = {
  email: "",
  password: "",
  passwordConfirm: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema_login = Yup.object({
  email: Yup.string()
    .email("A formação do email está errado (e.g: pedro.lavrados@gmail.com")
    .required("E-mail é obrigatório"),
  password: Yup.string()
    .password("Palavra passe inválida")
    .required("Obrigatório")
    .min(6, "8 dígitos alfanuméricos no mínimo")
    .minLowercase(1, "Deve conter pelo menos 1 letra minúscula")
    .minUppercase(1, "Deve conter pelo menos 1 letra maiúscula")
    .minSymbols(1, "Deve conter pelo menos um símbolo (e.g. %, & ou !, etc)"),
});
const validationSchema_register = Yup.object({
  email: Yup.string()
    .email("A formação do email está errado (e.g: pedro.lavrados@gmail.com")
    .required("E-mail é obrigatório"),
  password: Yup.string()
    .password("Palavra passe inválida")
    .required("Obrigatório")
    .min(6, "8 dígitos alfanuméricos no mínimo")
    .minLowercase(1, "Deve conter pelo menos 1 letra minúscula")
    .minUppercase(1, "Deve conter pelo menos 1 letra maiúscula")
    .minSymbols(1, "Deve conter pelo menos um símbolo (e.g. %, & ou !, etc)"),
  passwordConfirm: Yup.string()
    .required()
    .oneOf(
      [Yup.ref("password"), null],
      "Confirmação tem que ser igual à palavra de passe"
    ),
});

function Login() {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div className="mx-auto mb-10 md:w-1/3 md:p-10">
      {isRegistered ? (
        <>
          <h1 className="mb-5 text-center font-merriweather text-2xl text-black">
            FAZER LOGIN
          </h1>
          <Formik
            initialValues={initialValues_login}
            onSubmit={onSubmit}
            validationSchema={validationSchema_login}
          >
            <Form className="app__contact-form flex w-full flex-col items-start justify-center">
              <label className="mb-3">Nome de utilizador ou email *</label>
              <Field
                className="mr-2 mb-1 w-full bg-gray-100 px-2 py-3 shadow-inner focus:outline-none"
                type="email"
                name="email"
                placeholder="Email ou nome do utilizador"
              />
              <ErrorMessage name="email" />
              <label className="mb-3">Palavra de passe</label>
              <Field
                className="mr-2 mb-1 w-full bg-gray-100 px-2 py-3 shadow-inner focus:outline-none"
                type="password"
                name="password"
                placeholder="Palavra passe"
              />
              <ErrorMessage name="password" />
              <button type="submit" className="btn btn-red mt-4 w-full">
                Login
              </button>
            </Form>
          </Formik>
          <p className="mt-4 text-sm">
            Ainda não tem uma conta ? Clique{" "}
            <span
              className="cursor-pointer font-bold"
              onClick={() => setIsRegistered(false)}
            >
              aqui.
            </span>{" "}
          </p>
        </>
      ) : (
        <>
          <h1 className="mb-5 text-center font-merriweather text-2xl text-black">
            REGISTRAR NOVA CONTA
          </h1>
          <Formik
            initialValues={initialValues_register}
            onSubmit={onSubmit}
            validationSchema={validationSchema_register}
          >
            <Form className="app__contact-form flex w-full flex-col items-start justify-center">
              <label className="mb-3">Nome de utilizador ou email *</label>
              <Field
                className="mr-2 mb-1 w-full bg-gray-100 px-2 py-3 shadow-inner focus:outline-none"
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" />
              <label className="mb-3">Palavra de passe</label>
              <Field
                className="mr-2 mb-1 w-full bg-gray-100 px-2 py-3 shadow-inner focus:outline-none"
                type="password"
                name="password"
                placeholder="Palavra passe"
              />
              <label className="mb-3">Confirmar a palavra de passe</label>
              <ErrorMessage name="password" />
              <Field
                className="mr-2 mb-1 w-full bg-gray-100 px-2 py-3 shadow-inner focus:outline-none"
                type="password"
                name="passwordConfirm"
                placeholder="Confirmar a palavra passe"
              />
              <ErrorMessage name="passwordConfirm" />
              <button type="submit" className="btn btn-red mt-4 w-full">
                Registrar
              </button>
            </Form>
          </Formik>
          <p className="mt-4 text-sm">
            Já tens uma conta ? Clique{" "}
            <span
              className="cursor-pointer font-bold"
              onClick={() => setIsRegistered(true)}
            >
              aqui.
            </span>{" "}
          </p>
        </>
      )}
    </div>
  );
}

export default Login;
