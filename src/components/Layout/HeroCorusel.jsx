import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
export default function HeroCarousel({
 slides
}) {
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };

      return (
        <div className='max-w-[1400px] h-[780px] w-full m-auto px-4 relative group'>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex]})` }}
            className='w-full showcase bg-center bg-cover'
          ></div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <ChevronLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <ChevronRight onClick={nextSlide} size={30} />
          </div>

        </div>
      );
}