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
  title: "High-Converting School & Business Websites | Oma Services",
  description:
    "Websites that make parents choose your school. Showcase student achievements, easy online admission forms, and Google SEO ranking.",
};

const offerings = [
  {
    num: "01",
    title: "Breathtaking School Portals",
    description:
      "Showcase your student achievements, facilities, and academic results with interactive photo galleries and virtual tours.",
    icon: PaintBrushIcon,
  },
  {
    num: "02",
    title: "Easy Online Application Forms",
    description:
      "Make it effortless for busy parents to apply, upload birth certificates, and pay entrance fees online in minutes.",
    icon: CodeBracketSquareIcon,
  },
  {
    num: "03",
    title: "Local SEO Superpower",
    description:
      "Help parents in your neighborhood discover your school before they see any competitor on Google search.",
    icon: MagnifyingGlassIcon,
  },
  {
    num: "04",
    title: "Admissions Campaign Marketing",
    description:
      "Targeted social media campaigns during admission season that fill your classrooms with bright, eager pupils.",
    icon: ChartBarSquareIcon,
  },
];

const process = [
  {
    step: "01",
    title: "Understanding Your Story",
    desc: "We listen to your school's vision, heritage, and what makes your campus uniquely special.",
  },
  {
    step: "02",
    title: "Designing the Dream Experience",
    desc: "We design a website that makes prospective parents say 'Wow, this school is incredible.'",
  },
  {
    step: "03",
    title: "Building with Care & Speed",
    desc: "Every button, gallery, and form is tested to ensure a delightful experience for parents.",
  },
  {
    step: "04",
    title: "Celebration & Parent Launch",
    desc: "We launch your new site, announce it to your school community, and watch the inquiries roll in.",
  },
];

export default function WebDesignPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0E24] text-[#202860] dark:text-white overflow-hidden transition-colors duration-300">
      <Navbar />

      {/* Apple Store Style Two-Tone Header + Specialist Widget */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <ScrollReveal direction="up" delay={0.1} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F2] dark:bg-[#B82020]/20 border border-[#F3CACA] dark:border-[#B82020]/40 text-[#B82020] dark:text-[#FF8A8A] text-[11px] font-bold uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B82020]" />
            Websites That Make Parents Choose Your School
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08]">
            <span className="text-[#202860] dark:text-white transition-colors duration-300">Website Design.</span>{" "}
            <span className="text-[#5A6494] dark:text-[#94A3D3] font-semibold transition-colors duration-300">
              A stunning online home that makes your school the talk of the town.
            </span>
          </h1>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/contact">
              <button className="px-6 py-3 bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#D12828] transition-colors shadow-md">
                Upgrade Your School Website →
              </button>
            </Link>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-3 shrink-0">
          <div className="flex items-center gap-3.5 bg-white dark:bg-[#131A3E] px-4 py-3 rounded-2xl border border-[#D5DCF0] dark:border-[#232E66] shadow-sm transition-colors duration-300">
            <div className="w-10 h-10 rounded-full bg-[#202860] text-white flex items-center justify-center font-editorial font-bold text-sm border-2 border-[#B82020] shrink-0">
              OMA
            </div>
            <div className="text-xs leading-snug">
              <p className="font-bold text-[#202860] dark:text-white">
                Want to see our school web portfolio?
              </p>
              <Link
                href="/contact"
                className="text-[#B82020] dark:text-[#FF8A8A] font-semibold hover:underline inline-flex items-center gap-1 mt-0.5"
              >
                Ask a School Web Specialist <span>↗</span>
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
            <span className="text-[#202860] dark:text-white transition-colors duration-300">Capabilities.</span>{" "}
            <span className="text-[#5A6494] dark:text-[#94A3D3] font-semibold transition-colors duration-300">
              Everything your school needs to stand out online.
            </span>
          </h2>
          <span className="text-xs font-semibold text-[#5A6494] dark:text-[#94A3D3] hidden sm:inline">
            04 Core Deliverables
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

      {/* 4-Step Delivery Methodology Bubble Cards */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-[#E2E6F2] dark:border-[#232E66]">
        <ScrollReveal direction="up" className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            <span className="text-[#202860] dark:text-white transition-colors duration-300">Our 4-Step Process.</span>{" "}
            <span className="text-[#5A6494] dark:text-[#94A3D3] font-semibold transition-colors duration-300">
              From first consultation to parents cheering your new website.
            </span>
          </h2>
        </ScrollReveal>

        <StaggerContainer
          staggerChildren={0.12}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {process.map((p) => (
            <StaggerItem key={p.step}>
              <BubbleCard className="p-7 rounded-[28px] bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] shadow-sm h-full">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B82020] dark:text-[#FF8A8A] group-hover:text-[#FF8A8A] transition-colors">
                    STEP {p.step}
                  </span>
                  <h4 className="font-editorial text-lg font-bold text-[#202860] dark:text-white group-hover:text-white mt-2 mb-2 transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#424B78] dark:text-[#94A3D3] group-hover:text-slate-200 leading-relaxed transition-colors">
                    {p.desc}
                  </p>
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
            Transform Your Online Presence
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
            Ready to Make Your School the #1 Choice for Parents?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base mb-8">
            Schedule a friendly call today. We&apos;ll show you how a modern website can dramatically boost your student enrollments.
          </p>
          <Link href="/contact">
            <button className="px-7 py-3.5 bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#D12828] transition-colors shadow-md">
              Upgrade Your School Website Today →
            </button>
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
