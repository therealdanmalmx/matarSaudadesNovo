import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("A formação do email está errado (e.g: pedro.lavrados@gmail.com")
    .required("Obrigatório"),
  password: Yup.string()
    .password("Palavra passe inválida")
    .required("Obrigatório")
    .min(6, "8 dígitos alfanuméricos no mínimo")
    .minLowercase(1, "Deve conter pelo menos 1 letra minúscula")
    .minUppercase(1, "Deve conter pelo menos 1 letra maiúscula")
    .minSymbols(1, "Deve conter pelo menos um símbolo (e.g. %, & ou !, etc)"),
});

function Login() {
  return (
    <div className="mb-10 flex flex-col lg:w-2/4 lg:p-10">
      <h1 className="mb-5 text-center font-merriweather text-2xl text-black">
        FAZER LOGIN
      </h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="app__contact-form flex w-full flex-col items-start justify-center">
          <label className="mb-3">Nome de utilizador ou email *</label>
          <Field
            className="mr-2 mb-1 w-full bg-gray-100 px-2 py-3 shadow-inner focus:outline-none"
            type="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage name="name" />
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
    </div>
  );
}

export default Login;
