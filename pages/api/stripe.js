import Stripe from "stripe";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  if (req.method === "POST") {
    console.log(req.body.url);
    try {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["US", "SE", "NO", "CH"],
        },
        line_items: req.body.map((item) => {
          return {
            price_data: {
              currency: "eur",
              product_data: {
                images: [`${BASE_URL}${item.image.data.attributes.url}`],
                name: item.title,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      });
      res.status(200).json(session);
    } catch (error) {
      res.status(error.statusCode || 500).json(error.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
}
