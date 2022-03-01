import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
        <Navbar />
        <main>
            { children }
        </main>
        <Footer />
    </div>
  );
}
