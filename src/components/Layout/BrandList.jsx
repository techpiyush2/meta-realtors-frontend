import React, { Fragment, useEffect } from "react";

import BrandItem from "../Data/BrandItem";
import environment from "../../redux/environment";
const BrandList = () => {
  
const imgPath = environment.baseUrl + 'upload/brands/'
let images = []

   for(let i = 1; i<21; i++){
     images.push(imgPath + `brand-${i}.png`)
   }

  const mappedList = images.map((brand,i) => {
    return (
      <BrandItem
        key={i}
        imgLink={brand}
      />
    );
  });


  return (
    <Fragment>
      <div className="mx-auto bg-silverLite px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
      <h2 className="font-Poppins font-bold text-4xl text-center tracking-wider mb-4">
            Our Associated  <span className="text-blue">Brands</span>
          </h2>
        <ul className="w-[80vw] h-auto flex items-center font-Poppins justify-center flex-wrap  lg:flex-row my-6">{mappedList}</ul>
      </div>
    </Fragment>
  ); 
};

export default BrandList;
