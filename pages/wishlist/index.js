import { HiOutlineHeart } from "react-icons/hi";
import { images } from "../../utils";

const wishlist = () => {
  return (
    <>
      <div className="app__hero flex h-80 max-w-full flex-col items-center justify-center bg-black bg-cover bg-center" style={{ backgroundImage: `url(${images.wishListBg.src})` }}>
          <h1 className="max-w-4xl text-center text-5xl font-normal leading-snug text-white md:text-6xl md:leading-tight">
          <span className="text-white font-merriweather">Wishlist</span>
          </h1>
          <nav class="rounded-md w-full">
            <ol class="list-reset flex justify-center">
              <li><a href="#" class="text-white hover:text-red">Home</a></li>
              <li><span class="text-white mx-2">/</span></li>
              <li class="text-white">Library</li>
            </ol>
          </nav>
      </div>

      <div className="app__wishlist w-full grid justify-items-center py-14 px-8">
            <div className="flex flex-col items-center justify-center icon-wishlist">
                <HiOutlineHeart className="w-64 h-64 text-gray-100"/>
                <h1 className="text-4xl text-black font-merriweather mb-5">Wishlist is empty.</h1>

                <p className="text-base">You don't have any products in the wishlist yet.
                You will find a lot of interesting products on our "Shop" page.</p>

                <div className="mt-4 text-left">
                  <button className="btn btn-red">Return to shop</button>
              </div>
            </div>
        </div>
    </>
  )
}

export default wishlist