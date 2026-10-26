import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Abouthome from "@/app/about/AboutHome";

const AboutPage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#202860]">
      <Navbar />
      <Abouthome />
      <Footer />
    </main>
  );
};

export default AboutPage;
