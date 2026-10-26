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
            Division IV • Enterprise Web Applications
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Software architected around how your{" "}
            <span className="italic font-normal text-[#FF8A8A]">
              organisation operates.
            </span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            From internal school and enterprise portals to customer-facing SaaS
            platforms, we build web applications that are reliable, scalable,
            and effortless to maintain.
          </p>
          <a href="mailto:partnerships@omadiction.pro">
            <button className="px-7 py-3.5 bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#D12828] transition-colors shadow-md">
              Scope Your Web Application →
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
              Custom Systems
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#202860] mt-1">
              What We Build
            </h2>
          </div>
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

      {/* Tech Stack Bubble Cards */}
      <section className="bg-white border-y border-[#E2E6F2] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B82020]">
              Engineering Foundation
            </span>
            <h2 className="font-editorial text-3xl font-bold text-[#202860] mt-1 mb-8">
              Our Production Technology Stack
            </h2>
          </ScrollReveal>
          <StaggerContainer
            staggerChildren={0.08}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3"
          >
            {stack.map((tech) => (
              <StaggerItem key={tech}>
                <BubbleCard className="px-4 py-4 rounded-xl bg-[#FAF8F5] border border-[#D5DCF0] shadow-sm text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#202860] group-hover:text-[#FF8A8A] transition-colors">
                    {tech}
                  </span>
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
