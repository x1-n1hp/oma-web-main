"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <div className="bg-[#FAF7F2] text-[#0F1729] min-h-screen overflow-hidden">
      {/* Editorial Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 lg:py-24 border-b border-[#E5DEC9]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-6 space-y-5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C59B27]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9A7418]">
                01 / How It Started
              </span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#0F1729] leading-[1.12]">
              Our Dream is{" "}
              <span className="italic font-normal text-[#9A7418]">
                Global Learning
              </span>{" "}
              &amp; Digital Transformation.
            </h1>

            <p className="text-[#475569] text-base leading-relaxed">
              At Oma Services, we help individuals and organisations communicate
              better and build smarter. From diction training and speech therapy
              to websites, mobile apps, and custom web platforms — we bring
              expertise, creativity, and a genuine commitment to results.
            </p>

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
              <div className="absolute -inset-3 rounded-2xl border border-[#C59B27]/50 translate-x-2 translate-y-2 pointer-events-none"></div>
              <div className="relative bg-white p-3 rounded-2xl border border-[#E5DEC9] shadow-xl">
                <Image
                  src="/images/DSC_6849.JPG"
                  alt="Oma Services Leadership"
                  className="w-full h-80 sm:h-96 rounded-xl block object-cover"
                  width={600}
                  height={420}
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Architectural Hairline Stat Ledger */}
        <motion.div
          className="mt-16 rounded-2xl bg-white border border-[#DFD3BC] shadow-sm grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#DFD3BC]"
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
              className="p-6 sm:p-8 text-center"
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
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F1729]">
                {stat.value}
              </h2>
              <p className="text-xs font-bold uppercase tracking-wider text-[#9A7418] mt-1.5">
                {stat.label}
              </p>
              <p className="text-xs text-[#64748B] mt-0.5">{stat.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* OMA's Mission & The Diction Oracle Editorial Feature */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <motion.span
              className="inline-block bg-[#FAF4E4] border border-[#E8D7B0] text-[#9A7418] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              02 / OMA&apos;s Mission
            </motion.span>
            <motion.h2
              className="font-editorial text-3xl sm:text-5xl font-bold text-[#0F1729] mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our Institutional Mandate
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-[#475569] mt-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              To empower individuals and organisations with world-class
              communication skills and purpose-built digital solutions — helping
              them speak with clarity, build with purpose, and grow with
              confidence.
            </motion.p>
          </div>

          <motion.div
            className="rounded-3xl bg-[#0F1729] p-6 sm:p-10 text-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="lg:col-span-7">
              <Image
                src="/images/Oma-pic.JPG"
                alt="The Diction Oracle"
                className="rounded-2xl shadow-lg w-full h-72 sm:h-80 object-cover border border-white/15"
                width={800}
                height={450}
              />
            </div>
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/40 text-[#E5C158] text-xs font-bold uppercase tracking-widest">
                The Diction Oracle
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold leading-snug">
                Setting the Benchmark for Spoken English &amp; Digital
                Excellence.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Through school-wide elocution programmes, the annual Lagos OMA
                Diction Awards, and our software engineering studio, we partner
                with visionary educators and founders.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 rounded-xl bg-[#C59B27] text-[#0F1729] text-xs font-bold uppercase tracking-wider hover:bg-[#d4a932] transition"
                >
                  Partner With Us →
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
