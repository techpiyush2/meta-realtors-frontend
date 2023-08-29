import React, { useEffect, useRef } from "react";
import AboutPage from "../components/Layout/About";
import Footer from "../components/Layout/Footer";

const AboutUs = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
             <Helmet>
        <meta charSet="utf-8" />
        <title>Best Property Dealers in Mohali - Top realtors in Chandigarh</title>
        <meta
          name="description"
          content="Meta Realtors is the best property dealers in Mohali. We offer genuine leads to our customers and facilitate them with the best products with their investments."
        />
        <meta
          name="keywords"
          content="Best house in chandigarh,Top Property Dealers in Chandigarh, Residential plots for sale in Mohali, Buy or sell house in mohali, Providing Residential Land in Mohali, Houses for sale in Chandigarh, Villas for sale in Chandigarh, Flats for Sale in Chandigarh, Top Real Estate Agents in Mohali Sas Nagar"
        />
      </Helmet>
      <section  className="bg-silver pt-20" ref={divRef}>
        <AboutPage />
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;