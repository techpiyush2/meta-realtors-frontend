import HomeLoan from "../components/Layout/HomeLoan";
import Footer from "../components/Layout/Footer";
import Calculator from "../components/Layout/Calculator";
const HomeLoanPage = () => {
  return (
    <>
      <section className="mx-auto bg-silverLite mt-200 pb-80">
        <HomeLoan />
        <Calculator/>
      </section>
      <Footer />
    </>
  );
};

export default HomeLoanPage;