"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BubbleCard } from "./motion";

const programs = [
  {
    numeral: "I",
    image: "/images/DSC_6849.JPG",
    icon: "/images/program-icon-1.png",
    alt: "Adaptivity",
    title: "Adaptivity",
    subtitle: "Tailored Coaching & Custom Architecture",
    description:
      "Programmes and digital solutions bespoke-engineered to match the exact needs of each school, executive, or enterprise.",
  },
  {
    numeral: "II",
    image: "/images/DSC_6802.JPG",
    icon: "/images/program-icon-2.png",
    alt: "Oral Excellence",
    title: "Oral Excellence",
    subtitle: "Phonetic Precision & Stage Command",
    description:
      "Structured diction, elocution, and speech therapy curricula that instil lasting vocal confidence and clarity.",
  },
  {
    numeral: "III",
    image: "/images/DSC_6811.JPG",
    icon: "/images/program-icon-3.png",
    alt: "Flawless English",
    title: "Flawless English",
    subtitle: "Global Standard Articulation",
    description:
      "Elevating spoken and written communication to international standards across classrooms and boardrooms.",
  },
];

const stats = [
  {
    value: "10+",
    label: "Years Experience",
    detail: "Proven institutional track record",
  },
  {
    value: "50+",
    label: "Partner Schools",
    detail: "Active curriculum deployment",
  },
  {
    value: "830+",
    label: "Positive Reviews",
    detail: "Verified client endorsements",
  },
  {
    value: "10K+",
    label: "Trusted Students",
    detail: "Coached across Nigeria & beyond",
  },
];

const About = () => {
  return (
    <section
      className="bg-white border-b border-[#E2E6F2] py-20 overflow-hidden"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Narrative */}
          <motion.div
            className="lg:col-span-6 space-y-5"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#B82020]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B82020]">
                01 / Our Heritage &amp; Mandate
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#202860] leading-tight">
              About{" "}
              <span className="italic font-normal text-[#B82020]">
                Oma Services
              </span>
            </h2>

            <p className="text-[#424B78] text-base leading-relaxed">
              At Oma Services, we are dedicated to helping individuals and
              organisations communicate better and build smarter. From
              world-class diction training to cutting-edge digital products, our
              passion for excellence spans every service we offer.
            </p>
            <p className="text-[#424B78] text-base leading-relaxed">
              Our vision is to be a globally recognised leader in communication
              and digital services — setting the standard for quality, impact,
              and results across Nigeria and beyond.
            </p>

            {/* 3-Pillar Hairline Summary */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#E2E6F2]">
              <div className="pt-3">
                <div className="text-[11px] font-bold text-[#B82020] uppercase tracking-wider">
                  Pillar I
                </div>
                <div className="text-sm font-bold text-[#202860] mt-0.5">
                  Adaptivity
                </div>
              </div>
              <div className="pt-3 border-l border-[#E2E6F2] pl-3">
                <div className="text-[11px] font-bold text-[#202860] uppercase tracking-wider">
                  Pillar II
                </div>
                <div className="text-sm font-bold text-[#202860] mt-0.5">
                  Oral Excellence
                </div>
              </div>
              <div className="pt-3 border-l border-[#E2E6F2] pl-3">
                <div className="text-[11px] font-bold text-[#B82020] uppercase tracking-wider">
                  Pillar III
                </div>
                <div className="text-sm font-bold text-[#202860] mt-0.5">
                  Flawless English
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Asymmetric Editorial Photo Collage */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div className="sm:col-span-7 relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-[#D5DCF0]">
                <Image
                  src="/images/Oma-pic.JPG"
                  alt="About Oma Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="sm:col-span-5 space-y-4">
                <div className="relative h-40 rounded-2xl overflow-hidden shadow-md border border-[#D5DCF0]">
                  <Image
                    src="/images/DSC_6802.JPG"
                    alt="Oma Training Session"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 rounded-2xl bg-[#202860] text-white border-l-4 border-[#B82020] shadow-md">
                  <p className="text-[11px] uppercase tracking-widest text-[#FF8A8A] font-bold mb-1.5">
                    Our Mission
                  </p>
                  <p className="font-editorial text-xs sm:text-sm leading-relaxed text-slate-200 italic">
                    &ldquo;Empowering individuals and organisations to speak
                    with clarity and build with purpose.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Architectural Stat Bubble Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, idx) => (
            <BubbleCard
              key={stat.label}
              className="rounded-2xl bg-[#FAF8F5] border border-[#D5DCF0] p-6 sm:p-8 text-center shadow-sm"
            >
              <div
                className={`font-editorial text-3xl sm:text-4xl font-bold group-hover:text-white transition-colors ${
                  idx % 2 === 0 ? "text-[#B82020]" : "text-[#202860]"
                }`}
              >
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#202860] group-hover:text-[#FF8A8A] mt-1.5 transition-colors">
                {stat.label}
              </div>
              <div className="text-xs text-[#5A6494] group-hover:text-slate-300 mt-0.5 transition-colors">
                {stat.detail}
              </div>
            </BubbleCard>
          ))}
        </motion.div>

        {/* What We Offer Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B82020]">
            02 / Core Standards
          </span>
          <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#202860] mt-2">
            What We Offer
          </h3>
          <p className="text-sm sm:text-base text-[#424B78] mt-2">
            Three foundational pillars that define every training cohort and
            engineering engagement.
          </p>
        </motion.div>

        {/* 3 Editorial Program Bubble Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {programs.map((prog) => (
            <motion.div
              key={prog.title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  },
                },
              }}
            >
              <BubbleCard
                className="rounded-2xl bg-[#FAF8F5] border border-[#D5DCF0] shadow-sm hover:shadow-xl h-full"
                contentClassName="flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden bg-[#202860]">
                  <Image
                    src={prog.image}
                    alt={prog.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202860]/90 via-[#202860]/25 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-lg bg-[#FDF2F2] group-hover:bg-[#B82020] border border-[#F3CACA] group-hover:border-[#B82020] text-[#B82020] group-hover:text-white font-editorial font-bold text-sm flex items-center justify-center shadow transition-colors">
                    {prog.numeral}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#FF8A8A]">
                      {prog.subtitle}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-editorial text-xl font-bold text-[#202860] group-hover:text-white transition-colors">
                      {prog.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#424B78] group-hover:text-slate-200 mt-2 leading-relaxed transition-colors">
                      {prog.description}
                    </p>
                  </div>
                </div>
              </BubbleCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
