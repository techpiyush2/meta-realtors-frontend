import React, { useEffect, useRef } from "react";
import InvestPage from "../components/Layout/Invest"
import Footer from "../components/Layout/Footer";

const Invest = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <section className="mx-auto bg-silverLite pb-80" ref={divRef}>
        <InvestPage />
      </section>
      <Footer />
    </>
  );
};

export default Invest;