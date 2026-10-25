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
            Division II • Digital Product Engineering
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your brand deserves a digital presence that{" "}
            <span className="italic font-normal text-[#E5C158]">
              commands respect.
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            We design and build websites that are fast, visually distinguished,
            and engineered around your audience — never generic templates.
          </p>
          <a href="mailto:partnerships@omadiction.pro">
            <button className="px-7 py-3.5 bg-[#C59B27] text-[#0F1729] text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#d4a932] transition-colors shadow-md">
              Start Your Project →
            </button>
          </a>
        </ScrollReveal>
      </section>

      {/* Offerings Bubble Cards Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <ScrollReveal
          direction="up"
          className="flex items-end justify-between mb-10 border-b border-[#E5DEC9] pb-4"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7418]">
              Capabilities
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F1729] mt-1">
              What&apos;s Included in Our Engineering Suite
            </h2>
          </div>
          <span className="text-xs font-semibold text-[#64748B] hidden sm:inline">
            04 Core Deliverables
          </span>
        </ScrollReveal>

        <StaggerContainer
          staggerChildren={0.12}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {offerings.map((item) => (
            <StaggerItem key={item.title}>
              <BubbleCard className="bg-white rounded-2xl p-7 border border-[#E5DEC9] shadow-sm hover:shadow-xl h-full">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#FAF4E4] group-hover:bg-[#C59B27] border border-[#E8D7B0] text-[#9A7418] group-hover:text-[#0F1729] flex items-center justify-center font-editorial font-bold text-lg transition-colors">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-editorial text-xl font-bold text-[#0F1729] group-hover:text-white mb-2 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] group-hover:text-slate-300 leading-relaxed transition-colors">
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
      <section className="bg-white border-y border-[#E5DEC9] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal
            direction="up"
            className="text-center max-w-xl mx-auto mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7418]">
              Methodology
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F1729] mt-1">
              How We Deliver
            </h2>
          </ScrollReveal>

          <StaggerContainer
            staggerChildren={0.12}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {process.map((p) => (
              <StaggerItem key={p.step}>
                <BubbleCard className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5DEC9] h-full">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#9A7418] group-hover:text-[#E5C158] transition-colors">
                      STEP {p.step}
                    </span>
                    <h4 className="font-editorial text-lg font-bold text-[#0F1729] group-hover:text-white mt-2 mb-2 transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#475569] group-hover:text-slate-300 leading-relaxed transition-colors">
                      {p.desc}
                    </p>
                  </div>
                </BubbleCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Executive CTA */}
      <section className="bg-[#0F1729] py-16 px-6 text-center">
        <ScrollReveal direction="up" className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5C158]">
            Commission Your Platform
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
            Let&apos;s Architect Something Distinguished.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8">
            Tell us about your project and we&apos;ll prepare a tailored
            engineering proposal.
          </p>
          <Link href="/contact">
            <button className="px-7 py-3.5 bg-[#C59B27] text-[#0F1729] text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#d4a932] transition-colors shadow-md">
              Get in Touch →
            </button>
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
