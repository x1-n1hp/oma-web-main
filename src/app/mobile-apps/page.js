import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  BubbleCard,
} from "../components/motion";
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
    <main className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0E24] text-[#202860] dark:text-white overflow-hidden transition-colors duration-300">
      <Navbar />

      {/* Apple Store Style Two-Tone Header + Specialist Widget */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <ScrollReveal direction="up" delay={0.1} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F2] dark:bg-[#B82020]/20 border border-[#F3CACA] dark:border-[#B82020]/40 text-[#B82020] dark:text-[#FF8A8A] text-[11px] font-bold uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B82020]" />
            Division III • Mobile Application Engineering
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08]">
            <span className="text-[#202860] dark:text-white transition-colors duration-300">Mobile Apps.</span>{" "}
            <span className="text-[#5A6494] dark:text-[#94A3D3] font-semibold transition-colors duration-300">
              iOS &amp; Android applications engineered for daily reliance.
            </span>
          </h1>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="mailto:partnerships@omadiction.pro">
              <button className="px-6 py-3 bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#D12828] transition-colors shadow-md">
                Discuss Your Mobile App →
              </button>
            </a>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-3 shrink-0">
          <div className="flex items-center gap-3.5 bg-white dark:bg-[#131A3E] px-4 py-3 rounded-2xl border border-[#D5DCF0] dark:border-[#232E66] shadow-sm transition-colors duration-300">
            <div className="w-10 h-10 rounded-full bg-[#202860] text-white flex items-center justify-center font-editorial font-bold text-sm border-2 border-[#B82020] shrink-0">
              OMA
            </div>
            <div className="text-xs leading-snug">
              <p className="font-bold text-[#202860] dark:text-white">
                Scoping an iOS or Android app?
              </p>
              <Link
                href="/contact"
                className="text-[#B82020] dark:text-[#FF8A8A] font-semibold hover:underline inline-flex items-center gap-1 mt-0.5"
              >
                Ask a Mobile Lead <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Bubble Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <ScrollReveal
          direction="up"
          className="flex items-end justify-between mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            <span className="text-[#202860] dark:text-white transition-colors duration-300">Mobile Capabilities.</span>{" "}
            <span className="text-[#5A6494] dark:text-[#94A3D3] font-semibold transition-colors duration-300">
              From wireframe to App Store and Google Play.
            </span>
          </h2>
          <span className="text-xs font-semibold text-[#5A6494] dark:text-[#94A3D3] hidden sm:inline">
            iOS &amp; Android
          </span>
        </ScrollReveal>

        <StaggerContainer
          staggerChildren={0.12}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {offerings.map((item) => (
            <StaggerItem key={item.title}>
              <BubbleCard className="bg-white dark:bg-[#131A3E] rounded-[28px] p-7 border border-[#D5DCF0] dark:border-[#232E66] shadow-sm hover:shadow-xl h-full">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#FDF2F2] dark:bg-[#B82020]/20 group-hover:bg-[#B82020] border border-[#F3CACA] dark:border-[#B82020]/40 group-hover:border-[#B82020] text-[#B82020] dark:text-[#FF8A8A] group-hover:text-white flex items-center justify-center font-editorial font-bold text-lg transition-colors">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-editorial text-xl font-bold text-[#202860] dark:text-white group-hover:text-white mb-2 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#424B78] dark:text-[#94A3D3] group-hover:text-slate-200 leading-relaxed transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              </BubbleCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Architectural Standards Bubble Cards */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-[#E2E6F2] dark:border-[#232E66]">
        <ScrollReveal direction="up" className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            <span className="text-[#202860] dark:text-white transition-colors duration-300">Core Architecture.</span>{" "}
            <span className="text-[#5A6494] dark:text-[#94A3D3] font-semibold transition-colors duration-300">
              Built-in from the start.
            </span>
          </h2>
        </ScrollReveal>

        <StaggerContainer
          staggerChildren={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {features.map((f) => (
            <StaggerItem key={f}>
              <BubbleCard className="bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] rounded-[24px] px-6 py-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B82020] group-hover:bg-[#FF8A8A] shrink-0 transition-colors" />
                  <span className="text-xs sm:text-sm font-bold text-[#202860] dark:text-slate-200 group-hover:text-white transition-colors">
                    {f}
                  </span>
                </div>
              </BubbleCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Executive CTA */}
      <section className="bg-[#202860] dark:bg-[#131A3E] py-16 px-6 text-center transition-colors duration-300">
        <ScrollReveal direction="up" className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF8A8A]">
            Product Discovery
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
            Have a Mobile Product Vision?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base mb-8">
            Share your requirements and we&apos;ll help you scope, design, and
            ship it.
          </p>
          <Link href="/contact">
            <button className="px-7 py-3.5 bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#D12828] transition-colors shadow-md">
              Let&apos;s Talk →
            </button>
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
