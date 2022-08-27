import { useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const SliderShow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isFirstSlide = currentIndex === slides.length - 1;
    const newIndex = isFirstSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div
        className="relative mx-auto flex flex-col items-center justify-center bg-cover bg-center px-10 py-10 text-center md:py-36 lg:h-screen lg:max-w-full"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
        <div
          className="absolute top-2/4 left-0 z-50 translate-x-0 -translate-y-2/4 cursor-pointer text-white"
          onClick={goToPrevious}
        >
          <HiOutlineChevronLeft className="h-10 w-10" />
        </div>
        <div
          className="absolute top-2/4 right-0 z-50 translate-x-0 -translate-y-2/4 cursor-pointer text-white"
          onClick={goToNext}
        >
          <HiOutlineChevronRight className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
};

export default SliderShow;
