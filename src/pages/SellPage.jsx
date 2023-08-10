import FAQs from "../components/Layout/FAQs";
import Footer from "../components/Layout/Footer";
import AskQuestion from "../components/Layout/AskQuestion";
import Properties from "../components/Layout/PropertyListing";
import Sell from "../components/Layout/Sell";
import SellForm from "../components/Forms/SellForm"
const SellPage = () => {

  return (
    <>
      <Sell />
      <SellForm/>
      <FAQs />
      <Footer />
    </>
  );
};

export default SellPage;
