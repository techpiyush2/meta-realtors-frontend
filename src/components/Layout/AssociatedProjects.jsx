import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const AssociatedProjects = () => {
  const [trigger, setTrigger] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => {
        setTrigger(true);
      }}
      onExit={() => {
        setTrigger(false);
      }}
    >
        
      <div className="px-10 md:px-16  bg-silverLite lg:px-20 py-20  pt-20 md:py-16 text-blue">
        <div className="font-Poppins flex justify-evenly p-8 items-center text-center bg-white rounded-2xl  shadow-md">
        <div className="w-48">
          <span
            className="text-2xl md:text-4xl font-bold"
            x-data="animation()"
            x-init="animate(400)"
            x-text="counter"
          >
            {trigger && <CountUp start={0} end={600} duration={2} />}+
          </span>
          <p>Satisfied Clients</p>
        </div>
        <div className="w-48">
          <span
            className="text-2xl md:text-4xl font-bold"
            x-data="animation()"
            x-init="animate(9400)"
            x-text="counter"
          >
            {trigger && <CountUp start={0} end={1000} duration={2} />}+
          </span>
          <p>Properties Sold</p>
        </div>
        <div className="w-48">
          <span
            className="text-2xl md:text-4xl font-bold"
            x-data="animation()"
            x-init="animate(11024)"
            x-text="counter"
          >
            {trigger && <CountUp start={0} end={30} duration={2} />}+
          </span>
          <p>Years in Business</p>
        </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default AssociatedProjects;



