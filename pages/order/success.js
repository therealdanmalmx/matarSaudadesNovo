import { useRouter } from "next/router";
import Image from "next/image";
import Stripe from "stripe";
import obrigado from "../../public/obrigado_encomenda.webp";
import countries from "../../countries.json";
import { formatter } from "../../utils/helpers";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,

    {
      expand: ["line_items"],
    }
  );

  return {
    props: {
      order,
    },
  };
}

function Success({ order }) {
  const route = useRouter();
  console.log({ order });
  return (
    <div className="my-20 mx-auto w-11/12 rounded-3xl shadow-lg shadow-slate-500 md:w-1/2">
      <div className="flex flex-col p-12">
        <h1 className="mb-2 text-center text-3xl font-bold">
          Agradeçemos a sua encomenda!
        </h1>
        <div>
          <h2 className="text-center">
            Um email de confirmação foi enviado para:
          </h2>
          <h2 className="text-center font-extrabold">
            {order.customer_details.email}
          </h2>
          <div className="my-8 mt-6 flex justify-around">
            <div>
              <h3 className="mb-4">Morada:</h3>
              <h2>{order.customer_details.name}</h2>
              <h2>{order.customer_details.address.line1}</h2>
              <h2>
                {order.customer_details.address.postal_code}{" "}
                {order.customer_details.address.city}
              </h2>
              <h2>{countries[order.customer_details.address.country]}</h2>
            </div>
            <div>
              <h3 className="mb-4">Produtos:</h3>
              {order.line_items.data.map((item) => {
                return (
                  <>
                    <div key={item.id} className="mt-2">
                      <h2 className="rounded-xl border-2 border-slate-200 p-2">
                        {item.description} ({item.quantity}) -{" "}
                        {formatter.format(item.amount_total / 100)}
                      </h2>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="mx-auto flex flex-col items-center">
            <div className="my-4 text-xl font-bold underline underline-offset-8">
              Total: {formatter.format(order.amount_total / 100)}
            </div>
            <button
              className="mt-8 w-full cursor-pointer bg-gray-700 px-6 py-4 text-white md:w-1/2"
              onClick={() => route.push("/")}
            >
              Voltar para a loja
            </button>
            <Image 
              src={obrigado} 
              alt="obrigado pela sua escolha" 
              width={350} 
              geight={350} 
              className="mt-12" 
              priority="true"
              unoptimized={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
