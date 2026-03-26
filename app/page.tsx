import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ValueProposition from "./components/ValueProposition";
import IndustryUseCases from "./components/IndustryUseCases";
import SocialProof from "./components/SocialProof";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingWidget from "./components/FloatingWidget";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ValueProposition />
        <IndustryUseCases />
        <SocialProof />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWidget />
    </>
  );
}