"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      className="bg-white border-b border-[#E5DEC9] py-20 overflow-hidden"
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
              <span className="h-px w-8 bg-[#C59B27]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9A7418]">
                01 / Our Heritage &amp; Mandate
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F1729] leading-tight">
              About{" "}
              <span className="italic font-normal text-[#9A7418]">
                Oma Services
              </span>
            </h2>

            <p className="text-[#475569] text-base leading-relaxed">
              At Oma Services, we are dedicated to helping individuals and
              organisations communicate better and build smarter. From
              world-class diction training to cutting-edge digital products, our
              passion for excellence spans every service we offer.
            </p>
            <p className="text-[#475569] text-base leading-relaxed">
              Our vision is to be a globally recognised leader in communication
              and digital services — setting the standard for quality, impact,
              and results across Nigeria and beyond.
            </p>

            {/* 3-Pillar Hairline Summary */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#E5DEC9]">
              <div className="pt-3">
                <div className="text-[11px] font-bold text-[#9A7418] uppercase tracking-wider">
                  Pillar I
                </div>
                <div className="text-sm font-bold text-[#0F1729] mt-0.5">
                  Adaptivity
                </div>
              </div>
              <div className="pt-3 border-l border-[#E5DEC9] pl-3">
                <div className="text-[11px] font-bold text-[#9A7418] uppercase tracking-wider">
                  Pillar II
                </div>
                <div className="text-sm font-bold text-[#0F1729] mt-0.5">
                  Oral Excellence
                </div>
              </div>
              <div className="pt-3 border-l border-[#E5DEC9] pl-3">
                <div className="text-[11px] font-bold text-[#9A7418] uppercase tracking-wider">
                  Pillar III
                </div>
                <div className="text-sm font-bold text-[#0F1729] mt-0.5">
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
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-7 relative h-80 rounded-2xl overflow-hidden shadow-lg border border-[#E5DEC9]">
                <Image
                  src="/images/Oma-pic.JPG"
                  alt="About Oma Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-5 space-y-4">
                <div className="relative h-40 rounded-2xl overflow-hidden shadow-md border border-[#E5DEC9]">
                  <Image
                    src="/images/DSC_6802.JPG"
                    alt="Oma Training Session"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 rounded-2xl bg-[#0F1729] text-white border border-[#0F1729] shadow-md">
                  <p className="text-[11px] uppercase tracking-widest text-[#E5C158] font-bold mb-1.5">
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

        {/* Architectural Hairline Stat Ledger */}
        <motion.div
          className="rounded-2xl bg-[#FAF7F2] border border-[#DFD3BC] grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#DFD3BC] mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="p-6 sm:p-8 text-center">
              <div className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F1729]">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#9A7418] mt-1.5">
                {stat.label}
              </div>
              <div className="text-xs text-[#64748B] mt-0.5">{stat.detail}</div>
            </div>
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
          <span className="text-xs font-bold uppercase tracking-widest text-[#9A7418]">
            02 / Core Standards
          </span>
          <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F1729] mt-2">
            What We Offer
          </h3>
          <p className="text-sm sm:text-base text-[#475569] mt-2">
            Three foundational pillars that define every training cohort and
            engineering engagement.
          </p>
        </motion.div>

        {/* 3 Editorial Program Cards */}
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
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-[#FAF7F2] border border-[#E5DEC9] hover:border-[#C59B27] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 w-full overflow-hidden bg-[#0F1729]">
                <Image
                  src={prog.image}
                  alt={prog.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1729]/80 via-[#0F1729]/20 to-transparent"></div>
                <div className="absolute top-4 left-4 w-9 h-9 rounded-lg bg-[#FAF4E4] border border-[#E8D7B0] text-[#9A7418] font-editorial font-bold text-sm flex items-center justify-center shadow">
                  {prog.numeral}
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E5C158]">
                    {prog.subtitle}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-editorial text-xl font-bold text-[#0F1729]">
                    {prog.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                    {prog.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
