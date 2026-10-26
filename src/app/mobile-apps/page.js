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
    <main className="min-h-screen bg-[#FAF8F5] text-[#202860] overflow-hidden">
      <Navbar />

      {/* Royal Cobalt Indigo & Brand Crimson Editorial Hero */}
      <section className="bg-[#202860] text-white py-20 px-6 border-b-4 border-[#B82020]">
        <ScrollReveal
          direction="up"
          delay={0.1}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#B82020]/30 border border-[#FF8A8A]/40 text-[#FF8A8A] text-xs font-bold uppercase tracking-widest mb-4">
            Division III • Mobile Application Engineering
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Mobile applications engineered for{" "}
            <span className="italic font-normal text-[#FF8A8A]">
              daily reliance.
            </span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            We engineer mobile applications that are fast, reliable, and built
            around real user behaviour — from initial wireframe to App Store
            and Google Play deployment.
          </p>
          <a href="mailto:partnerships@omadiction.pro">
            <button className="px-7 py-3.5 bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#D12828] transition-colors shadow-md">
              Discuss Your Mobile App →
            </button>
          </a>
        </ScrollReveal>
      </section>

      {/* Offerings Bubble Cards Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <ScrollReveal
          direction="up"
          className="flex items-end justify-between mb-10 border-b border-[#E2E6F2] pb-4"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B82020]">
              Mobile Capabilities
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#202860] mt-1">
              Our Mobile Engineering Services
            </h2>
          </div>
          <span className="text-xs font-semibold text-[#5A6494] hidden sm:inline">
            iOS &amp; Android
          </span>
        </ScrollReveal>

        <StaggerContainer
          staggerChildren={0.12}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {offerings.map((item) => (
            <StaggerItem key={item.title}>
              <BubbleCard className="bg-white rounded-2xl p-7 border border-[#D5DCF0] shadow-sm hover:shadow-xl h-full">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#FDF2F2] group-hover:bg-[#B82020] border border-[#F3CACA] group-hover:border-[#B82020] text-[#B82020] group-hover:text-white flex items-center justify-center font-editorial font-bold text-lg transition-colors">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-editorial text-xl font-bold text-[#202860] group-hover:text-white mb-2 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#424B78] group-hover:text-slate-200 leading-relaxed transition-colors">
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
      <section className="bg-white border-y border-[#E2E6F2] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B82020]">
              Core Architecture
            </span>
            <h2 className="font-editorial text-3xl font-bold text-[#202860] mt-1">
              Built-In From the Start
            </h2>
          </ScrollReveal>

          <StaggerContainer
            staggerChildren={0.08}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {features.map((f) => (
              <StaggerItem key={f}>
                <BubbleCard className="bg-[#FAF8F5] border border-[#D5DCF0] rounded-xl px-5 py-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#B82020] group-hover:bg-[#FF8A8A] shrink-0 transition-colors" />
                    <span className="text-xs sm:text-sm font-bold text-[#202860] group-hover:text-white transition-colors">
                      {f}
                    </span>
                  </div>
                </BubbleCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Executive CTA */}
      <section className="bg-[#202860] py-16 px-6 text-center">
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
