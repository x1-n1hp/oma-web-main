import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RegistrationHome from "@/app/registration/RegistrationHome";

const RegistrationPage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#F5F5F7] dark:bg-[#0A0E24] text-[#202860] dark:text-white transition-colors duration-300">
      <Navbar />
      <RegistrationHome />
      <Footer />
    </main>
  );
};

export default RegistrationPage;
