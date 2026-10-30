"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BubbleCard, ShelfCarousel } from "./motion";

const programs = [
  {
    numeral: "I",
    image: "/images/DSC_6849.JPG",
    alt: "Child-First Empathy",
    title: "Child-First Empathy",
    subtitle: "Nurturing Self-Esteem & Voice",
    description:
      "We build a safe, encouraging environment where quiet, hesitant pupils find their voice without fear of ridicule or mistakes.",
  },
  {
    numeral: "II",
    image: "/images/DSC_6802.JPG",
    alt: "Proprietor Peace of Mind",
    title: "Proprietor Peace of Mind",
    subtitle: "Complete Curriculum Handover",
    description:
      "We provide weekly lesson plans, audio recordings, and termly parent reports so your leadership never stresses over speech standards.",
  },
  {
    numeral: "III",
    image: "/images/DSC_6811.JPG",
    alt: "Market Leadership",
    title: "Market Leadership",
    subtitle: "Standing Out in Lagos & Beyond",
    description:
      "Give your school the prestige factor that makes prospective parents say 'This is where our child belongs.'",
  },
];

const stats = [
  {
    value: "100%",
    label: "Parent Satisfaction",
    detail: "At speech day & graduation showcases",
  },
  {
    value: "50+",
    label: "Proud Schools",
    detail: "Dominating their educational zones",
  },
  {
    value: "₦50,000",
    label: "Prize Cheques",
    detail: "Inspiring student excellence",
  },
  {
    value: "10K+",
    label: "Proud Parents",
    detail: "Celebrating articulate children",
  },
];

