import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/home/Hero";
import ServicesGrid from "./components/home/ServicesGrid";
import Featured from "./components/home/Featured";
import Approach from "./components/home/Approach";
import ContactBand from "./components/home/ContactBand";

export default function Home() {
  return (
    <main className="oma-grain flex min-h-screen flex-col bg-oma-bg text-oma-text">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <Featured />
      <Approach />
      <ContactBand />
      <Footer />
    </main>
  );
}
