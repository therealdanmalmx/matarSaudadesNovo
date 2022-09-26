import Link from 'next/link';
import { HiOutlineHeart } from "react-icons/hi";
import { images } from "../../utils";

const wishlist = () => {
  return (
    <>
      <div
        className="app__hero flex h-80 max-w-full flex-col items-center justify-center bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${images.wishListBg.src})` }}
      >
        <h1 className="max-w-4xl text-center text-5xl font-normal leading-snug text-white md:text-6xl md:leading-tight">
          <span className="font-merriweather text-white">Wishlist</span>
        </h1>
        <nav className="w-full rounded-md">
          <ol className="list-reset flex justify-center">
            <li>
              <a href="#" className="text-white hover:text-red">
                Home
              </a>
            </li>
            <li>
              <span className="mx-2 text-white">/</span>
            </li>
            <li className="text-white">Library</li>
          </ol>
        </nav>
      </div>

      <div className="app__wishlist grid w-full justify-items-center py-14 px-8">
        <div className="icon-wishlist flex flex-col items-center justify-center">
          <HiOutlineHeart className="h-64 w-64 text-gray-100" />
          <h1 className="mb-5 font-merriweather text-4xl text-black">
            Wishlist is empty.
          </h1>

          <p className="text-base">
            You don&apos;t have any products in the wishlist yet. You will find
            a lot of interesting products on our &ldquo;Shop&ldquo; page.
          </p>

          <div className="mt-4 text-left">
            <Link
              href="/"
              passHref
              >
              <button className="btn btn-red">Return to shop</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default wishlist;
