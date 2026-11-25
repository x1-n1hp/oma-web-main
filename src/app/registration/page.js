import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RegistrationHome from "./RegistrationHome";

export default function RegistrationPage() {
  return (
    <main className="oma-grain flex min-h-screen flex-col bg-oma-bg text-oma-text">
      <Navbar />
      <div className="flex-1">
        <RegistrationHome />
      </div>
      <Footer />
    </main>
  );
}
