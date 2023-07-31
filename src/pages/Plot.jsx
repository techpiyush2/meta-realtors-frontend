import React, { useEffect, useRef } from "react";
import PlotList from "../components/Layout/Plot"
import Footer from "../components/Layout/Footer";

const Plot = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <section className="mx-auto bg-silverLite pt-20" ref={divRef}>
        <PlotList />
      </section>
      <Footer />
    </>
  );
};

export default Plot;