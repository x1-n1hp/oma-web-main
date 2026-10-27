"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BubbleCard, ShelfCarousel } from "../components/motion";

const coreServices = [
  {
    numeral: "I",
    title: "Speech Therapy",
    subtitle: "Vocal Clarity & Correction",
    description:
      "Enhancing communication skills through expert speech correction, vocal clarity, and personalized elocution coaching.",
    image: "/images/speaker.png",
  },
  {
    numeral: "II",
    title: "Diction Training",
    subtitle: "Schools & Executive Boardrooms",
    description:
      "Perfecting pronunciation, cadence, and articulation for clear, authoritative speech delivery in schools and boardrooms.",
    image: "/images/school.png",
  },
  {
    numeral: "III",
    title: "Phonics Classes",
    subtitle: "Structured Phonemic Literacy",
    description:
      "Building strong reading, spelling, and phonemic foundations through structured phonetic awareness methodologies.",
    image: "/images/classroom.png",
  },
];

const additionalServices = [
  {
    index: "01",
    category: "Media & Web Engineering.",
    subtitle: "High-converting digital platforms and strategic growth.",
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
    category: "Mobile App Engineering.",
    subtitle: "Native-feel iOS and Android experiences built for daily reliance.",
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
    category: "Social & Broadcast Growth.",
    subtitle: "Audience monetization and channel production across platforms.",
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

const ServicePage = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-[#0A0E24] text-[#202860] dark:text-white min-h-screen flex flex-col overflow-hidden transition-colors duration-300">
      {/* Apple Store-Style Split Header + Specialist Concierge Widget */}
      <section className="pt-12 pb-8 px-6 max-w-6xl mx-auto w-full border-b border-[#E2E6F2] dark:border-[#232E66]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDF2F2] dark:bg-[#B82020]/20 border border-[#F3CACA] dark:border-[#B82020]/40 text-[#B82020] dark:text-[#FF8A8A] text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B82020]"></span>
              Practice Storefront • Oma Services
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.12]">
              <span className="text-[#202860] dark:text-white transition-colors duration-300">All Services.</span>{" "}
              <span className="text-[#5A6494] dark:text-[#94A3D3] font-normal transition-colors duration-300">
                World-class elocution academy and full-stack digital engineering
                under one roof.
              </span>
            </h1>
          </motion.div>

          {/* Specialist Concierge Widget */}
          <div className="flex items-center gap-3.5 bg-white dark:bg-[#131A3E] px-4 py-3 rounded-2xl border border-[#D5DCF0] dark:border-[#232E66] shadow-sm shrink-0 transition-colors duration-300">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#202860] to-[#B82020] text-white font-editorial font-bold text-sm flex items-center justify-center shrink-0">
              DO
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-[#131A3E]"></span>
            </div>
            <div className="text-xs">
              <p className="font-bold text-[#202860] dark:text-white">
                Unsure which package fits your institution?
              </p>
              <Link
                href="/contact"
                className="text-[#B82020] dark:text-[#FF8A8A] font-semibold hover:underline"
              >
                Speak with an OMA Specialist &gt;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Diction & Elocution Services (Tall 28px Apple-Style Bubble Cards) */}
      <section className="max-w-6xl mx-auto px-6 py-14 w-full border-b border-[#E2E6F2] dark:border-[#232E66]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            <span className="text-[#202860] dark:text-white transition-colors duration-300">Diction &amp; Elocution.</span>{" "}
            <span className="text-[#5A6494] dark:text-[#94A3D3] font-normal transition-colors duration-300">
              Certified speech and phonics programmes for schools and leaders.
            </span>
          </h2>
          <Link
            href="/diction"
            className="text-xs font-bold text-[#B82020] dark:text-[#FF8A8A] hover:text-[#202860] dark:hover:text-white shrink-0 transition-colors"
          >
            Explore Diction Department &gt;
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {coreServices.map((service) => (
            <BubbleCard
              key={service.title}
              className="bg-white dark:bg-[#131A3E] rounded-[28px] border border-[#D5DCF0] dark:border-[#232E66] shadow-sm hover:shadow-xl h-full"
              contentClassName="flex flex-col justify-between"
            >
              {/* Top-Anchored Copy */}
              <div className="p-7 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B82020] dark:text-[#FF8A8A] group-hover:text-[#FF8A8A] transition-colors">
                    {service.subtitle}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-[#FDF2F2] dark:bg-[#B82020]/20 group-hover:bg-[#B82020] border border-[#F3CACA] dark:border-[#B82020]/40 text-[#B82020] dark:text-[#FF8A8A] group-hover:text-white font-editorial font-bold text-xs flex items-center justify-center transition-colors">
                    {service.numeral}
                  </span>
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#202860] dark:text-white group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#424B78] dark:text-[#94A3D3] group-hover:text-slate-200 mt-2 text-xs sm:text-sm leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Bottom Visual Stage */}
              <div className="mx-4 mb-4 h-44 flex items-center justify-center bg-[#FAF8F5] dark:bg-[#0A0E24]/60 group-hover:bg-white/10 rounded-[20px] p-6 border border-[#E2E6F2] dark:border-[#232E66] group-hover:border-white/15 transition-colors">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={150}
                  height={120}
                  className="mx-auto h-28 object-contain"
                />
              </div>
            </BubbleCard>
          ))}
        </div>
      </section>

      {/* Departmental Horizontal Snap-Scroll Shelves */}
      <section className="max-w-6xl mx-auto px-6 py-14 w-full space-y-16">
        {additionalServices.map((category) => (
          <ShelfCarousel
            key={category.category}
            eyebrow={`Department ${category.index}`}
            title={category.category}
            subtitle={category.subtitle}
            scrollAmount={330}
          >
            {category.services.map((service, idx) => (
              <Link
                key={service.title}
                href={category.href}
                className="snap-start shrink-0 block"
              >
                <BubbleCard className="w-[285px] sm:w-[305px] bg-white dark:bg-[#131A3E] p-7 rounded-[28px] border border-[#D5DCF0] dark:border-[#232E66] shadow-sm h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FDF2F2] dark:bg-[#B82020]/20 border border-[#F3CACA] dark:border-[#B82020]/40 p-2.5 flex items-center justify-center">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-editorial text-xs font-bold text-[#B82020] dark:text-[#FF8A8A] group-hover:text-[#FF8A8A] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-editorial text-xl font-bold text-[#202860] dark:text-white group-hover:text-white transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-[#424B78] dark:text-[#94A3D3] group-hover:text-slate-200 mt-2 text-xs sm:text-sm leading-relaxed mb-4 transition-colors">
                    {service.description}
                  </p>
                  <span className="text-xs font-bold text-[#B82020] dark:text-[#FF8A8A] group-hover:text-white transition-colors">
                    Explore department &gt;
                  </span>
                </BubbleCard>
              </Link>
            ))}
          </ShelfCarousel>
        ))}
      </section>

      {/* The Diction Awards Shelf Section */}
      <section className="bg-white dark:bg-[#0A0E24] border-t border-[#E2E6F2] dark:border-[#232E66] py-16 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <ShelfCarousel
            eyebrow="Annual Academic Gala"
            title="The Lagos OMA Diction Awards."
            subtitle="Celebrating linguistic mastery across Lagos schools."
            scrollAmount={360}
          >
            {awardImages.map((image, index) => (
              <div
                key={index}
                className="snap-start shrink-0 relative group w-[310px] sm:w-[350px] h-72 overflow-hidden rounded-[28px] border border-[#D5DCF0] dark:border-[#232E66] shadow-sm bg-[#202860]"
              >
                <Image
                  src={image}
                  alt={`Award Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#202860]/80 via-transparent to-transparent flex items-end justify-between p-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF8A8A]">
                    Awards Archive • 0{index + 1}
                  </span>
                  <Link
                    href="/registration"
                    className="px-3 py-1 rounded-full bg-[#B82020] text-white text-xs font-bold"
                  >
                    Enroll 2024 &gt;
                  </Link>
                </div>
              </div>
            ))}
          </ShelfCarousel>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
