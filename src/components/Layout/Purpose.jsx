import React, { Fragment } from "react";
import PurposeItem from "../Data/PurposeItem";
import icon1 from '../../assets/icon2.png'
import icon2 from '../../assets/icon3.png'
import icon3 from '../../assets/icon4.png'

const Purpose = () => {
  const purposeData = [
    {
      id: "p1",
      icon: icon3,
      title: "Flats",
      description: "Most Economical and RERA approved Flats",
    },
    {
      id: "p2",
      icon: icon2,
      title: "Plots",
      description: "Most Economical and RERA approved Plots",
    },
    {
      id: "p3",
      icon: icon1,
      title: "Khoties And Villas",
      description: "Most Economical and RERA approved Villas and Kothies",
    },
  ];

  const mappedList = purposeData.map((purpose) => {
    return (
      <PurposeItem
        key={purpose.id}
        id={purpose.id}
        icon={purpose.icon}
        title={purpose.title}
        description={purpose.description}
      />
    );
  });

  return (
    <Fragment>
      <section className="mx-auto bg-silverLite px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="px-auto lg:px-32">
          <h1 className="font-Poppins font-bold text-3xl text-center mb-4">
            Our Main <span className="text-blue">Focus</span>
          </h1>
          <p className="text-center text-ash">
          Most Economical and Real Estate Regulatory Authority (RERA) approved Flats 
          </p>
        </div>
        <ul className="flex flex-col justify-between  lg:flex-row my-6">{mappedList}</ul>
      </section>
    </Fragment>
  );
};

export default Purpose;
