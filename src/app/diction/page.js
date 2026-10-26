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
  title: "Professional Diction | Oma Services",
  description:
    "World-class diction training, speech therapy, phonics, and language coaching for individuals and schools.",
};

const dictionServices = [
  {
    num: "01",
    title: "Speech Therapy",
    description:
      "Targeted correction of pronunciation patterns, accent refinement, and vocal clarity for confident everyday communication.",
    icon: SpeakerWaveIcon,
  },
  {
    num: "02",
    title: "Diction Training",
    description:
      "Structured class-by-class programmes that sharpen articulation, rhythm, and delivery for students and professionals alike.",
    icon: AcademicCapIcon,
  },
  {
    num: "03",
    title: "Phonics Classes",
    description:
      "Building strong reading and spelling foundations through phonemic awareness — ideal for young and remedial learners.",
    icon: BookOpenIcon,
  },
  {
    num: "04",
    title: "Diction Club",
    description:
      "A community programme where members practise together, receive peer feedback, and build lasting communication confidence.",
    icon: UserGroupIcon,
  },
  {
    num: "05",
    title: "Social Polish & Etiquette",
    description:
      "Etiquette and executive communication coaching for interviews, boardrooms, presentations, and public speaking.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    num: "06",
    title: "Diction Games",
    description:
      "Interactive linguistic challenges and activities that make mastering pronunciation engaging for children and adults.",
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
    <main className="min-h-screen bg-[#F5F5F7] text-[#202860] overflow-hidden">
      <Navbar />

      {/* Apple Store Style Two-Tone Header + Specialist Widget */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <ScrollReveal direction="up" delay={0.1} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F2] border border-[#F3CACA] text-[#B82020] text-[11px] font-bold uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B82020]" />
            Division I • Professional Diction &amp; Elocution
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] text-[#202860]">
            Diction Academy.{" "}
            <span className="text-[#5A6494] font-semibold">
              Speak English with clarity, phonemic precision, and executive authority.
            </span>
          </h1>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="mailto:partnerships@omadiction.pro">
              <button className="px-6 py-3 bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#D12828] transition-colors shadow-md">
                Enrol Your School or Team →
              </button>
            </a>
            <Link href="/registration">
              <button className="px-6 py-3 bg-white border border-[#D5DCF0] text-[#202860] text-xs font-bold uppercase tracking-wider rounded-full hover:border-[#202860] transition-colors">
                2024 Diction Awards
              </button>
            </Link>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-3 shrink-0">
          <div className="flex items-center gap-3.5 bg-white px-4 py-3 rounded-2xl border border-[#D5DCF0] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#202860] text-white flex items-center justify-center font-editorial font-bold text-sm border-2 border-[#B82020] shrink-0">
              OMA
            </div>
            <div className="text-xs leading-snug">
              <p className="font-bold text-[#202860]">
                Need a school diction audit?
              </p>
              <Link
                href="/contact"
                className="text-[#B82020] font-semibold hover:underline inline-flex items-center gap-1 mt-0.5"
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
            { value: "10+", label: "Years Training" },
            { value: "50+", label: "Partner Schools" },
            { value: "10,000+", label: "Students Trained" },
            { value: "830+", label: "Positive Reviews" },
          ].map((stat, idx) => (
            <StaggerItem key={stat.label}>
              <BubbleCard className="bg-white rounded-[28px] shadow-sm border border-[#D5DCF0] p-6 sm:p-8 text-center h-full">
                <p
                  className={`font-editorial text-3xl sm:text-4xl font-bold group-hover:text-white transition-colors ${
                    idx % 2 === 0 ? "text-[#B82020]" : "text-[#202860]"
                  }`}
                >
                  {stat.value}
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-[#202860] group-hover:text-[#FF8A8A] mt-1.5 transition-colors">
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
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#202860]">
            Curriculum &amp; Coaching.{" "}
            <span className="text-[#5A6494] font-semibold">
              What we offer in our Diction Academy.
            </span>
          </h2>
        </ScrollReveal>

        <StaggerContainer
          staggerChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {dictionServices.map((service) => (
            <StaggerItem key={service.title}>
              <BubbleCard className="bg-white rounded-[28px] p-7 border border-[#D5DCF0] shadow-sm hover:shadow-xl h-full">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex rounded-2xl bg-[#FDF2F2] group-hover:bg-[#B82020] border border-[#F3CACA] group-hover:border-[#B82020] p-3.5 transition-colors">
                      <service.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-[#B82020] group-hover:text-white transition-colors"
                      />
                    </div>
                    <span className="font-editorial text-sm font-bold text-[#B82020] group-hover:text-[#FF8A8A] transition-colors">
                      {service.num}
                    </span>
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-[#202860] group-hover:text-white mb-2 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#424B78] group-hover:text-slate-200 leading-relaxed transition-colors">
                    {service.description}
                  </p>
                </div>
              </BubbleCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Diction Awards Horizontal Shelf */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-[#E2E6F2]">
        <ShelfCarousel
          title="The Lagos OMA Diction Awards."
          subtitle="Celebrating exceptional communicators across Lagos schools."
        >
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[300px] sm:w-[350px] relative h-64 rounded-[28px] overflow-hidden border border-[#D5DCF0] shadow-sm bg-[#202860]"
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
      <section className="bg-[#202860] py-16 px-6 text-center">
        <ScrollReveal direction="up" className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF8A8A]">
            Next Steps
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
            Ready to Transform How Your Institution Speaks?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base mb-8">
            Register for the 2024 competition or schedule a consultation for
            school-wide or executive diction training.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/registration">
              <button className="px-7 py-3.5 bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#D12828] transition-colors shadow-md">
                Register for Awards →
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-7 py-3.5 border border-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-white hover:text-[#202860] transition-colors">
                Book Consultation
              </button>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
