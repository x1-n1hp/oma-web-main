import { Button, Reveal, Section } from "../ui";

export default function ContactBand() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="rounded-oma border border-oma-line bg-oma-s1 p-8 md:p-16">
          <p className="mb-4 text-sm text-oma-text3">Contact</p>
          <h2 className="min-w-0 break-words text-[clamp(32px,4vw,52px)] font-semibold leading-[1.05] tracking-[-0.035em] text-oma-text">
            Let&apos;s talk.
          </h2>

          <div className="my-8 grid gap-1 md:my-10">
            <a
              href="tel:+447587337870"
              className="break-words text-[clamp(24px,3.2vw,40px)] font-medium leading-tight tracking-[-0.025em] text-oma-text transition-colors duration-150 hover:text-oma-text2"
            >
              +44 7587 337870 (UK)
            </a>
            <a
              href="mailto:partnerships@oma.services"
              className="break-words text-[clamp(20px,2.8vw,36px)] font-medium leading-tight tracking-[-0.025em] text-oma-text transition-colors duration-150 hover:text-oma-text2"
            >
              partnerships@oma.services
            </a>
            <p className="mt-3 text-lg text-oma-text2">
              14 Britten Place Sullivan Court, Biggleswade, Bedfordshire SG18 8RE.
            </p>
          </div>

          <Button variant="primary" href="/contact">
            Book consultation
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
