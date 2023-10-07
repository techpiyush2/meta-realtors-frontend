import React, { Fragment, useEffect } from "react";
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
import CommercialSection from "../components/Layout/CommercialSection";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Top real estate Properties dealers in Mohali, Chandigarh</title>
        <meta name="description" content="Meta Realtors top real estate properties dealers in Mohali. We deal in a new property transaction across residential, commercial properties." />
        <meta name="keywords"
        content="Best home for sale in Mohali, Best property dealer in Mohali, Flats available in Mohali, Kothis available in Chandigarh, Real estate in Mohali,  Plots available near Jubilee park lane, Best house in chandigarh, Top Property Dealers in Chandigarh, best home dealer near Sahibzada Ajit Singh Nagar"
      />
      </Helmet>
      <Hero />
      <Purpose />
      <FlatSection />
      <PlotSection />
      <KothiSection />
      <Consult />
      <CommercialSection/>
      <BrandList />
      <Blog />
      <AssociatedProjects />
      <Testimonial />
      <FAQs />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
