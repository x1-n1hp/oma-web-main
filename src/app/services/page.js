import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceHome from "./ServiceHome";

export default function ServicesPage() {
  return (
    <main className="oma-grain flex min-h-screen flex-col bg-oma-bg text-oma-text">
      <Navbar />
      <div className="flex-1">
        <ServiceHome />
      </div>
      <Footer />
    </main>
  );
}
