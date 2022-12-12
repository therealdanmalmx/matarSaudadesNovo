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
    <div className="my-20 mx-auto w-1/2 rounded-3xl shadow-lg shadow-slate-500">
      <div className="flex flex-col items-center p-12">
        <h1 className="mb-2 text-3xl font-bold">
          Agradeçemos a sua encomenda!
        </h1>
        <div>
          <h2 className="text-center">
            Um email de confirmação foi enviado para:
          </h2>
          <h2 className="text-center font-extrabold">
            {order.customer_details.email}
          </h2>
          <div className="mt-6 flex justify-between">
            <div className="my-8">
              <h3 className="mb-4">Morada:</h3>
              <h2>{order.customer_details.name}</h2>
              <h2>{order.customer_details.address.line1}</h2>
              <h2>
                {order.customer_details.address.postal_code}{" "}
                {order.customer_details.address.city}
              </h2>
              <h2>{countries[order.customer_details.address.country]}</h2>
            </div>
            <div className="my-8">
              <h3>Produtos</h3>
              {order.line_items.data.map((item) => {
                return (
                  <>
                    <div key={item.id} className="mt-2">
                      <p>
                        {item.description} x {item.quantity} -{" "}
                        {formatter.format(item.amount_total / 100)}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="mx-auto flex flex-col items-center">
            <div className="my-4 font-bold">
              Total: {formatter.format(order.amount_total / 100)}
            </div>
            <button
              className="w-10/12 cursor-pointer bg-gray-700 px-6 py-4 text-white"
              onClick={() => route.push("/")}
            >
              Voltar à loja
            </button>
          </div>
          <Image src={obrigado} />
        </div>
      </div>
    </div>
  );
}

export default Success;
