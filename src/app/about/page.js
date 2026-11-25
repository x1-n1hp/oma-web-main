import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHome from "./AboutHome";

export default function AboutPage() {
  return (
    <main className="oma-grain flex min-h-screen flex-col bg-oma-bg text-oma-text">
      <Navbar />
      <div className="flex-1">
        <AboutHome />
      </div>
      <Footer />
    </main>
  );
}
