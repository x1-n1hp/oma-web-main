import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, FaqSection, Reveal, Section } from "../components/ui";

const mediaFaqs = [
  {
    q: "Do you offer monthly retainers or one-off projects?",
    a: "Both. Schools and organisations can partner with us on a monthly retainer for ongoing social media management and video content, or book us for one-off shoots, event coverage, and editing packages.",
  },
  {
    q: "Can we send you raw footage to edit?",
    a: "Yes. Whether we film on-site or you send us raw clips from your team, we handle full post-production — cutting, colour grading, sound cleanup, captions, motion graphics, and platform-ready exports.",
  },
  {
    q: "Which platforms do you create and manage content for?",
    a: "We produce and manage content tailored to Instagram, TikTok, YouTube, LinkedIn, Facebook, and your own website — formatted natively for both vertical short-form and widescreen playback.",
  },
];

export const metadata = {
  title: "Media",
  description:
    "Social media management, video creation, video editing, event coverage, photography, and creative content production from Oma Services.",
};

const offerings = [
  {
    title: "Social media management.",
    body: "End-to-end content calendars, scheduling, community management, and audience growth across Instagram, TikTok, YouTube, LinkedIn, and Facebook.",
  },
  {
    title: "Video creation & production.",
    body: "Concept-to-delivery video production including brand films, school showcase promos, interviews, testimonials, and scroll-stopping short-form reels.",
  },
  {
    title: "Video editing & post-production.",
    body: "Sharp pacing, colour grading, audio mastering, dynamic captions, and motion graphics — turning raw footage into polished, platform-ready stories.",
  },
  {
    title: "Event coverage & photography.",
    body: "On-site photography and multi-camera video capture for open days, speech days, awards nights, conferences, and milestone events.",
  },
  {
    title: "Brand storytelling & graphics.",
    body: "Cohesive visual templates, thumbnails, carousels, and campaign creative that give your organisation an unmistakable presence online.",
  },
  {
    title: "Podcast & audio production.",
    body: "Studio-quality recording, editing, mixing, and video-podcast repurposing into shareable clips for leaders, educators, and brands.",
  },
  {
    title: "Content strategy & analytics.",
    body: "Channel audits, creative direction, paid-social ad creatives, and clear monthly reporting focused on reach, engagement, and enquiries.",
  },
];

export default function MediaPage() {
  return (
    <main className="oma-grain flex min-h-screen flex-col bg-oma-bg text-oma-text">
      <Navbar />

      <section className="py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1200px] px-7">
          <Reveal>
            <p className="mb-4 text-sm text-oma-text3">Media</p>
            <h1 className="mb-6 min-w-0 break-words text-[clamp(40px,6vw,72px)] font-semibold leading-[1.02] tracking-[-0.04em] text-oma-text">
              Stories built to be seen and remembered.
            </h1>
            <p className="mb-8 max-w-[52ch] text-lg leading-relaxed text-oma-text2">
              Social media management, video creation, post-production, and
              creative media services for schools, brands, and organisations.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" href="/contact">
                Start a media project
              </Button>
              <Button variant="outline" href="/services">
                All services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div>
          {offerings.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="grid grid-cols-1 items-baseline gap-3 border-t border-oma-line py-10 last:border-b md:grid-cols-2 md:gap-8">
                <h2 className="text-[clamp(28px,3.4vw,44px)] font-semibold leading-[1.08] tracking-[-0.03em] text-oma-text">
                  {item.title}
                </h2>
                <p className="max-w-[44ch] text-[17px] leading-relaxed text-oma-text2">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FaqSection heading="Media & production FAQs." items={mediaFaqs} />

      <Footer />
    </main>
  );
}
