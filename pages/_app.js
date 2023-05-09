import "../styles/globals.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import Layout from "../components/Layout";
import ShopProvider from "../context/ShopContext";
import { StateContext } from "../context/NewContext";
import { useRouter } from "next/router";
import { Provider, createClient } from "urql";

const client = createClient({
  url:
    process.env.NEXT_PUBLIC_STRAPI_GRAPHQL,
});
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <StateContext>
      <Provider value={client}>
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </Provider>
    </StateContext>
  );
}

export default MyApp;
