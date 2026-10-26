"use client";

import ContactUs from "../components/Contact";
import { motion } from "framer-motion";

const ContactHome = () => {
  return (
    <div className="bg-[#FAF8F5] text-[#202860] min-h-screen flex flex-col overflow-hidden">
      {/* Royal Cobalt Indigo & Brand Crimson Editorial Hero Banner */}
      <section className="bg-[#202860] text-white py-20 px-6 border-b-4 border-[#B82020]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-[#B82020]/30 border border-[#FF8A8A]/40 text-[#FF8A8A] text-xs font-bold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Direct Concierge • Oma Services
          </motion.span>
          <motion.h1
            className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact{" "}
            <span className="italic font-normal text-[#FF8A8A]">
              Our Practice.
            </span>
          </motion.h1>
          <motion.p
            className="text-slate-200 mt-4 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We&apos;d love to hear from you. Reach out regarding school diction
            programmes, executive elocution, or custom digital product
            engineering.
          </motion.p>
        </div>
      </section>

      <ContactUs />
    </div>
  );
};

export default ContactHome;
