import React, { Fragment } from "react";
import PurposeItem from "../Data/PurposeItem";

import { HiOutlineHome } from "react-icons/hi";
import { FiKey } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";
import BrandItem from "../Data/BrandItem";

const BrandList = () => {
  const brandData = [
    {
      id: "p1",
      img : "/src/assets/5 (1).png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "p2",
      img : "/src/assets/10 (1).png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },   {
      id: "p3",
      img : "/src/assets/3.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },   {
      id: "p4",
      img : "/src/assets/pngegg (65).png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    
  ];
  const brandData2 = [
    {
      id: "p5",
      img : "/src/assets/npc-2.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "p6",
      img : "/src/assets/npc-5.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },   {
      id: "p7",
      img : "/src/assets/2-1-1.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },   {
      id: "p8",
      img : "/src/assets/signature.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    
  ];

  const mappedList = brandData.map((brand) => {
    return (
      <BrandItem
        key={brand.id}
        id={brand.id}
        imgLink={brand.img}
        description={brand.description}
      />
    );
  });

  const mappedList2 = brandData2.map((brand) => {
    return (
      <BrandItem
        key={brand.id}
        id={brand.id}
        imgLink={brand.img}
        description={brand.description}
      />
    );
  });

  return (
    <Fragment>
      <div className="mx-auto bg-silverLite px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
      <h2 className="font-Poppins font-bold text-4xl text-center tracking-wider mb-4">
            Our Associated  <span className="text-blue">Brands</span>
          </h2>
        <ul className="flex flex-col lg:flex-row my-6">{mappedList}</ul>
        <ul className="flex flex-col lg:flex-row my-6">{mappedList2}</ul>
      </div>
    </Fragment>
  ); 
};

export default BrandList;
