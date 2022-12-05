import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between overflow-hidden">
      {/* <Navbar /> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
}
