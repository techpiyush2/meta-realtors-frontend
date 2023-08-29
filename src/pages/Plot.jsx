import React, { useEffect, useRef } from "react";
import PlotList from "../components/Layout/Plot"
import Footer from "../components/Layout/Footer";
import { Helmet } from "react-helmet";

const Plot = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <section className="mx-auto bg-silverLite pt-20" ref={divRef}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Residential & Commercial land for Sale in Mohali, Chandigarh</title>
        <meta
          name="description"
          content="We find you Residential & Commercial land for Sale in Mohali, Chandigarh with expected  price within your budget .Hurry up and make a quick deal with our assistance."
        />
        <meta
          name="keywords"
          content="Plots for sale in Mohali,  Residential Plots for sale in Mohali, Residential Land for Sale in Mohali, Plot for sale in Kharar, Commercial plots for sale in Mohali, Residential Land / Plots in Mohali, Lands & Plots for sale in Mohali, Plots For Sale By Owner In Mohali"
        />
      </Helmet>
        <PlotList />
      </section>
      <Footer />
    </>
  );
};

export default Plot;