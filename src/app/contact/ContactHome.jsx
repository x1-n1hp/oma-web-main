"use client";

import ContactUs from "../components/Contact";
import { motion } from "framer-motion";

const ContactHome = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-[#0A0E24] text-[#202860] dark:text-white min-h-screen flex flex-col overflow-hidden transition-colors duration-300">
      {/* Apple Store Style Two-Tone Header */}
      <section className="max-w-7xl mx-auto w-full px-6 pt-12 pb-2">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F2] dark:bg-[#B82020]/20 border border-[#F3CACA] dark:border-[#B82020]/40 text-[#B82020] dark:text-[#FF8A8A] text-[11px] font-bold uppercase tracking-widest mb-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B82020]" />
          Let&apos;s Elevate Your School Together
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-[#202860] dark:text-white transition-colors duration-300">We&apos;d Love to Hear From You.</span>{" "}
          <span className="text-[#5A6494] dark:text-[#94A3D3] font-semibold transition-colors duration-300">
            Take the first step toward transforming your students and your school.
          </span>
        </motion.h1>
      </section>

      <ContactUs />
    </div>
  );
};

export default ContactHome;
