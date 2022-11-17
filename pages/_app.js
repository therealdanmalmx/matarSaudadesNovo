import "../styles/globals.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import Layout from "../components/Layout";
import ShopProvider from "../context/ShopContext";
import { useRouter } from "next/router";
import { Provider, createClient } from "urql";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const client = createClient({ url: "http://localhost:1337/graphql" });
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Provider value={client}>
      <ShopProvider>
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </ShopProvider>
    </Provider>
  );
}

export default MyApp;
