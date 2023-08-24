import HomeLoan from "../components/Layout/HomeLoan";
import Footer from "../components/Layout/Footer";
import Calculator from "../components/Layout/Calculator";
import Hero from "../components/Layout/CalculatorHero";
const HomeLoanPage = () => {
  return (
    <>
    <Hero />
      <section className="mx-auto bg-silverLite">
        <Calculator/>
      </section>
      <Footer />
    </>
  );
};

export default HomeLoanPage;