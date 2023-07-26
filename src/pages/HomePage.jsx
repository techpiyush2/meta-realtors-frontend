import React, { Fragment } from "react";
import Hero from "../components/Layout/Hero";
import Purpose from "../components/Layout/Purpose";
import Properties from "../components/Layout/Properties";
import OurService from "../components/Layout/OurService";
import Blog from "../components/Layout/BlogSection";
import Testimonial from "../components/Layout/Testimonial";
import FAQs from "../components/Layout/FAQs";
import Footer from "../components/Layout/Footer";
import Consult from "../components/Layout/Consult";
import BrandList from "../components/Layout/BrandList";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Purpose />
      <Consult/>
      {/* <Properties /> */}
      <BrandList/>
      {/* <Blog /> */}
      <Testimonial />
      <FAQs />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
