"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 overflow-hidden" id="contact">
      {/* Wrapper to center the content */}
      <div className="max-w-screen-lg mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h2 className="text-2xl font-semibold text-indigo-600 uppercase tracking-wide">
            Contact Us
          </h2>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          {/* Left: Contact Information */}
          <motion.div
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
            <p className="text-gray-600 leading-relaxed">
              Thank you for your interest in Oma Services. We are here to assist
              you and provide the information you need. Whether you have questions
              about our diction programmes, digital services, or want to discuss a project,
              we&apos;re just a message away.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="p-2 bg-indigo-50 rounded-full">
                  <Image
                    src="/images/mail-icon.png"
                    alt="Email Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <a
                  href="mailto:partnerships@omadiction.pro"
                  className="text-sm text-gray-800 font-medium hover:text-indigo-600 transition-colors"
                >
                  partnerships@omadiction.pro
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="lg:w-1/2 bg-white rounded-xl shadow-md p-8 border border-gray-100"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h3>
            <form
              action="https://submit-form.com/LvrjBvQzY"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full border border-gray-300 rounded-lg shadow-sm p-3 mt-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 rounded-lg shadow-sm p-3 mt-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Enter your message"
                  required
                  className="resize-none w-full border border-gray-300 rounded-lg shadow-sm p-3 mt-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition"
                >
                  Submit now →
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
