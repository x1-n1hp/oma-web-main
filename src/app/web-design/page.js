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
  ChartBarSquareIcon,
  CodeBracketSquareIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Website Design | Oma Services",
  description:
    "Professionally designed, fast, and user-friendly websites for businesses, schools, and personal brands.",
};

const offerings = [
  {
    num: "01",
    title: "Bespoke Website Design",
    description:
      "Custom editorial and interactive layouts crafted to reflect your brand’s authority and convert visitors into long-term clients.",
    icon: PaintBrushIcon,
  },
  {
    num: "02",
    title: "Website & Platform Management",
    description:
      "Proactive security, content updates, uptime monitoring, and speed optimization so your platform remains effortless.",
    icon: CodeBracketSquareIcon,
  },
  {
    num: "03",
    title: "Search & Content Positioning (SEO)",
    description:
      "Technical SEO architecture, metadata optimization, and strategic positioning to attract high-intent organic traffic.",
    icon: MagnifyingGlassIcon,
  },
  {
    num: "04",
    title: "Digital Campaign & Growth Advertising",
    description:
      "Precision campaign management across Google, Meta, and LinkedIn to put your institution in front of decision-makers.",
    icon: ChartBarSquareIcon,
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Audit",
    desc: "Deep alignment on your goals, audience, and brand positioning before touching any design.",
  },
  {
    step: "02",
    title: "Editorial UI Design",
    desc: "High-fidelity interactive prototypes crafted for review prior to a single line of code.",
  },
  {
    step: "03",
    title: "Next.js Engineering",
    desc: "Clean, accessible, mobile-first development using modern frameworks built for speed.",
  },
  {
    step: "04",
    title: "Launch & Handover",
    desc: "Custom domain deployment with comprehensive handover and dedicated post-launch support.",
  },
];

export default function WebDesignPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#202860] overflow-hidden">
      <Navbar />

      {/* Apple Store Style Two-Tone Header + Specialist Widget */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <ScrollReveal direction="up" delay={0.1} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F2] border border-[#F3CACA] text-[#B82020] text-[11px] font-bold uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B82020]" />
            Division II • Digital Product Engineering
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] text-[#202860]">
            Website Design.{" "}
            <span className="text-[#5A6494] font-semibold">
              Your brand deserves a digital presence that commands respect.
            </span>
          </h1>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="mailto:partnerships@omadiction.pro">
              <button className="px-6 py-3 bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#D12828] transition-colors shadow-md">
                Start Your Project →
              </button>
            </a>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-3 shrink-0">
          <div className="flex items-center gap-3.5 bg-white px-4 py-3 rounded-2xl border border-[#D5DCF0] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#202860] text-white flex items-center justify-center font-editorial font-bold text-sm border-2 border-[#B82020] shrink-0">
              OMA
            </div>
            <div className="text-xs leading-snug">
              <p className="font-bold text-[#202860]">
                Need a custom website proposal?
              </p>
              <Link
                href="/contact"
                className="text-[#B82020] font-semibold hover:underline inline-flex items-center gap-1 mt-0.5"
              >
                Ask a Digital Architect <span>↗</span>
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
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#202860]">
            Capabilities.{" "}
            <span className="text-[#5A6494] font-semibold">
              What&apos;s included in our web engineering suite.
            </span>
          </h2>
          <span className="text-xs font-semibold text-[#5A6494] hidden sm:inline">
            04 Core Deliverables
          </span>
        </ScrollReveal>

        <StaggerContainer
          staggerChildren={0.12}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {offerings.map((item) => (
            <StaggerItem key={item.title}>
              <BubbleCard className="bg-white rounded-[28px] p-7 border border-[#D5DCF0] shadow-sm hover:shadow-xl h-full">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#FDF2F2] group-hover:bg-[#B82020] border border-[#F3CACA] group-hover:border-[#B82020] text-[#B82020] group-hover:text-white flex items-center justify-center font-editorial font-bold text-lg transition-colors">
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

      {/* 4-Step Delivery Methodology Bubble Cards */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-[#E2E6F2]">
        <ScrollReveal direction="up" className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#202860]">
            Methodology.{" "}
            <span className="text-[#5A6494] font-semibold">
              How we deliver from discovery to launch.
            </span>
          </h2>
        </ScrollReveal>

        <StaggerContainer
          staggerChildren={0.12}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {process.map((p) => (
            <StaggerItem key={p.step}>
              <BubbleCard className="p-7 rounded-[28px] bg-white border border-[#D5DCF0] shadow-sm h-full">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B82020] group-hover:text-[#FF8A8A] transition-colors">
                    STEP {p.step}
                  </span>
                  <h4 className="font-editorial text-lg font-bold text-[#202860] group-hover:text-white mt-2 mb-2 transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#424B78] group-hover:text-slate-200 leading-relaxed transition-colors">
                    {p.desc}
                  </p>
                </div>
              </BubbleCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Executive CTA */}
      <section className="bg-[#202860] py-16 px-6 text-center">
        <ScrollReveal direction="up" className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF8A8A]">
            Commission Your Platform
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
            Let&apos;s Architect Something Distinguished.
          </h2>
          <p className="text-slate-200 text-sm sm:text-base mb-8">
            Tell us about your project and we&apos;ll prepare a tailored
            engineering proposal.
          </p>
          <Link href="/contact">
            <button className="px-7 py-3.5 bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#D12828] transition-colors shadow-md">
              Get in Touch →
            </button>
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
