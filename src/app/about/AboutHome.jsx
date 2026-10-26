"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BubbleCard } from "../components/motion";

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

const AboutPage = () => {
  return (
    <div className="bg-[#F5F5F7] text-[#202860] min-h-screen overflow-hidden">
      {/* Apple Store-Style Split Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-14 lg:py-20 border-b border-[#E2E6F2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-6 space-y-5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDF2F2] border border-[#F3CACA] text-[#B82020] text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B82020]"></span>
              01 / How It Started
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.12]">
              <span className="text-[#202860]">Our Heritage.</span>{" "}
              <span className="text-[#5A6494] font-normal">
                Global learning and digital transformation built for lasting
                impact.
              </span>
            </h1>

            <p className="text-[#424B78] text-base leading-relaxed">
              At Oma Services, we help individuals and organisations communicate
              better and build smarter. From diction training and speech therapy
              to websites, mobile apps, and custom web platforms — we bring
              expertise, creativity, and a genuine commitment to results.
            </p>

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
                  Digital Craft
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Framed Editorial Image */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, scale: 0.94, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <div className="relative">
              <div className="relative bg-white p-3 rounded-[28px] border border-[#D5DCF0] shadow-xl">
                <Image
                  src="/images/DSC_6849.JPG"
                  alt="Oma Services Leadership"
                  className="w-full h-80 sm:h-96 rounded-[20px] block object-cover"
                  width={600}
                  height={420}
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Architectural Stat Bubble Cards */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  },
                },
              }}
            >
              <BubbleCard className="rounded-[28px] bg-white border border-[#D5DCF0] shadow-sm p-6 sm:p-8 text-center h-full">
                <h2
                  className={`font-editorial text-3xl sm:text-4xl font-bold group-hover:text-white transition-colors ${
                    idx % 2 === 0 ? "text-[#B82020]" : "text-[#202860]"
                  }`}
                >
                  {stat.value}
                </h2>
                <p className="text-xs font-bold uppercase tracking-wider text-[#202860] group-hover:text-[#FF8A8A] mt-1.5 transition-colors">
                  {stat.label}
                </p>
                <p className="text-xs text-[#5A6494] group-hover:text-slate-300 mt-0.5 transition-colors">
                  {stat.detail}
                </p>
              </BubbleCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* OMA's Mission & The Diction Oracle Editorial Feature */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-10">
            <span className="inline-block bg-[#FDF2F2] border border-[#F3CACA] text-[#B82020] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
              02 / OMA&apos;s Mission
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight leading-snug">
              <span className="text-[#202860]">Our Mandate.</span>{" "}
              <span className="text-[#5A6494] font-normal">
                Empowering individuals and organisations to speak with clarity
                and build with purpose.
              </span>
            </h2>
          </div>

          <motion.div
            className="rounded-[28px] bg-[#202860] border-b-4 border-[#B82020] p-6 sm:p-10 text-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="lg:col-span-7">
              <Image
                src="/images/Oma-pic.JPG"
                alt="The Diction Oracle"
                className="rounded-[20px] shadow-lg w-full h-72 sm:h-80 object-cover border border-white/15"
                width={800}
                height={450}
              />
            </div>
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#B82020] text-white text-xs font-bold uppercase tracking-widest">
                The Diction Oracle
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold leading-snug">
                Setting the Benchmark for Spoken English &amp; Digital
                Excellence.
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Through school-wide elocution programmes, the annual Lagos OMA
                Diction Awards, and our software engineering studio, we partner
                with visionary educators and founders.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 rounded-full bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D12828] transition shadow-md"
                >
                  Partner With Us &gt;
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
