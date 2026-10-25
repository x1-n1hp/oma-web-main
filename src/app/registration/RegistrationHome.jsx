"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const RegistrationHome = () => {
  return (
    <motion.div
      className="max-w-2xl mx-auto mt-16 p-10 bg-white rounded-xl shadow-lg border border-gray-100"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="flex flex-col items-center mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Image
            src="/images/diction-awards.jpg"
            alt="Diction Award"
            width={300}
            height={300}
            className="mb-6 rounded-lg shadow-sm object-cover"
          />
        </motion.div>
        <motion.h1
          className="text-4xl font-extrabold text-center text-blue-900 mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          2024 OMA Diction Awards Competition
        </motion.h1>
        <motion.p
          className="text-lg text-center text-gray-700 mb-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Welcome to the 9th edition of the Lagos OMA Diction Awards Competition!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/registration/register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 text-white text-lg px-10 py-3 rounded-lg hover:bg-blue-800 transition shadow-md"
            >
              Register Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RegistrationHome;
