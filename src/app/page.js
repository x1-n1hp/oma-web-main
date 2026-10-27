import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="scroll-smooth flex min-h-screen flex-col bg-[#F5F5F7] dark:bg-[#0A0E24] text-[#202860] dark:text-white mx-auto transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <About />
      <Service />
      <Contact />
      <Footer />
    </main>
  );
}
