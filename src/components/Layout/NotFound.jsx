import React, { Fragment } from "react";
import NotFoundImage from "../../assets/NotFound.svg";
import Footer from "./Footer";

const NotFound = () => {
  return (
    <Fragment>
      <section className="mx-auto bg-silverLite pb-40">
        <div className="px-auto  pt-40">
          <img
            className="w-1/3 h-auto m-auto"
            src={NotFoundImage}
            alt="Not found"
          />
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default NotFound;
