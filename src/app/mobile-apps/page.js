import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/motion";
import {
  ArrowPathRoundedSquareIcon,
  ChartBarSquareIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Mobile App Engineering | Oma Services",
  description:
    "Custom mobile applications for Android and iOS — designed, built, and launched for your business.",
};

const offerings = [
  {
    num: "01",
    title: "Mobile UI/UX Architecture",
    description:
      "Intuitive interface design that puts your users first — clean layouts, logical flows, and refined visual consistency.",
    icon: PaintBrushIcon,
  },
  {
    num: "02",
    title: "iOS & Android Development",
    description:
      "Cross-platform and native mobile apps engineered to be fast, stable, and ready for both Apple App Store and Google Play.",
    icon: DevicePhoneMobileIcon,
  },
  {
    num: "03",
    title: "Lifecycle & Release Management",
    description:
      "Post-launch maintenance, OS version updates, performance monitoring, and continuous improvements.",
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    num: "04",
    title: "App Store Growth & Marketing",
    description:
      "App Store Optimisation (ASO) and targeted digital acquisition campaigns to drive downloads and retention.",
    icon: ChartBarSquareIcon,
  },
];

const features = [
  "Android & iOS Support",
  "Offline-First Capability",
  "Push Notifications",
  "Biometric & Secure Auth",
  "Paystack / Flutterwave / Stripe",
  "Real-Time Analytics & Reporting",
];

export default function MobileAppsPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#0F1729] overflow-hidden">
      <Navbar />

      {/* Executive Editorial Hero */}
      <section className="bg-[#0F1729] text-white py-20 px-6 border-b border-[#C59B27]/30">
        <ScrollReveal
          direction="up"
          delay={0.1}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/40 text-[#E5C158] text-xs font-bold uppercase tracking-widest mb-4">
            Division III • Mobile Application Engineering
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Mobile applications engineered for{" "}
            <span className="italic font-normal text-[#E5C158]">
              daily reliance.
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            We engineer mobile applications that are fast, reliable, and built
            around real user behaviour — from initial wireframe to App Store
            and Google Play deployment.
          </p>
          <a href="mailto:partnerships@omadiction.pro">
            <button className="px-7 py-3.5 bg-[#C59B27] text-[#0F1729] text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#d4a932] transition-colors shadow-md">
              Discuss Your Mobile App →
            </button>
          </a>
        </ScrollReveal>
      </section>

      {/* Offerings Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <ScrollReveal
          direction="up"
          className="flex items-end justify-between mb-10 border-b border-[#E5DEC9] pb-4"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7418]">
              Mobile Capabilities
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F1729] mt-1">
              Our Mobile Engineering Services
            </h2>
          </div>
          <span className="text-xs font-semibold text-[#64748B] hidden sm:inline">
            iOS &amp; Android
          </span>
        </ScrollReveal>

        <StaggerContainer
          staggerChildren={0.12}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {offerings.map((item) => (
            <StaggerItem
              key={item.title}
              className="bg-white rounded-2xl p-7 border border-[#E5DEC9] hover:border-[#C59B27] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-start gap-5"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[#FAF4E4] border border-[#E8D7B0] text-[#9A7418] flex items-center justify-center font-editorial font-bold text-lg">
                {item.num}
              </div>
              <div>
                <h3 className="font-editorial text-xl font-bold text-[#0F1729] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Architectural Standards */}
      <section className="bg-white border-y border-[#E5DEC9] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7418]">
              Core Architecture
            </span>
            <h2 className="font-editorial text-3xl font-bold text-[#0F1729] mt-1">
              Built-In From the Start
            </h2>
          </ScrollReveal>

          <StaggerContainer
            staggerChildren={0.08}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {features.map((f) => (
              <StaggerItem
                key={f}
                className="flex items-center gap-3 bg-[#FAF7F2] border border-[#E5DEC9] rounded-xl px-5 py-4 hover:border-[#C59B27] transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-[#C59B27] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#0F1729]">
                  {f}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Executive CTA */}
      <section className="bg-[#0F1729] py-16 px-6 text-center">
        <ScrollReveal direction="up" className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5C158]">
            Product Discovery
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
            Have a Mobile Product Vision?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8">
            Share your requirements and we&apos;ll help you scope, design, and
            ship it.
          </p>
          <Link href="/contact">
            <button className="px-7 py-3.5 bg-[#C59B27] text-[#0F1729] text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#d4a932] transition-colors shadow-md">
              Let&apos;s Talk →
            </button>
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
