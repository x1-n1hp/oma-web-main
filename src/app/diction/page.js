import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  BubbleCard,
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
            Division I • Professional Diction &amp; Elocution
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Speak English with{" "}
            <span className="italic font-normal text-[#FF8A8A]">
              clarity and authority.
            </span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            OMA has trained over 10,000 students and professionals across
            Nigeria to master spoken English — from phonemic fundamentals to
            commanding stage and boardroom delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:partnerships@omadiction.pro">
              <button className="px-7 py-3.5 bg-[#B82020] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#D12828] transition-colors shadow-md">
                Enrol Your School or Team →
              </button>
            </a>
            <Link href="/registration">
              <button className="px-7 py-3.5 border border-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-white/10 transition-colors">
                2024 Diction Awards
              </button>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Stat Bubble Cards */}
      <section className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
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
              <BubbleCard className="bg-white rounded-2xl shadow-lg border border-[#D5DCF0] p-6 sm:p-8 text-center h-full">
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
      <section className="max-w-6xl mx-auto px-6 py-20">
        <ScrollReveal direction="up" amount={0.3} className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B82020]">
            Curriculum &amp; Coaching
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#202860] mt-1">
            What We Offer in Our Diction Academy
          </h2>
        </ScrollReveal>

        <StaggerContainer
          staggerChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {dictionServices.map((service) => (
            <StaggerItem key={service.title}>
              <BubbleCard className="bg-white rounded-2xl p-7 border border-[#D5DCF0] shadow-sm hover:shadow-xl h-full">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex rounded-xl bg-[#FDF2F2] group-hover:bg-[#B82020] border border-[#F3CACA] group-hover:border-[#B82020] p-3 transition-colors">
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

      {/* Diction Awards Showcase */}
      <section className="bg-white border-y border-[#E2E6F2] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal
            direction="up"
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#B82020]">
              Annual Competition
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#202860] mt-1">
              The Lagos OMA Diction Awards
            </h2>
            <p className="text-[#424B78] text-sm sm:text-base mt-3 leading-relaxed">
              Each year we celebrate exceptional communicators who have
              demonstrated mastery of spoken and written English across Lagos
              schools.
            </p>
          </ScrollReveal>

          <ScrollReveal
            direction="up"
            delay={0.15}
            className="mb-12 flex justify-center"
          >
            <div className="p-4 rounded-3xl bg-[#FAF8F5] border border-[#D5DCF0] shadow-lg max-w-2xl w-full">
              <Image
                src="/images/diction-awards.jpg"
                alt="Diction Awards"
                width={680}
                height={340}
                className="rounded-2xl object-cover w-full max-h-96 object-top"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer
            staggerChildren={0.1}
            className="grid grid-cols-2 md:grid-cols-3 gap-5"
          >
            {galleryImages.map((src, i) => (
              <StaggerItem
                key={i}
                className="relative h-56 rounded-2xl overflow-hidden border border-[#D5DCF0] shadow-sm bg-[#202860]"
              >
                <Image
                  src={src}
                  alt={`Awards gallery ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
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
