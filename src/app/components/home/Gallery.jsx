import Image from "next/image";
import { Reveal, Section } from "../ui";

const photos = [
  {
    src: "/images/DSC_6802.JPG",
    alt: "Students performing on stage at the OMA Diction Awards",
    caption: "Stage confidence & live competitions",
  },
  {
    src: "/images/speech1.png",
    alt: "Diction and articulation coaching session",
    caption: "Articulation & vocal clarity",
  },
  {
    src: "/images/DSC_6544.JPG",
    alt: "Classroom engagement with pupils",
    caption: "In-school workshops & phonics",
  },
  {
    src: "/images/DSC_6538.JPG",
    alt: "Celebrating pupil achievements",
    caption: "Celebrating articulate young leaders",
  },
];

export default function Gallery() {
  return (
    <Section>
      <Reveal>
        <p className="mb-4 text-sm text-oma-text3">In action</p>
        <h2 className="mb-12 min-w-0 break-words text-[clamp(32px,4vw,52px)] font-semibold leading-[1.05] tracking-[-0.035em] text-oma-text">
          Real classrooms. Real confidence.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map((photo, i) => (
          <Reveal key={photo.src} delay={i * 0.06}>
            <figure className="overflow-hidden rounded-oma border border-oma-line bg-oma-s1">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-oma-s2">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm text-oma-text2">
                {photo.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
