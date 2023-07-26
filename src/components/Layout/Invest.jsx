import React from "react";
import UnderConstructionImage from "../../assets/under-construction.jpg";

const Invest = () => {
  return (
    <section className="mx-auto bg-silverLite px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16 ">
    <div className="flex flex-col lg:flex-row items-center justify-center ">
      <div className="px-auto lg:px-10 lg:mr-6 md:pl-0 lg:pl-0 ">
      <h3 className="flex items-center font-Poppins justify-center text-blue m-8 text-4xl ">
        Invest Page
        </h3>
        <div className=" flex items-center justify-center">
        <img className="w-1/2  h-auto" src={UnderConstructionImage} alt="Scraper" />
        </div>
        
      </div>

    </div>
  </section>
  )
}

export default Invest