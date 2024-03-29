import { useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const SliderShow = ({ slides }) => {
  const settings = {
    infinite: true,
    fade: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "20px" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "20px", zIndex: "1000" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="app_slideshow">
      <Slider {...settings}>
        {slides.map((slide, indexSlide) => {
          return (
            <div key={indexSlide}>
              <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-4xl text-white lg:text-8xl">
                {slide.title}
              </div>
              <Image
                src={slide.url}
                alt={slide.title}
                width={1920}
                height={600}
                priority="true"
                />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderShow;
