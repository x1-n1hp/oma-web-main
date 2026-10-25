"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BubbleCard } from "../../components/motion";

const categories = [
  {
    numeral: "I",
    label: "Category A",
    title: "Poetry Recitation",
    description:
      "Showcase your vocal expression, cadence, and stage command in the 2024 OMA Diction Awards Competition.",
    image: "/images/storyteller.png",
    link: "/registration/register/recitation",
  },
  {
    numeral: "II",
    label: "Category B",
    title: "Words Often Mispronounced",
    description:
      "Demonstrate your mastery of challenging English vocabulary, stress patterns, and phonetic precision.",
    image: "/images/talk.png",
    link: "/registration/register/mispronounced",
  },
];

const Register = () => {
  return (
    <div className="flex flex-col flex-1 bg-[#FAF7F2] text-[#0F1729] py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-[#FAF4E4] border border-[#E8D7B0] text-[#9A7418] text-xs font-bold uppercase tracking-widest mb-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            9th Edition • Candidate Enrollment
          </motion.span>
          <motion.h1
            className="font-editorial text-4xl sm:text-5xl font-bold text-[#0F1729]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Select Your Competition Category
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            To enroll a pupil, choose a competition track below for the 2024
            Lagos OMA Diction Awards Competition (₦50,000 Top Prize per
            category).
          </motion.p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <BubbleCard
              key={cat.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.15 + idx * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-[#DFD3BC] shadow-lg"
              contentClassName="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5DEC9] group-hover:border-white/15 transition-colors duration-500">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9A7418] group-hover:text-[#E5C158] transition-colors duration-500">
                    {cat.label}
                  </span>
                  <span className="w-9 h-9 rounded-lg bg-[#FAF4E4] group-hover:bg-white/10 border border-[#E8D7B0] group-hover:border-[#C59B27]/50 text-[#9A7418] group-hover:text-[#E5C158] font-editorial font-bold text-sm flex items-center justify-center transition-colors duration-500">
                    {cat.numeral}
                  </span>
                </div>

                <div className="w-24 h-24 rounded-2xl bg-[#FAF7F2] group-hover:bg-white/95 border border-[#E5DEC9] p-4 mb-6 flex items-center justify-center mx-auto transition-colors duration-500">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>

                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F1729] group-hover:text-white mb-3 text-center transition-colors duration-500">
                  {cat.title}
                </h2>
                <p className="text-[#475569] group-hover:text-slate-300 text-center mb-8 text-xs sm:text-sm leading-relaxed transition-colors duration-500">
                  {cat.description}
                </p>
              </div>

              <Link href={cat.link} className="w-full block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#0F1729] text-white group-hover:bg-[#C59B27] group-hover:text-[#0F1729] text-xs font-bold uppercase tracking-wider transition-colors duration-500 shadow-md"
                >
                  Enroll in {cat.title} →
                </motion.button>
              </Link>
            </BubbleCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Register;
