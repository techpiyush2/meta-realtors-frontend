import React, { useEffect, useRef } from "react";
import contactPage from "../components/Layout/ContactUs";
import Footer from "../components/Layout/Footer";

const ContactUs = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <section className="mx-auto bg-silverLite pb-80" ref={divRef}>
        <contactPage />
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;