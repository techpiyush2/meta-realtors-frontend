import React, { useEffect, useRef } from "react";
import FlatPage from "../components/Layout/Flat";
import Footer from "../components/Layout/Footer";

const Plat = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <section className="mx-auto bg-silverLite pt-20" ref={divRef}>
        <FlatPage />
      </section>
      <Footer />
    </>
  );
};

export default Plat;