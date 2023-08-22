import React, { Fragment } from "react";

const BrandItem = ({imgLink}) => {
  return (
    <Fragment >
      <li className="flex-[1_1_200px] m-5 ">
       <div className="flex flex-col items-center">
        {console.log(imgLink)}
       <img src={imgLink} className="" alt=""  />
       </div>
      </li>
    </Fragment>
  );
};

export default BrandItem;
