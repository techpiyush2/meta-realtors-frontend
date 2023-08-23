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
      <section  className="bg-silver pt-20" ref={divRef}>
        <AboutPage />
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;