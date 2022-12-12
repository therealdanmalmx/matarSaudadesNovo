import Image from "next/image";
import ProductForm from "./ProductForm";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

import RecommendedList from "./RecommendedList";

export default function ProductPageContent({ product }) {
  const images = [];

  product.map((product, i) => {
    const { url, alternativeText } = product.attributes.image.data.attributes;
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        <Image
          src={`${BASE_URL}${url}`}
          alt={alternativeText}
          layout="fill"
          objectFit="cover"
          priority
        />
      </SwiperSlide>
    );
  });

  SwiperCore.use([Navigation, Pagination]);

  return (
    <div>
      <div className="lg_space-x-8 mx-auto flex w-11/12 max-w-6xl flex-col items-center justify-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 ">
        <div className="relative h-96 w-full md:w-1/3">
          {images.length < 2 ? (
            images
          ) : (
            <Swiper
              style={{
                "--swiper-navigation-color": "#ce0d15",
                "--swiper-pagination-color": "#ce0d15",
              }}
              navigation
              pagination={{ clickable: true }}
              className="h-96 rounded-2xl"
              loop="true"
            >
              {images}
            </Swiper>
          )}
        </div>
        <div className="w-full md:w-1/3">
          <ProductForm produto={product} />
        </div>
      </div>
      {/* <RecommendedList current={product.id} products={product} /> */}
    </div>
  );
}
