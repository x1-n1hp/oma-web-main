"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Speech Therapy",
    description: "Enhancing communication skills through expert speech correction and vocal training.",
    image: "/images/speaker.png",
  },
  {
    title: "Diction Training",
    description: "Perfecting pronunciation and articulation for clear, confident speech delivery.",
    image: "/images/school.png",
  },
  {
    title: "Phonics Classes",
    description: "Building strong reading and spelling skills through phonetic awareness techniques.",
    image: "/images/classroom.png",
  },
];

const additionalServices = [
  {
    category: "Media Communication Department",
    services: [
      { title: "Website Design", description: "Creating visually stunning and user-friendly websites.", icon: "/images/graphic-design.png" },
      { title: "Website Management", description: "Ensuring your website runs smoothly and efficiently.", icon: "/images/data-management.png" },
      { title: "Website Marketing", description: "Driving traffic and engagement to your website.", icon: "/images/marketing.png" },
      { title: "Website Advertising", description: "Promoting your website to reach a wider audience.", icon: "/images/digital-marketing.png" },
    ],
  },
  {
    category: "App Development",
    services: [
      { title: "App Design", description: "Designing intuitive and engaging mobile applications.", icon: "/images/edit.png" },
      { title: "App Management", description: "Maintaining and updating your mobile applications.", icon: "/images/digital-content.png" },
      { title: "App Marketing", description: "Promoting your app to maximize downloads and usage.", icon: "/images/advertisig-agency.png" },
      { title: "App Advertising", description: "Advertising your app to reach your target audience.", icon: "/images/mobile.png" },
    ],
  },
  {
    category: "Social Media Services",
    services: [
      { title: "Social Media Designs", description: "Creating captivating designs for your social media.", icon: "/images/advertising.png" },
      { title: "Monetization", description: "Helping you monetize platforms like Instagram, Facebook, and more.", icon: "/images/monetization.png" },
      { title: "Instagram", description: "Optimizing and managing your Instagram presence.", icon: "/images/instagram.png" },
      { title: "Facebook", description: "Building and growing your Facebook audience.", icon: "/images/facebook.png" },
      { title: "YouTube", description: "Enhancing your YouTube channel for better engagement.", icon: "/images/youtube.png" },
      { title: "Spotify & Podcast", description: "Promoting your Spotify and podcast content effectively.", icon: "/images/spotify.png" },
    ],
  },
];

const awardImages = [
  "/images/DSC_6524[40].JPG",
  "/images/DSC_6811.JPG",
  "/images/DSC_6802.JPG",
  "/images/DSC_6580.JPG",
  "/images/DSC_6823.JPG",
  "/images/DSC_6849.JPG",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const ServicePage = () => {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20 text-center"
        style={{ backgroundImage: "url('/images/blue-background.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Oma Services
          </motion.h2>
          <motion.p
            className="font-medium text-gray-200 mt-4 mx-auto leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            From world-class diction training to cutting-edge digital products — explore our full range of services below.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Link href="/diction" className="px-5 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-colors backdrop-blur-sm">Professional Diction</Link>
            <Link href="/web-design" className="px-5 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-colors backdrop-blur-sm">Website Design</Link>
            <Link href="/mobile-apps" className="px-5 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-colors backdrop-blur-sm">Mobile Apps</Link>
            <Link href="/web-apps" className="px-5 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-colors backdrop-blur-sm">Web Applications</Link>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 px-8 pb-16 mt-16 max-w-6xl mx-auto w-full"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={200}
              height={150}
              className="mx-auto h-36 object-contain"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Services */}
      {additionalServices.map((category, index) => (
        <section key={index} className="px-8 pb-16 max-w-6xl mx-auto w-full">
          <motion.h3
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {category.category}
          </motion.h3>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
          >
            {category.services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                  className="mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h4>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      ))}

      {/* Diction Awards Section */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
              The Diction Awards
            </h2>
            <p className="text-gray-600 mt-4 mx-auto max-w-2xl leading-relaxed">
              The Diction Award celebrates excellence in linguistic expression, recognizing individuals who
              demonstrate exceptional mastery of spoken and written communication.
            </p>
          </motion.div>

          {/* Banner Image and Descriptive Text */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/diction-awards.jpg"
              alt="Diction Award Show Banner"
              width={600}
              height={300}
              className="mx-auto rounded-xl shadow-lg object-cover"
            />
            <p className="text-gray-600 mt-4 leading-relaxed max-w-2xl mx-auto text-sm">
              Here is the most recent Diction Award show, celebrating the achievements of outstanding individuals in the field of communication.
            </p>
          </motion.div>

          {/* Awards Images */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
          >
            {awardImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group w-full h-64 overflow-hidden rounded-xl shadow-md cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Award ${index + 1}`}
                  fill
                  className="rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
