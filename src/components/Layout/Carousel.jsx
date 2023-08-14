import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import environment from "../../redux/environment";
export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides,
}) {
  const [curr, setCurr] = useState(0);
  const imgPath = environment.baseUrl + 'upload/properties/'

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((img) => (
          <img className="h-60 lg:h-40 xl:h-52 w-full object-cover rounded-2xl" src={imgPath + img} alt="" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1  hover:rounded-full text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="p-1 hover:rounded-full   text-gray-800 hover:bg-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>


    </div>
  );
}