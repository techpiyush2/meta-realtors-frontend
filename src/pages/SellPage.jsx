import FAQs from "../components/Layout/FAQs";
import Footer from "../components/Layout/Footer";
import AskQuestion from "../components/Layout/AskQuestion";
import Properties from "../components/Layout/PropertyListing";
import Sell from "../components/Layout/Sell";
import SellForm from "../components/Forms/SellForm"
import { Helmet } from "react-helmet";

const SellPage = () => {

  return (
    <>
       <Helmet>
        <meta charSet="utf-8" />
        <title>Sell commercial Residential Property in Mohali, Chandigarh</title>
        <meta
          name="description"
          content="We Sell commercial & residential Properties in Mohali, Chandigarh. We offer ample space for you and your family to live comfortably at a reasonable cost."
        />
        <meta
          name="keywords"
          content=" Sell home in mohali, sell house in mohali,House for sale in Mohali, Chandigarh, Property for sale in Mohali, Selling Commercial property in Mohali, Residential Properties for Sale in Mohali, Flats, Apartment, House, Villas for sale, Villas for Sale in Chandigarh, Properties in New Chandigarh"
        />
      </Helmet>
      <Sell />
      <SellForm/>
      <FAQs />
      <Footer />
    </>
  );
};

export default SellPage;
