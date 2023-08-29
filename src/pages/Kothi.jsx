import React, { useEffect, useRef } from "react";
import KothiList from "../components/Layout/Kothi"
import Footer from "../components/Layout/Footer";
import { Helmet } from "react-helmet";

const Kothi = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <section className="mx-auto bg-silverLite pt-20" ref={divRef}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Affordable Luxury kothis And villas in Mohali, Chandigarh</title>
        <meta
          name="description"
          content="Affordable Luxury kothis And villas in Mohali, Chandigarh. Each room in a luxury villa should be decorated and furnished, among other modern conveniences"
        />
        <meta
          name="keywords"
          content="Kothi-villas for sale in Mohali, Top kothi-villas in Chandigarh for sale, Kothis available in Chandigarh, villa-kothi available near Jubilee park lane, Independent Villas for Sale in Mohali, Buy Luxury Villas in Mohali, House for Sale in Mohali, Independent Houses for Sale in Mohali, Low Budget Affordable Independent House"
        />
      </Helmet>
        <KothiList />
      </section>
      <Footer />
    </>
  );
};

export default Kothi;