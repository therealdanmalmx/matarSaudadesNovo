import Image from 'next/image';
import ProductForm from './ProductForm';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

import RecommendedList from './RecommendedList';

export default function ProductPageContent({ product }) {
  const images = [];

  product.map((product, i) => {
    const { url, alternativeText } = product.attributes.image.data.attributes;
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        <img
          src={`${BASE_URL}${url}`}
          alt={alternativeText}
          height={1000}
          width={1000}
          priority
          unoptimized={false}
        />
      </SwiperSlide>
    );
  });

  SwiperCore.use([Navigation, Pagination]);

  return (
    <div>
      <div className="md:flex-row md:items-start md:space-y-0 md:space-x-4 md-p-0 flex flex-col items-center justify-center p-5 mx-auto">
        <div className="md:w-3/6 relative w-full">
          {images.length < 2 ? (
            images
          ) : (
            <Swiper
              style={{
                '--swiper-navigation-color': '#ce0d15',
                '--swiper-pagination-color': '#ce0d15',
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
        <div className="md:w-1/3 w-full mt-5">
          <ProductForm produto={product} />
        </div>
      </div>
      {/* <RecommendedList current={product.id} products={product} /> */}
    </div>
  );
}
