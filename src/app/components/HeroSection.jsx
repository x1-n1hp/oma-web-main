"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const services = [
  { label: "Professional Diction", href: "/diction" },
  { label: "Website Design", href: "/web-design" },
  { label: "Mobile App Engineering", href: "/mobile-apps" },
  { label: "Web Applications", href: "/web-apps" },
];

const HeroSection = () => {
  return (
    <section className="bg-[#f6f9fc] overflow-hidden" id="home">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <motion.div
          className="col-span-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <motion.p
            className="text-[#c9922a] font-semibold text-sm mb-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Welcome to Oma Services
          </motion.p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1e2a5e] leading-tight mb-4 min-h-[1.25em]">
            <TypeAnimation
              sequence={[
                "Speak with clarity.",
                1200,
                "Build with purpose.",
                1200,
                "Grow with confidence.",
                1200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <motion.p
            className="text-[#425466] text-base sm:text-lg mb-8 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From world-class diction training to cutting-edge digital products —
            Oma Services helps individuals and organisations communicate better and build smarter.
          </motion.p>

          {/* Service pills */}
          <motion.div
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, staggerChildren: 0.08 }}
          >
            {services.map((s, idx) => (
              <motion.div
                key={s.href}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={s.href}
                  className="inline-block px-4 py-2 rounded-full border border-[#1e2a5e] text-[#1e2a5e] text-sm font-medium hover:bg-[#1e2a5e] hover:text-white transition-colors"
                >
                  {s.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="mailto:partnerships@omadiction.pro">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-lg bg-[#1e2a5e] text-white font-semibold hover:bg-[#162050] transition-colors shadow-md"
              >
                Start a project
              </motion.button>
            </a>
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-lg border-2 border-[#c9922a] text-[#c9922a] font-semibold hover:bg-[#c9922a] hover:text-white transition-colors shadow-sm"
              >
                See all services
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="col-span-5 flex justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-indigo-950 border-rose-900 border-8 w-[340px] h-[340px] lg:w-[380px] lg:h-[380px] relative items-center justify-center animate-bounce-slow max-920:animate-pulse-slow shadow-2xl">
              <Image
                src="/images/oma-hero.png"
                alt="oma image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={310}
                height={310}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;