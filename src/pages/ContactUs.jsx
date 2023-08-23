import React, { useEffect, useRef } from "react";
import Footer from "../components/Layout/Footer";
import Contact from "../components/Layout/ContactUs";
import FAQs from "../components/Layout/FAQs";

const ContactUsPage = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <section  className="bg-silver pt-20" ref={divRef}>
        <Contact />
      </section>
      <FAQs />
      
      <Footer />
    </>
  );
};

export default ContactUsPage;