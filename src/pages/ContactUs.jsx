import React, { useEffect, useRef } from "react";
import Footer from "../components/Layout/Footer";
import Contact from "../components/Layout/ContactUs";
import FAQs from "../components/Layout/FAQs";
import { Helmet } from "react-helmet";

const ContactUsPage = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
           <Helmet>
        <meta charSet="utf-8" />
        <title>Contact us for Buy or sell Properties in Mohali,Chandigarh</title>
        <meta
          name="description"
          content="Contact us for Buy or sell Properties in Mohali, Chandigarh, we are here to assist you find the best deal according to your requirements that fits your budget"
        />
        <meta
          name="keywords"
          content="Buy luxury kothis in mohali, Residential plots for sale in Mohali, Buy or sell house in mohali, Contact us for commercial properties, Luxury Houses in Mohali for Sale, Luxury Villas/Apartments in Mohali, Luxury Apartments in Mohali for Sale, 3 BHK Luxury Flats in Mohali for Sale"
        />
      </Helmet>
      <section  className="bg-silver pt-20" ref={divRef}>
        <Contact />
      </section>
      <FAQs />
      
      <Footer />
    </>
  );
};

export default ContactUsPage;