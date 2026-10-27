import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Register from "./Register";

const RegistrationPage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#F5F5F7] dark:bg-[#0A0E24] text-[#202860] dark:text-white transition-colors duration-300">
      <Navbar />
      <Register />
      <Footer />
    </main>
  );
};

export default RegistrationPage;
