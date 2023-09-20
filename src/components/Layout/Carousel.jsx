import { useState } from "react";

import environment from "../../redux/environment";


const slideStyles = {
  height: "400px",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "30px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "30px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",

};

const sliderStyles = {
  position: "relative",
  height: "100%",
};







const ImageSlider = ({ slides}) => {
  
  // let slides = ['https://i.insider.com/60638bd66183e1001981966a?width=1136&format=jpeg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC_leiN_-EKRijxYHmntfWMZqCI8Idw1gD2YF5SSJJQCL3wCz8zjiO87WRrWqcNN0YFCc&usqp=CAU']
  
  const imgPath = environment.baseUrl + 'upload/properties/'
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url('${imgPath + slides[currentIndex]}')`,
  };

  return (
    <div style={sliderStyles}>
      {console.log( imgPath + slides[currentIndex])}
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>

    </div>
  );
};

export default ImageSlider;