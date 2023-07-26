import React, { Fragment } from "react";

const BrandItem = ({ id,imgLink}) => {
  return (
    <Fragment >
      <li className="flex-[1_1_200px] m-5 ">
       <img src={imgLink} className="" alt=""  />
      </li>
    </Fragment>
  );
};

export default BrandItem;
