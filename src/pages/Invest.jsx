import React, { useEffect, useRef } from "react";
import InvestPage from "../components/Layout/Invest"
import FAQs from "../components/Layout/FAQs";
import Footer from "../components/Layout/Footer";

const Invest = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className="bg-silver pt-20" ref={divRef}>
    <InvestPage />
    <FAQs />  
    <Footer />
  </div>
  );
};

export default Invest;