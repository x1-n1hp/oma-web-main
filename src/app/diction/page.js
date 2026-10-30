import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  BubbleCard,
  ShelfCarousel,
} from "../components/motion";
import {
  AcademicCapIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  PuzzlePieceIcon,
  SpeakerWaveIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Diction Academy & Speech Transformation | Oma Services",
  description:
    "Give your child the gift of clear, beautiful, confident speech. Gentle speech therapy, school diction programs, and joyful phonics.",
};

const dictionServices = [
  {
    num: "01",
    title: "Gentle Speech Therapy",
    description:
      "Loving, patient coaching that helps quiet children overcome speech struggles, lisps, and hesitation with joy.",
    icon: SpeakerWaveIcon,
  },
  {
    num: "02",
    title: "Confident Diction Classes",
    description:
      "Transform your child into an articulate speaker who sounds polished and educated everywhere.",
    icon: AcademicCapIcon,
  },
  {
    num: "03",
    title: "Joyful Phonics",
    description:
      "Turn reading from a frustrating struggle into an exciting daily adventure with phonetic games.",
    icon: BookOpenIcon,
  },
  {
    num: "04",
    title: "Friendly Diction Club",
    description:
      "A warm community where students laugh, practice, and overcome public speaking fear together.",
    icon: UserGroupIcon,
  },
  {
    num: "05",
    title: "Social Poise & Manners",
    description:
      "Teach children polite dining etiquette, confident handshakes, and respectful, articulate speech.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    num: "06",
    title: "Exciting Speech Games",
    description:
      "Interactive games that make children eagerly practice proper pronunciation at home and on weekends.",
    icon: PuzzlePieceIcon,
  },
];

const galleryImages = [
  "/images/DSC_6524[40].JPG",
  "/images/DSC_6811.JPG",
  "/images/DSC_6802.JPG",
  "/images/DSC_6580.JPG",
  "/images/DSC_6823.JPG",
  "/images/DSC_6849.JPG",
];

export default function DictionPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0E24] text-[#202860] dark:text-white overflow-hidden transition-colors duration-300">
      <Navbar />

      {/* Apple Store Style Two-Tone Header + Specialist Widget */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <ScrollReveal direction="up" delay={0.1} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F2] dark:bg-[#B82020]/20 border border-[#F3CACA] dark:border-[#B82020]/40 text-[#B82020] dark:text-[#FF8A8A] text-[11px] font-bold uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B82020]" />
            Transforming Children into Confident Leaders
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08]">
            <span className="text-[#202860] dark:text-white transition-colors duration-300">Diction Academy.</span>{" "}
            <span className="text-[#5A6494] dark:text-[#94A3D3] font-semibold transition-colors duration-300">
              Give your child the gift of clear, beautiful, confident speech.
            </span>
          </h1>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="mailto:partnerships@omadiction.pro">
              <button className="px-6 py-3 bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#D12828] transition-colors shadow-md">
                Enrol Your School or Child →
              </button>
            </a>
            <Link href="/registration">
              <button className="px-6 py-3 bg-white dark:bg-[#131A3E] border border-[#D5DCF0] dark:border-[#232E66] text-[#202860] dark:text-white text-xs font-bold uppercase tracking-wider rounded-full hover:border-[#202860] dark:hover:border-[#FF8A8A] transition-colors">
                2024 Diction Awards
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
                Want to hear the before &amp; after difference?
              </p>
              <Link
                href="/contact"
                className="text-[#B82020] dark:text-[#FF8A8A] font-semibold hover:underline inline-flex items-center gap-1 mt-0.5"
              >
                Ask an Elocution Specialist <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stat Bubble Cards */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <StaggerContainer
          staggerChildren={0.12}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "10K+", label: "Transformed Scholars" },
            { value: "50+", label: "Thriving Schools" },
            { value: "3x", label: "Admissions Inquiries" },
            { value: "100%", label: "Parent Pride" },
          ].map((stat, idx) => (
            <StaggerItem key={stat.label}>
              <BubbleCard className="bg-white dark:bg-[#131A3E] rounded-[28px] shadow-sm border border-[#D5DCF0] dark:border-[#232E66] p-6 sm:p-8 text-center h-full">
                <p
                  className={`font-editorial text-3xl sm:text-4xl font-bold group-hover:text-white transition-colors ${
                    idx % 2 === 0 ? "text-[#B82020] dark:text-[#FF8A8A]" : "text-[#202860] dark:text-white"
                  }`}
                >
                  {stat.value}
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-[#202860] dark:text-slate-200 group-hover:text-[#FF8A8A] mt-1.5 transition-colors">
                  {stat.label}
                </p>
              </BubbleCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Services Bubble Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <ScrollReveal direction="up" amount={0.3} className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            <span className="text-[#202860] dark:text-white transition-colors duration-300">6 Life-Changing Modules.</span>{" "}
            <span className="text-[#5A6494] dark:text-[#94A3D3] font-semibold transition-colors duration-300">
              Designed to unlock every child&apos;s courage and brilliance.
            </span>
          </h2>
        </ScrollReveal>

        <StaggerContainer
          staggerChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {dictionServices.map((service) => (
            <StaggerItem key={service.title}>
              <BubbleCard className="bg-white dark:bg-[#131A3E] rounded-[28px] p-7 border border-[#D5DCF0] dark:border-[#232E66] shadow-sm hover:shadow-xl h-full">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex rounded-2xl bg-[#FDF2F2] dark:bg-[#B82020]/20 group-hover:bg-[#B82020] border border-[#F3CACA] dark:border-[#B82020]/40 group-hover:border-[#B82020] p-3.5 transition-colors">
                      <service.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-[#B82020] dark:text-[#FF8A8A] group-hover:text-white transition-colors"
                      />
                    </div>
                    <span className="font-editorial text-sm font-bold text-[#B82020] dark:text-[#FF8A8A] group-hover:text-[#FF8A8A] transition-colors">
                      {service.num}
                    </span>
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-[#202860] dark:text-white group-hover:text-white mb-2 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#424B78] dark:text-[#94A3D3] group-hover:text-slate-200 leading-relaxed transition-colors">
                    {service.description}
                  </p>
                </div>
              </BubbleCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Diction Awards Horizontal Shelf */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-[#E2E6F2] dark:border-[#232E66]">
        <ShelfCarousel
          title="The 2024 Lagos OMA Diction Awards."
          subtitle="Watch ordinary school pupils transform into confident stage champions."
        >
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[300px] sm:w-[350px] relative h-64 rounded-[28px] overflow-hidden border border-[#D5DCF0] dark:border-[#232E66] shadow-sm bg-[#202860]"
            >
              <Image
                src={src}
                alt={`Awards gallery ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </ShelfCarousel>
      </section>

      {/* Executive CTA */}
      <section className="bg-[#202860] dark:bg-[#131A3E] py-16 px-6 text-center transition-colors duration-300">
        <ScrollReveal direction="up" className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF8A8A]">
            Campus Transformation
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
            Ready to Hear Your Pupils Speak with Incredible Confidence?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base mb-8">
            Invite us to your campus for a complimentary 45-minute speech assessment or enroll your students for the 2024 Awards.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact">
              <button className="px-7 py-3.5 bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#D12828] transition-colors shadow-md">
                Invite Us to Your School Free →
              </button>
            </Link>
            <Link href="/registration">
              <button className="px-7 py-3.5 border border-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-white hover:text-[#202860] transition-colors">
                Register for 2024 Awards
              </button>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
