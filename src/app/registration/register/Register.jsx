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
      "Where words stir hearts and win crowds. Your pupil recites a celebrated poem with captivating emotion, stage courage, and polished British diction.",
    image: "/images/storyteller.png",
    link: "/registration/register/recitation",
  },
  {
    numeral: "II",
    label: "Category B",
    title: "Words Often Mispronounced",
    description:
      "Turning tricky English words into trophies. A thrilling phonetic challenge where pupils conquer silent letters, stress patterns, and unexpected spellings.",
    image: "/images/talk.png",
    link: "/registration/register/mispronounced",
  },
];

const Register = () => {
  return (
    <div className="flex flex-col flex-1 bg-[#F5F5F7] dark:bg-[#0A0E24] text-[#202860] dark:text-white py-16 px-6 overflow-hidden transition-colors duration-300">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-[#FDF2F2] dark:bg-[#B82020]/20 border border-[#F3CACA] dark:border-[#B82020]/40 text-[#B82020] dark:text-[#FF8A8A] text-xs font-bold uppercase tracking-widest mb-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            The 2024 Stage of Champions
          </motion.span>
          <motion.h1
            className="text-3xl sm:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-[#202860] dark:text-white transition-colors duration-300">Choose Your Track.</span>{" "}
            <span className="text-[#5A6494] dark:text-[#94A3D3] font-semibold transition-colors duration-300">
              Give your pupil a stage to shine and win.
            </span>
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base text-[#424B78] dark:text-[#94A3D3] mt-3 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Select Category A for master poetry recitation, or Category B for the thrilling
            words mispronounced challenge. Both tracks feature equal ₦50,000 top cash prizes,
            gleaming trophies, and national television coverage.
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
              className="bg-white dark:bg-[#131A3E] rounded-[28px] p-8 sm:p-10 border border-[#D5DCF0] dark:border-[#232E66] shadow-lg"
              contentClassName="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E2E6F2] dark:border-[#232E66] group-hover:border-white/15 transition-colors duration-500">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B82020] dark:text-[#FF8A8A] group-hover:text-[#FF8A8A] transition-colors duration-500">
                    {cat.label}
                  </span>
                  <span className="w-9 h-9 rounded-lg bg-[#FDF2F2] dark:bg-[#B82020]/20 group-hover:bg-[#B82020] border border-[#F3CACA] dark:border-[#B82020]/40 group-hover:border-[#B82020] text-[#B82020] dark:text-[#FF8A8A] group-hover:text-white font-editorial font-bold text-sm flex items-center justify-center transition-colors duration-500">
                    {cat.numeral}
                  </span>
                </div>

                <div className="w-24 h-24 rounded-2xl bg-[#FAF8F5] dark:bg-[#0A0E24]/60 group-hover:bg-white/95 border border-[#E2E6F2] dark:border-[#232E66] p-4 mb-6 flex items-center justify-center mx-auto transition-colors duration-500">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>

                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#202860] dark:text-white group-hover:text-white mb-3 text-center transition-colors duration-500">
                  {cat.title}
                </h2>
                <p className="text-[#424B78] dark:text-[#94A3D3] group-hover:text-slate-200 text-center mb-8 text-xs sm:text-sm leading-relaxed transition-colors duration-500">
                  {cat.description}
                </p>
              </div>

              <Link href={cat.link} className="w-full block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#B82020] text-white group-hover:bg-white group-hover:text-[#202860] text-xs font-bold uppercase tracking-wider transition-colors duration-500 shadow-md"
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
