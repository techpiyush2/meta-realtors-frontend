import React from "react";
import HeroImage from "../../assets/pex1.jpg";
import HeroForm from "../Forms/HeroForm";

const Hero = () => {
  return (
    <section className="mt-16 h-auto pb-10 lg:pt-6 overflow-hidden flex justify-center items-center">
      <img  className= 'showcase' src={HeroImage} alt="" />
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






