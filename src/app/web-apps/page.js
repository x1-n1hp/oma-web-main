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
  BoltIcon,
  BookOpenIcon,
  ShareIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Web Applications | Oma Services",
  description:
    "Custom web applications — portals, dashboards, SaaS tools, and internal systems built for performance.",
};

const offerings = [
  {
    num: "01",
    title: "Custom Institutional & Client Portals",
    description:
      "Multi-user platforms with role-based access — school management portals, client dashboards, booking systems, and more.",
    icon: Squares2X2Icon,
  },
  {
    num: "02",
    title: "Business Process Automation",
    description:
      "Custom web software that replaces manual spreadsheet workflows — inventory, invoicing, scheduling, and executive reporting.",
    icon: BoltIcon,
  },
  {
    num: "03",
    title: "Social & Broadcast Management Tools",
    description:
      "Bespoke tools for scheduling, audience analytics, and managing your digital presence across platforms.",
    icon: ShareIcon,
  },
  {
    num: "04",
    title: "E-Learning & Content Platforms",
    description:
      "Membership portals, digital academies, and content hubs with secure access and monetization built in.",
    icon: BookOpenIcon,
  },
];

const stack = [
  "Next.js",
  "React",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Vercel Cloud",
];

export default function WebAppsPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#202860] overflow-hidden">
      <Navbar />

      {/* Apple Store Style Two-Tone Header + Specialist Widget */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <ScrollReveal direction="up" delay={0.1} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F2] border border-[#F3CACA] text-[#B82020] text-[11px] font-bold uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B82020]" />
            Division IV • Enterprise Web Applications
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] text-[#202860]">
            Web Applications.{" "}
            <span className="text-[#5A6494] font-semibold">
              Software architected around how your organisation operates.
            </span>
          </h1>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="mailto:partnerships@omadiction.pro">
              <button className="px-6 py-3 bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#D12828] transition-colors shadow-md">
                Scope Your Web Application →
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
                Building a portal or SaaS tool?
              </p>
              <Link
                href="/contact"
                className="text-[#B82020] font-semibold hover:underline inline-flex items-center gap-1 mt-0.5"
              >
                Ask a Systems Engineer <span>↗</span>
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
            Custom Systems.{" "}
            <span className="text-[#5A6494] font-semibold">
              Portals, automation, and full-stack software.
            </span>
          </h2>
          <span className="text-xs font-semibold text-[#5A6494] hidden sm:inline">
            Full-Stack Architecture
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

      {/* Tech Stack Bubble Cards */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-[#E2E6F2]">
        <ScrollReveal direction="up" className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#202860]">
            Engineering Foundation.{" "}
            <span className="text-[#5A6494] font-semibold">
              Our production technology stack.
            </span>
          </h2>
        </ScrollReveal>
        <StaggerContainer
          staggerChildren={0.08}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
        >
          {stack.map((tech) => (
            <StaggerItem key={tech}>
              <BubbleCard className="px-4 py-5 rounded-[24px] bg-white border border-[#D5DCF0] shadow-sm text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-[#202860] group-hover:text-[#FF8A8A] transition-colors">
                  {tech}
                </span>
              </BubbleCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Executive CTA */}
      <section className="bg-[#202860] py-16 px-6 text-center">
        <ScrollReveal direction="up" className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF8A8A]">
            Technical Consultation
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
            Have a Workflow That Needs a Custom Web Platform?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base mb-8">
            Walk us through the challenge and we&apos;ll architect the right
            solution together.
          </p>
          <Link href="/contact">
            <button className="px-7 py-3.5 bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#D12828] transition-colors shadow-md">
              Start the Conversation →
            </button>
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
