
import React from "react";
import sellImage from "../../assets/sell.jpg";


const Sell = () => {

  return (
    <section className="mt-16 h-auto pb-10 lg:pt-6 overflow-hidden flex justify-center items-center">
      <img  className= 'showcase' src={sellImage} alt="" />
      <div className="flex justify-center px-10 absolute  z-30 flex-col ">
        <div className="lg:px-16  lg:pr-0 text-center">
          <h1 className="text-5xl mb-4 text-blue font-semibold tracking-widest font-Poppins">Sell Your Property with Confidence
          </h1>
          <p className="font-Poppins mb-4 text-white ">Are you thinking about selling your home but unsure of where to start? Our experienced team of real estate professionals can guide you through every step of the process to ensure a smooth and successful sale. We take pride in our customer service and dedication to getting you the highest possible sale price in the shortest amount of time.
          </p>
          <p className="font-Poppins mb-4 text-white ">Interested in getting the maximum value for your home? Contact us today for a free home valuation and marketing consultation. Let our expertise guide you to a successful property sale.</p>
          <div className="flex justify-center items-center">
         <div className="w-2/3" >
         </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sell;






