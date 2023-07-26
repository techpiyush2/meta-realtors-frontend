import React, { Fragment } from "react";

import BrandItem from "../Data/BrandItem";

const BrandList = () => {
  const brandData = [
    {
      id: "p1",
      img : "/src/assets/brand-1.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "p2",
      img : "/src/assets/brand-2.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },   {
      id: "p3",
      img : "/src/assets/brand-3.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },   {
      id: "p4",
      img : "/src/assets/brand-4.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "p5",
      img : "/src/assets/brand-5.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "p6",
      img : "/src/assets/brand-6.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },   {
      id: "p7",
      img : "/src/assets/brand-7.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },   {
      id: "p8",
      img : "/src/assets/brand-8.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "p9",
      img : "/src/assets/brand-9.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "p10",
      img : "/src/assets/brand-10.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },   {
      id: "p11",
      img : "/src/assets/brand-11.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },   {
      id: "p12",
      img : "/src/assets/brand-12.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "p13",
      img : "/src/assets/brand-13.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "p14",
      img : "/src/assets/brand-14.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },   {
      id: "p15",
      img : "/src/assets/brand-15.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },   {
      id: "p16",
      img : "/src/assets/brand-16.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "p17",
      img : "/src/assets/brand-17.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "p18",
      img : "/src/assets/brand-18.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },   {
      id: "p19",
      img : "/src/assets/brand-19.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },   {
      id: "p20",
      img : "/src/assets/brand-20.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "p21",
      img : "/src/assets/brand-21.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "p22",
      img : "/src/assets/brand-22.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },   {
      id: "p23",
      img : "/src/assets/brand-23.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },   {
      id: "p24",
      img : "/src/assets/brand-24.png",
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


  return (
    <Fragment>
      <div className="mx-auto bg-silverLite px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
      <h2 className="font-Poppins font-bold text-4xl text-center tracking-wider mb-4">
            Our Associated  <span className="text-blue">Brands</span>
          </h2>
        <ul className="w-[80vw] h-auto flex items-center font-Poppins justify-around flex-wrap m-auto lg:flex-row my-6">{mappedList}</ul>
      </div>
    </Fragment>
  ); 
};

export default BrandList;
