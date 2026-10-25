import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Abouthome from "@/app/about/AboutHome";

const AboutPage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#FAF7F2] text-[#0F1729]">
      <Navbar />
      <Abouthome />
      <Footer />
    </main>
  );
};

export default AboutPage;
