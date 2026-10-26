"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BubbleCard } from "../components/motion";

const coreServices = [
  {
    numeral: "I",
    title: "Speech Therapy",
    description:
      "Enhancing communication skills through expert speech correction, vocal clarity, and personalized elocution coaching.",
    image: "/images/speaker.png",
  },
  {
    numeral: "II",
    title: "Diction Training",
    description:
      "Perfecting pronunciation, cadence, and articulation for clear, authoritative speech delivery in schools and boardrooms.",
    image: "/images/school.png",
  },
  {
    numeral: "III",
    title: "Phonics Classes",
    description:
      "Building strong reading, spelling, and phonemic foundations through structured phonetic awareness methodologies.",
    image: "/images/classroom.png",
  },
];

const additionalServices = [
  {
    index: "01",
    category: "Media & Web Engineering Department",
    href: "/web-design",
    services: [
      {
        title: "Website Design",
        description:
          "Creating visually distinguished, high-converting websites tailored to your brand authority.",
        icon: "/images/graphic-design.png",
      },
      {
        title: "Website Management",
        description:
          "Proactive maintenance, security updates, and performance optimization so your site runs effortlessly.",
        icon: "/images/data-management.png",
      },
      {
        title: "Website Marketing",
        description:
          "Technical SEO and strategic positioning to drive qualified traffic and institutional engagement.",
        icon: "/images/marketing.png",
      },
      {
        title: "Website Advertising",
        description:
          "Precision paid acquisition across Google and Meta to place your brand before decision-makers.",
        icon: "/images/digital-marketing.png",
      },
    ],
  },
  {
    index: "02",
    category: "Mobile Application Engineering",
    href: "/mobile-apps",
    services: [
      {
        title: "App Design",
        description:
          "Designing intuitive, human-centric mobile interfaces with refined visual consistency.",
        icon: "/images/edit.png",
      },
      {
        title: "App Management",
        description:
          "Continuous post-launch maintenance, version upgrades, and stability monitoring.",
        icon: "/images/digital-content.png",
      },
      {
        title: "App Marketing",
        description:
          "App Store Optimisation (ASO) and growth campaigns to maximize downloads and retention.",
        icon: "/images/advertisig-agency.png",
      },
      {
        title: "App Advertising",
        description:
          "Targeted mobile acquisition campaigns engineered for measurable user growth.",
        icon: "/images/mobile.png",
      },
    ],
  },
  {
    index: "03",
    category: "Social Media & Broadcast Growth",
    href: "/web-apps",
    services: [
      {
        title: "Social Media Designs",
        description:
          "Editorial-grade visual identity and campaign assets across digital channels.",
        icon: "/images/advertising.png",
      },
      {
        title: "Platform Monetization",
        description:
          "Strategic audience monetization across Instagram, Facebook, YouTube, and digital hubs.",
        icon: "/images/monetization.png",
      },
      {
        title: "Instagram Strategy",
        description:
          "Curating and scaling an authoritative brand presence on Instagram.",
        icon: "/images/instagram.png",
      },
      {
        title: "Facebook Growth",
        description:
          "Building and engaging high-trust community and institutional pages.",
        icon: "/images/facebook.png",
      },
      {
        title: "YouTube Channel Production",
        description:
          "Optimizing video presentation, thumbnails, and channel growth for educational & brand reach.",
        icon: "/images/youtube.png",
      },
      {
        title: "Spotify & Podcast Distribution",
        description:
          "Launching and promoting spoken-word, educational, and executive podcast series.",
        icon: "/images/spotify.png",
      },
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
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const ServicePage = () => {
  return (
    <div className="bg-[#FAF8F5] text-[#202860] min-h-screen flex flex-col overflow-hidden">
      {/* Royal Cobalt Indigo & Brand Crimson Editorial Hero Banner */}
      <section className="bg-[#202860] text-white py-20 px-6 border-b-4 border-[#B82020] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-[#B82020]/30 border border-[#FF8A8A]/40 text-[#FF8A8A] text-xs font-bold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Practice Directory • Oma Services
          </motion.span>
          <motion.h1
            className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive Communication &amp;{" "}
            <span className="italic font-normal text-[#FF8A8A]">
              Digital Engineering.
            </span>
          </motion.h1>
          <motion.p
            className="text-slate-200 text-base sm:text-lg mt-4 mx-auto leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From world-class diction training and school phonics to bespoke
            websites, mobile apps, and digital growth — explore our specialized
            departments below.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/diction"
              className="px-5 py-2.5 rounded-full bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D12828] transition-colors shadow-md"
            >
              I. Professional Diction
            </Link>
            <Link
              href="/web-design"
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              II. Website Design
            </Link>
            <Link
              href="/mobile-apps"
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              III. Mobile Apps
            </Link>
            <Link
              href="/web-apps"
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              IV. Web Applications
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Core Diction & Elocution Services */}
      <section className="max-w-6xl mx-auto px-6 py-20 w-full border-b border-[#E2E6F2]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B82020]">
              Division I • Elocution Academy
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#202860] mt-1">
              Core Diction &amp; Speech Programmes
            </h2>
          </div>
          <Link
            href="/diction"
            className="text-xs font-bold uppercase tracking-wider text-[#B82020] hover:text-[#202860] transition-colors"
          >
            Explore Diction Department →
          </Link>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {coreServices.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <BubbleCard className="bg-white p-7 rounded-2xl border border-[#D5DCF0] shadow-sm hover:shadow-xl h-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-9 h-9 rounded-lg bg-[#FDF2F2] group-hover:bg-[#B82020] border border-[#F3CACA] group-hover:border-[#B82020] text-[#B82020] group-hover:text-white font-editorial font-bold text-sm flex items-center justify-center transition-colors">
                      {service.numeral}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A6494] group-hover:text-[#FF8A8A] transition-colors">
                      Certified Programme
                    </span>
                  </div>
                  <div className="h-32 flex items-center justify-center bg-[#FAF8F5] rounded-xl p-4 mb-6 border border-[#E2E6F2]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={140}
                      height={110}
                      className="mx-auto h-24 object-contain"
                    />
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-[#202860] group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#424B78] group-hover:text-slate-200 mt-2 text-xs sm:text-sm leading-relaxed transition-colors">
                    {service.description}
                  </p>
                </div>
              </BubbleCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Additional Departmental Suites */}
      <section className="max-w-6xl mx-auto px-6 py-20 w-full space-y-20">
        {additionalServices.map((category) => (
          <div key={category.category} className="space-y-8">
            <motion.div
              className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E2E6F2] pb-4 gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B82020]">
                  Department {category.index}
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#202860] mt-1">
                  {category.category}
                </h3>
              </div>
              <Link
                href={category.href}
                className="text-xs font-bold uppercase tracking-wider text-[#B82020] hover:text-[#202860]"
              >
                View Department Specifications →
              </Link>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={containerVariants}
            >
              {category.services.map((service, idx) => (
                <motion.div key={service.title} variants={itemVariants}>
                  <BubbleCard className="bg-white p-6 rounded-2xl border border-[#D5DCF0] shadow-sm hover:shadow-xl h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#FDF2F2] border border-[#F3CACA] p-2.5 flex items-center justify-center">
                          <Image
                            src={service.icon}
                            alt={service.title}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                        <span className="font-editorial text-xs font-bold text-[#B82020] group-hover:text-[#FF8A8A] transition-colors">
                          0{idx + 1}
                        </span>
                      </div>
                      <h4 className="font-editorial text-lg font-bold text-[#202860] group-hover:text-white transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-[#424B78] group-hover:text-slate-200 mt-2 text-xs sm:text-sm leading-relaxed transition-colors">
                        {service.description}
                      </p>
                    </div>
                  </BubbleCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </section>

      {/* The Diction Awards Editorial Section */}
      <section className="bg-white border-t border-[#E2E6F2] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#FDF2F2] border border-[#F3CACA] text-[#B82020] text-xs font-bold uppercase tracking-widest">
                Annual Academic Gala
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#202860]">
                The Lagos OMA Diction Awards
              </h2>
              <p className="text-[#424B78] text-sm sm:text-base leading-relaxed">
                The Diction Awards celebrate excellence in linguistic
                expression, recognizing scholars and schools that demonstrate
                exceptional mastery of spoken and written English.
              </p>
              <div className="pt-2">
                <Link
                  href="/registration"
                  className="inline-block px-7 py-3.5 rounded-xl bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#9E1818] transition shadow-md shadow-[#B82020]/20"
                >
                  Register for the 2024 Edition →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-4 rounded-3xl bg-[#FAF8F5] border border-[#D5DCF0] shadow-lg">
                <Image
                  src="/images/diction-awards.jpg"
                  alt="Diction Award Show Banner"
                  width={600}
                  height={340}
                  className="mx-auto rounded-2xl object-cover max-h-80 w-full object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Awards Gallery */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
          >
            {awardImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group w-full h-64 overflow-hidden rounded-2xl border border-[#D5DCF0] shadow-sm bg-[#202860]"
              >
                <Image
                  src={image}
                  alt={`Award Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#202860]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF8A8A]">
                    OMA Diction Awards Archive • 0{index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
