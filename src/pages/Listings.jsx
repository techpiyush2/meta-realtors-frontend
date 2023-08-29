import React, { useEffect, useRef } from "react";
import Footer from "../components/Layout/Footer";
import PropertyListing from "../components/Layout/PropertyListing";
import FAQs from "../components/Layout/FAQs";
import { Helmet } from "react-helmet";


const Listings = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <div className="bg-silver pt-20" ref={divRef}>
           <Helmet>
        <meta charSet="utf-8" />
        <title>Luxury Kothi And villas in posh area of  Mohali, Chandigarh</title>
        <meta
          name="description"
          content=" We have a variety of luxury kothis and villas in Mohali at reasonable prices in posh areas. You can get the best deal in your Budget in Mohali and Chandigarh."
        />
        <meta
          name="keywords"
          content="List of Kothi-villas for sale in Mohali,Top lists of Kothis available in Chandigarh, kothi for sale in mohali sector, villas in mohali for sale,independent kothi-villas at affordable price, Villa for Sale in Mohali, Luxury Bungalow & Villa in Mohali for Sale, Serene Luxury Villas in Aerocity"
        />
      </Helmet>
      <PropertyListing />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Listings;
