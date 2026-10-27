import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ServiceHome from "./ServiceHome";

const ServicePage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#F5F5F7] dark:bg-[#0A0E24] text-[#202860] dark:text-white transition-colors duration-300">
      <Navbar />
      <ServiceHome />
      <Footer />
    </main>
  );
};

export default ServicePage;
