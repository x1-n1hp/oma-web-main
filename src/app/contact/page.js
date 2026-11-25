import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHome from "./ContactHome";

export default function ContactPage() {
  return (
    <main className="oma-grain flex min-h-screen flex-col bg-oma-bg text-oma-text">
      <Navbar />
      <div className="flex-1">
        <ContactHome />
      </div>
      <Footer />
    </main>
  );
}
