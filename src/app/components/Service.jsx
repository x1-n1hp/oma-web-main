"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Service = () => {
  return (
    <section className="bg-slate-200 text-indigo-600 py-16 overflow-hidden" id="services">
      <div className="text-center mb-12 px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          Explore Our Services
        </motion.h2>

        <motion.p
          className="text-paragraphColor mt-6 font-medium max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          Welcome to our comprehensive range of services designed to meet your diverse needs.
          Discover how we can elevate your expectations.
        </motion.p>

        {/* Image after paragraph */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <motion.div
            className="p-2 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
          >
            <Image
              src="/images/oma-ads.jpg"
              alt="Our Services"
              width={400}
              height={160}
              className="rounded-lg object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Button to Services Page */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <Link href="/services">
          <motion.span
            className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services →
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
};

export default Service;
