"use client";

import ContactUs from "../components/Contact";
import { motion } from "framer-motion";

const ContactHome = () => {
    return (
        <main className="bg-customBlue min-h-screen flex flex-col overflow-hidden">
            <section
                className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden"
                style={{
                    background: "linear-gradient(135deg, #00d2ff, #16bffd, #cb3066)", // Blue, Purple, Red gradient
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-30"></div>

                {/* Content */}
                <div className="relative z-10 text-center px-4">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-white"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Contact Us
                    </motion.h2>
                    <motion.p
                        className="text-white mt-4 text-lg md:text-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        We&apos;d love to hear from you. Get in touch with us today!
                    </motion.p>
                </div>
            </section>
            <ContactUs/>
        </main>
    );
};

export default ContactHome;
