import {useState} from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const SliderShow = ({slides}) => {
  console.log("slides",slides);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isFirstSlide = currentIndex === slides.length - 1;
    const newIndex = isFirstSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div>
        <div className="flex flex-col items-center justify-center px-10 py-10 mx-auto text-center md:py-36 bg-center bg-cover relative lg:max-w-full lg:h-screen" style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
            <div className="absolute top-2/4 left-0 translate-x-0 -translate-y-2/4 z-50 text-white cursor-pointer" onClick={goToPrevious}><HiOutlineChevronLeft className="w-10 h-10"/></div>
            <div className="absolute top-2/4 right-0 translate-x-0 -translate-y-2/4 z-50 text-white cursor-pointer" onClick={goToNext}><HiOutlineChevronRight className="w-10 h-10"/></div>
        </div>
    </div>
  )
}

export default SliderShow