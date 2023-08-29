import React, { useEffect, useRef } from "react";
import FlatPage from "../components/Layout/Flat";
import Footer from "../components/Layout/Footer";
import { Helmet } from "react-helmet";

const Plat = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <section className="mx-auto bg-silverLite pt-20" ref={divRef}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Residential luxury flats near SAS Nagar Mohali and Chandigarh</title>
        <meta
          name="description"
          content="Buy Residential luxury flats near SAS Nagar Mohali and Chandigarh. Right Investment gives you opportunities to save your money & achieve your future dreams."
        />
        <meta
          name="keywords"
          content="flats for sale in Mohali, flats for sale in Chandigarh, Buy flats in Mohali, Flats available near Jubilee park, Apartments / Flats for Sale in Mohali, 3 BHK Flats in Mohali for Sale, Luxury Flats in Mohali for Sale, Luxury Apartments in Mohali for Sale, Luxury Villas/Apartments in Mohali, Villas in Aerocity Mohali"
        />
      </Helmet>
        <FlatPage />
      </section>
      <Footer />
    </>
  );
};

export default Plat;