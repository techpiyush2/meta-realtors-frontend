import React, { useEffect, useRef } from "react";
import HomeLoanPage from "../components/Layout/HomeLoan";
import Footer from "../components/Layout/Footer";

const HomeLoan = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <section className="mx-auto bg-silverLite pb-80" ref={divRef}>
        <HomeLoanPage />
      </section>
      <Footer />
    </>
  );
};

export default HomeLoan;