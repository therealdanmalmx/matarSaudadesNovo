import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex w-full min-h-screen flex-col justify-between overflow-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
