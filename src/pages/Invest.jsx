import React, { useEffect, useRef } from "react";
import InvestPage from "../components/Layout/Invest";
import FAQs from "../components/Layout/FAQs";
import Footer from "../components/Layout/Footer";
import { Helmet } from "react-helmet";

const Invest = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className="bg-silver pt-20" ref={divRef}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Benefits of property investment - Invest in real estate</title>
        <meta
          name="description"
          content="Meta Realtors is the platform who deals with real estate properties. You can take Benefits of property investment with a small amount of money also with the best deal."
        />
        <meta
          name="keywords"
          content="Invest in commercial properties, Top 5 ways to invest in real estate, Real Estate Investments in Mohali, Investing in Real Estate, Benefits of property investment, online real estate investing platform, invest in high-quality real estate loans"
        />
      </Helmet>
      <InvestPage />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Invest;
