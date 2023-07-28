import { useEffect, useRef } from "react";
import BrandList from "../components/Layout/BrandList";
import FAQs from "../components/Layout/FAQs";
import Footer from "../components/Layout/Footer";

const Brand = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className="bg-silver pt-20" ref={divRef}>
      <BrandList />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Brand;
