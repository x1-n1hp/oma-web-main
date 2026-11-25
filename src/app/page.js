import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/home/Hero";
import WhoWeServe from "./components/home/WhoWeServe";
import ServicesGrid from "./components/home/ServicesGrid";
import Featured from "./components/home/Featured";
import HowItWorks from "./components/home/HowItWorks";
import Gallery from "./components/home/Gallery";
import FounderSpotlight from "./components/home/FounderSpotlight";
import Approach from "./components/home/Approach";
import ContactBand from "./components/home/ContactBand";

export default function Home() {
  return (
    <main className="oma-grain flex min-h-screen flex-col bg-oma-bg text-oma-text">
      <Navbar />
      <Hero />
      <WhoWeServe />
      <ServicesGrid />
      <Featured />
      <HowItWorks />
      <Gallery />
      <FounderSpotlight />
      <Approach />
      <ContactBand />
      <Footer />
    </main>
  );
}
