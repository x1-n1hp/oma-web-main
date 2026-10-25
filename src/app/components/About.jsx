"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const programs = [
  {
    image: "/images/DSC_6849.JPG",
    icon: "/images/program-icon-1.png",
    alt: "Adaptivity",
    title: "Adaptivity",
    iconClass: "w-16 mb-2",
  },
  {
    image: "/images/DSC_6802.JPG",
    icon: "/images/program-icon-2.png",
    alt: "Oral Excellence",
    title: "Oral Excellence",
    iconClass: "w-12 mb-2 sm:w-12 sm:h-16",
  },
  {
    image: "/images/DSC_6811.JPG",
    icon: "/images/program-icon-3.png",
    alt: "Flawless English",
    title: "Flawless English",
    iconClass: "w-16 mb-2",
  },
];

const About = () => {
  return (
    <div className="bg-slate-100 mx-auto my-10 px-5 overflow-hidden" id="about">
      {/* Main About Section */}
      <div className="sm:flex items-center">
        {/* Left Section */}
        <motion.div
          className="sm:w-1/2 p-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="image object-center text-center">
            <Image
              src="/images/Oma-pic.JPG"
              alt="About Us Image"
              width={500}
              height={500}
              className="mx-auto rounded-xl shadow-md"
            />
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="sm:w-1/2 p-5"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase tracking-wider text-xs font-semibold">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl text-gray-900">
              About <span className="text-indigo-600">Oma Services</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Oma Services, we are dedicated to helping individuals and organisations communicate better
              and build smarter. From world-class diction training to cutting-edge digital products, our
              passion for excellence spans every service we offer.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Our vision is to be a globally recognised leader in communication and digital services —
              setting the standard for quality, impact, and results across Nigeria and beyond.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Heading */}
      <motion.h2
        className="text-center mt-20 font-bold text-3xl sm:text-4xl text-indigo-900"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        What we offer
      </motion.h2>

      {/* Programs Grid */}
      <motion.div
        className="programs mx-auto mt-16 w-[90%] flex flex-wrap items-center justify-between gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {programs.map((prog, idx) => (
          <motion.div
            key={idx}
            className="program relative flex-[31%] sm:w-full mb-6 group cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
              },
            }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={prog.image}
                alt={prog.alt}
                className="w-full h-60 rounded-lg object-cover block transition-transform duration-500 group-hover:scale-105"
                width={300}
                height={200}
              />
            </div>
            <div className="caption absolute inset-0 bg-[rgba(0,15,152,0.4)] rounded-lg flex items-center justify-center flex-col text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
              <Image
                src={prog.icon}
                alt={prog.alt}
                className={prog.iconClass}
                width={60}
                height={60}
              />
              <p className="font-semibold tracking-wide">{prog.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
