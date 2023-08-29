import HomeLoan from "../components/Layout/HomeLoan";
import Footer from "../components/Layout/Footer";
import Calculator from "../components/Layout/Calculator";
import Hero from "../components/Layout/CalculatorHero";
import { Helmet } from "react-helmet";

const HomeLoanPage = () => {
  return (
    <>
    <Hero />
    <Helmet>
        <meta charSet="utf-8" />
        <title>Buy residential property in Kharar at reasonable price</title>
        <meta
          name="description"
          content="Buy residential property at a reasonable price in Kharar, Mohali Airport Road. We have luxurious and secure flats where you can live easily in society."
        />
        <meta
          name="keywords"
          content="Buy home in mohali, Buy house in mohali, Residential flat for sale in Mohali, Buy luxury kothis in mohali, Independent House for Sale in Mohali, Villas in Mohali, Luxury Villas for Sale in Mohali, Luxury Houses in Mohali for Sale, Luxury House / Villas in mohali, Best Luxury Villas in Mohali with Pool"
        />
      </Helmet>
      <section className="mx-auto bg-silverLite">
        <Calculator/>
      </section>
      <Footer />
    </>
  );
};

export default HomeLoanPage;