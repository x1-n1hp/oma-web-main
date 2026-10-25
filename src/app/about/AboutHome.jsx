"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "10", label: "Years Experience" },
  { value: "50+", label: "Schools" },
  { value: "830+", label: "Positive Reviews" },
  { value: "10K", label: "Trusted Students" },
];

const AboutPage = () => {
  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-rose-600 font-semibold mb-2 inline-block border-b-2 border-indigo-600">
            How It Started
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our Dream is <br /> Global Learning <br /> Transformation
          </h1>
          <p className="text-gray-600 mt-4 leading-relaxed">
            At Oma Services, we help individuals and organisations communicate better and build smarter.
            From diction training and speech therapy to websites, mobile apps, and custom web platforms —
            we bring expertise, creativity, and a genuine commitment to results.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="bg-blue-100 rounded-2xl p-4 shadow-sm">
            <Image
              src="/images/DSC_6849.JPG"
              alt="Program 1"
              className="w-full rounded-lg block object-cover"
              width={500}
              height={350}
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section with Staggered Scroll Reveal */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-xl shadow-md border border-gray-100"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
                },
              }}
            >
              <h2 className="text-3xl font-bold text-gray-900">{stat.value}</h2>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col items-center text-center py-16 px-8 max-w-5xl mx-auto">
        <motion.span
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          OMA&apos;s Mission
        </motion.span>
        <motion.h2
          className="text-4xl font-bold text-indigo-600 mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mt-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          To empower individuals and organisations with world-class communication skills and purpose-built digital solutions — helping them speak with clarity, build with purpose, and grow with confidence.
        </motion.p>
        <motion.div
          className="mt-8 w-full max-w-4xl"
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <Image
            src="/images/Oma-pic.JPG"
            alt="Business professionals walking"
            className="rounded-xl shadow-lg w-full object-cover"
            width={800}
            height={400}
          />
        </motion.div>
        <motion.h3
          className="font-bold bg-gray-200 text-indigo-600 px-6 py-2 rounded-full mt-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          The Diction Oracle
        </motion.h3>
      </section>
    </main>
  );
};

export default AboutPage;
