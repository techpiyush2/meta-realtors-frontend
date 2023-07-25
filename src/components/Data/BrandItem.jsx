import React, { Fragment } from "react";

const BrandItem = ({ id,imgLink}) => {
  return (
    <Fragment >
      <li className="text-center m-4 max-w-1/2  border-1 border-black items-center justify-center font-Poppins flex">
       <img src={imgLink} className="" alt=""  />
      </li>
    </Fragment>
  );
};

export default BrandItem;
