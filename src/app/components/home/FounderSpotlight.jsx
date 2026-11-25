import Image from "next/image";
import { Button, Reveal, Section } from "../ui";

export default function FounderSpotlight() {
  return (
    <Section>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-oma border border-oma-line bg-oma-s1">
            <Image
              src="/images/Oma-pic.JPG"
              alt="Founder of Oma Services"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mb-4 text-sm text-oma-text3">Founder&apos;s note</p>
          <h2 className="mb-6 min-w-0 break-words text-[clamp(32px,4vw,52px)] font-semibold leading-[1.05] tracking-[-0.035em] text-oma-text">
            Every pupil deserves a clear voice.
          </h2>
          <p className="mb-4 max-w-[52ch] text-lg leading-relaxed text-oma-text2">
            Oma Services started with a simple conviction: when children speak
            with clarity and schools have dependable teachers and tools,
            everything changes.
          </p>
          <p className="mb-8 max-w-[52ch] text-base leading-relaxed text-oma-text2">
            From our base in Biggleswade, Bedfordshire, we partner directly with
            heads of school, educators and families across the UK and beyond.
          </p>
          <Button variant="outline" href="/about">
            Read our story
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
