import React, { useEffect, useRef } from "react";
import CommercialList from "../components/Layout/Commercial"
import Footer from "../components/Layout/Footer";
import { Helmet } from "react-helmet";

const Commercial = () => {
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
          content="Commercials for sale in Mohali,  Residential Commercials for sale in Mohali, Residential Land for Sale in Mohali, Commercial for sale in Kharar, Commercial Commercials for sale in Mohali, Residential Land / Commercials in Mohali, Lands & Commercials for sale in Mohali, Commercials For Sale By Owner In Mohali"
        />
      </Helmet>
        <CommercialList />
      </section>
      <Footer />
    </>
  );
};

export default Commercial;