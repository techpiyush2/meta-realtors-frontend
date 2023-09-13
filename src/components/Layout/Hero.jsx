import React from "react";
import HeroImage from "../../assets/pex1.jpg";
import HeroImage2 from "../../assets/hero1.jpg";
import HeroImage4 from "../../assets/hero3.jpg";
import HeroForm from "../Forms/HeroForm";
import HeroCarousel from "./HeroCorusel";

const Hero = () => {
  return (
    <section className=" h-auto lg:pt-4 overflow-hidden flex justify-center items-center">
      <HeroCarousel slides= {[HeroImage,HeroImage4, HeroImage2]}/>
      <div className=" flex justify-center px-10 absolute  z-30 flex-col ">
        <div className="lg:px-16  lg:pr-0 text-center">
          <h1 className="text-5xl mb-4 text-white font-semibold tracking-widest font-Poppins">Time to Meet Your Dream Home
          </h1>
          <p className="font-Poppins  text-white ">With the most complete source of homes for sale & real estate near you
          </p>
          <div className="flex justify-center items-center">
         <div className="w-2/3" >
         <HeroForm />
         </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;






