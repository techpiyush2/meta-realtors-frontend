import React, { useEffect, useRef } from "react";
import KothiList from "../components/Layout/Kothi"
import Footer from "../components/Layout/Footer";

const Kothi = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <section className="mx-auto bg-silverLite pt-20" ref={divRef}>
        <KothiList />
      </section>
      <Footer />
    </>
  );
};

export default Kothi;