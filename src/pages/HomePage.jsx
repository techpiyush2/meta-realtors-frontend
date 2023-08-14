import React, { Fragment } from "react";
import Hero from "../components/Layout/Hero";
import Purpose from "../components/Layout/Purpose";
import Blog from "../components/Layout/BlogSection";
import Testimonial from "../components/Layout/Testimonial";
import FAQs from "../components/Layout/FAQs";
import Footer from "../components/Layout/Footer";
import Consult from "../components/Layout/Consult";
import BrandList from "../components/Layout/BrandList";
import AssociatedProjects from "../components/Layout/AssociatedProjects";
import PlotSection from "../components/Layout/PlotSection";
import FlatSection from "../components/Layout/FlatSection";
import KothiSection from "../components/Layout/KothiSection";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Purpose />
      <FlatSection/>
      <PlotSection/>
      <KothiSection/>
      <Consult/>
      {/* <Properties /> */}
      <BrandList/>
      <Blog />
      <AssociatedProjects/>
      <Testimonial />
      <FAQs />
      <Footer />
    </Fragment>
  );
};

export default HomePage;