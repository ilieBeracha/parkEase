import Hero from "../components/LandingPageHero";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import RentYourSpace from "../components/RentYourSpace";

function LandingPage() {
  return (
    <div className=" bg-white">
      <Hero />
      <RentYourSpace />
      <Features />
      <FAQ />
    </div>
  );
}

export default LandingPage;
