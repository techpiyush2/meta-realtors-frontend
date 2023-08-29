import FAQs from "../components/Layout/FAQs";
import Footer from "../components/Layout/Footer";
import Buy from "../components/Layout/Buy";
import AskQuestion from "../components/Layout/AskQuestion";
import Properties from "../components/Layout/PropertyListing";
import { Helmet } from "react-helmet";

const BuyPage = () => {

  return (
    <>
      <Buy />
      <Properties/>
      <AskQuestion/>
      <FAQs />
      <Footer />
    </>
  );
};

export default BuyPage;