const About = () => {
  return (
    <section
      className="bg-[#F5F5F7] dark:bg-[#0A0E24] border-b border-[#E2E6F2] dark:border-[#232E66] py-16 overflow-hidden transition-colors duration-300"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* ===================================================================
            UPGRADE #5: "THE OMA DIFFERENCE" COLOR-KEYWORD BENTO SHELF
            =================================================================== */}
        <ShelfCarousel
          title="The OMA Difference."
          subtitle="Even more reasons schools and leaders partner with us."
          scrollAmount={330}
        >
          <BubbleCard className="snap-start shrink-0 w-[285px] sm:w-[310px] rounded-[28px] bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] p-7 shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-[#FDF2F2] dark:bg-[#B82020]/20 border border-[#F3CACA] dark:border-[#B82020]/40 text-[#B82020] dark:text-[#FF8A8A] group-hover:bg-[#B82020] group-hover:text-white flex items-center justify-center font-editorial font-bold text-lg mb-4 transition-colors">
              3x
            </div>
            <p className="text-lg font-bold text-[#202860] dark:text-white group-hover:text-white leading-snug transition-colors">
              Enjoy a{" "}
              <span className="text-[#B82020] dark:text-[#FF8A8A] group-hover:text-[#FF8A8A]">
                3x admissions inquiry boost
              </span>{" "}
              when visiting parents hear your pupils speak articulate English.
            </p>
          </BubbleCard>

          <BubbleCard className="snap-start shrink-0 w-[285px] sm:w-[310px] rounded-[28px] bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] p-7 shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-[#EFF2FA] dark:bg-[#18214C] border border-[#D5DCF0] dark:border-[#232E66] text-[#202860] dark:text-white group-hover:bg-[#B82020] group-hover:text-white flex items-center justify-center font-editorial font-bold text-sm mb-4 transition-colors">
              Zero
            </div>
            <p className="text-lg font-bold text-[#202860] dark:text-white group-hover:text-white leading-snug transition-colors">
              Deliver{" "}
              <span className="text-[#B82020] dark:text-[#FF8A8A] group-hover:text-[#FF8A8A]">
                zero headaches for school management
              </span>{" "}
              with our full syllabus, teacher workshops &amp; termly audits.
            </p>
          </BubbleCard>

          <BubbleCard className="snap-start shrink-0 w-[285px] sm:w-[310px] rounded-[28px] bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] p-7 shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-[#FDF2F2] dark:bg-[#B82020]/20 border border-[#F3CACA] dark:border-[#B82020]/40 text-[#B82020] dark:text-[#FF8A8A] group-hover:bg-[#B82020] group-hover:text-white flex items-center justify-center font-editorial font-bold text-lg mb-4 transition-colors">
              10K+
            </div>
            <p className="text-lg font-bold text-[#202860] dark:text-white group-hover:text-white leading-snug transition-colors">
              Over{" "}
              <span className="text-[#B82020] dark:text-[#FF8A8A] group-hover:text-[#FF8A8A]">
                10,000 confident young voices created
              </span>{" "}
              transforming shy children into poised school stage laureates.
            </p>
          </BubbleCard>

          <BubbleCard className="snap-start shrink-0 w-[285px] sm:w-[310px] rounded-[28px] bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] p-7 shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-[#EFF2FA] dark:bg-[#18214C] border border-[#D5DCF0] dark:border-[#232E66] text-[#202860] dark:text-white group-hover:bg-[#B82020] group-hover:text-white flex items-center justify-center font-editorial font-bold text-lg mb-4 transition-colors">
              ★
            </div>
            <p className="text-lg font-bold text-[#202860] dark:text-white group-hover:text-white leading-snug transition-colors">
              Earn{" "}
              <span className="text-[#B82020] dark:text-[#FF8A8A] group-hover:text-[#FF8A8A]">
                standing ovations from parents
              </span>{" "}
              at speech days, carol services, and graduations.
            </p>
          </BubbleCard>
        </ShelfCarousel>

        {/* Architectural Stat Bubble Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, idx) => (
            <BubbleCard
              key={stat.label}
              className="rounded-[28px] bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] p-6 sm:p-8 text-center shadow-sm"
            >
              <div
                className={`font-editorial text-3xl sm:text-4xl font-bold group-hover:text-white transition-colors ${
                  idx % 2 === 0 ? "text-[#B82020] dark:text-[#FF8A8A]" : "text-[#202860] dark:text-white"
                }`}
              >
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#202860] dark:text-slate-200 group-hover:text-[#FF8A8A] mt-1.5 transition-colors">
                {stat.label}
              </div>
              <div className="text-xs text-[#5A6494] dark:text-[#94A3D3] group-hover:text-slate-300 mt-0.5 transition-colors">
                {stat.detail}
              </div>
            </BubbleCard>
          ))}
        </motion.div>

        {/* Core Standards Shelf Header (Apple Store Two-Tone Split Heading) */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              <span className="text-[#202860] dark:text-white transition-colors duration-300">Core Standards.</span>{" "}
              <span className="text-[#5A6494] dark:text-[#94A3D3] font-normal transition-colors duration-300">
                Putting student transformation and school growth at the center.
              </span>
            </h3>
          </div>

          {/* 3 Tall Apple-Style 28px Program Bubble Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((prog) => (
              <BubbleCard
                key={prog.title}
                className="rounded-[28px] bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] shadow-sm hover:shadow-xl h-full"
                contentClassName="flex flex-col justify-between"
              >
                {/* Top-Anchored Copy */}
                <div className="p-7 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#B82020] dark:text-[#FF8A8A] group-hover:text-[#FF8A8A] transition-colors">
                      {prog.subtitle}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#FDF2F2] dark:bg-[#B82020]/20 group-hover:bg-[#B82020] text-[#B82020] dark:text-[#FF8A8A] group-hover:text-white font-editorial font-bold text-xs flex items-center justify-center transition-colors">
                      {prog.numeral}
                    </span>
                  </div>
                  <h4 className="font-editorial text-2xl font-bold text-[#202860] dark:text-white group-hover:text-white transition-colors">
                    {prog.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#424B78] dark:text-[#94A3D3] group-hover:text-slate-200 mt-2 leading-relaxed transition-colors">
                    {prog.description}
                  </p>
                </div>

                {/* Bottom Full-Bleed Visual */}
                <div className="relative mx-4 mb-4 h-52 rounded-[20px] overflow-hidden bg-[#202860]">
                  <Image
                    src={prog.image}
                    alt={prog.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202860]/80 via-transparent to-transparent"></div>
                </div>
              </BubbleCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
