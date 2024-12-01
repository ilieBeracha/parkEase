import Hero from "../components/HeroSearch";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import AddParkingHero from "@/components/AddParkingHero";

function LandingPage() {
  return (
    <div className=" bg-white">
      <Hero />
      <AddParkingHero />
      <Features />
      <FAQ />
    </div>
  );
}

export default LandingPage;
