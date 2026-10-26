"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BubbleCard } from "./motion";

const pillars = [
  {
    num: "01",
    title: "Professional Diction & Elocution",
    desc: "Speech therapy, phonics, accent refinement, and school-wide communication curricula led by certified specialists.",
    href: "/diction",
  },
  {
    num: "02",
    title: "Bespoke Website Design",
    desc: "Custom editorial and corporate websites engineered for speed, brand prestige, and measurable visitor conversion.",
    href: "/web-design",
  },
  {
    num: "03",
    title: "Mobile App Engineering",
    desc: "Native and cross-platform iOS & Android applications built for reliability, intuitive UX, and seamless scale.",
    href: "/mobile-apps",
  },
  {
    num: "04",
    title: "Custom Web Applications",
    desc: "Multi-user school portals, client dashboards, SaaS platforms, and workflow automation systems.",
    href: "/web-apps",
  },
];

const Service = () => {
  return (
    <section
      className="bg-[#FAF8F5] border-b border-[#E2E6F2] py-20 overflow-hidden"
      id="services"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Royal Cobalt Indigo & Brand Crimson Feature Card */}
        <motion.div
          className="rounded-3xl bg-[#202860] border-b-4 border-[#B82020] text-white p-8 sm:p-12 mb-14 relative overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#B82020]/30 border border-[#FF8A8A]/40 text-[#FF8A8A] text-xs font-bold uppercase tracking-widest">
              03 / Practice Directory
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Explore Our Comprehensive Suite of Services.
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl">
              Welcome to our dual-practice portfolio designed to elevate how
              your institution speaks and how your digital platforms perform.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/services">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block px-7 py-3.5 rounded-xl bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D12828] transition cursor-pointer shadow-md"
                >
                  View All Services →
                </motion.span>
              </Link>
              <Link href="/registration">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block px-7 py-3.5 rounded-xl border border-white/30 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition cursor-pointer"
                >
                  2024 Diction Awards
                </motion.span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="p-2.5 bg-white/10 border border-white/15 rounded-2xl shadow-2xl backdrop-blur-sm">
              <Image
                src="/images/oma-ads.jpg"
                alt="Oma Services Portfolio"
                width={420}
                height={200}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* 4 Numbered Practice Pillar Bubble Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {pillars.map((item) => (
            <motion.div
              key={item.num}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55 },
                },
              }}
            >
              <Link href={item.href} className="block h-full">
                <BubbleCard className="bg-white p-7 rounded-2xl border border-[#D5DCF0] shadow-sm hover:shadow-xl h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FDF2F2] border border-[#F3CACA] text-[#B82020] flex items-center justify-center font-editorial font-bold text-lg shrink-0 group-hover:bg-[#B82020] group-hover:text-white group-hover:border-[#B82020] transition-colors">
                      {item.num}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-editorial font-bold text-lg text-[#202860] group-hover:text-white transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-xs font-bold text-[#B82020] group-hover:text-[#FF8A8A] group-hover:translate-x-1 transition-all">
                          →
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#424B78] group-hover:text-slate-200 leading-relaxed mt-1.5 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </BubbleCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
