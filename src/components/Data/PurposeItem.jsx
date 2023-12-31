import React, { Fragment } from "react";

const PurposeItem = ({ id, icon, title, description }) => {
  return (
    <Fragment key={id}>
      <li className="text-center m-4 font-Poppins lg:w-[500px]  flex flex-col bg-white rounded-2xl  shadow-md">
        <div className="py-16 px-10">
          <div className="flex items-center  justify-center pb-6 text-blue text-6xl border-blue outline-4 rounded-lg">
            <img className="w-40" src= {icon} alt="" />
          </div>
          <div className="pb-6">
            <h1 className="text-2xl font-medium">{title}</h1>
          </div>
          <div>
            <p className="text-ash text-base">{description}</p>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default PurposeItem;
