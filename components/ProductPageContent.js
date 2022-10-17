import Image from "next/image";
import ProductForm from "./ProductForm";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, navigation, Pagination } from "swiper";

import RecommendedList from "./RecommendedList";

export default function ProductPageContent({ produto }) {
  const images = [];

  produto.images.edges.map((image, i) => {
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        <Image
          src={image.node.url}
          alt={image.node.altText}
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
          <ProductForm produto={produto} />
        </div>
      </div>
      {/* <RecommendedList current={produto.id} /> */}
    </div>
  );
}
