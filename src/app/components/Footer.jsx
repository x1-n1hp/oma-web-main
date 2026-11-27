import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-oma-line bg-oma-s1 py-16 text-sm text-oma-text3">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 px-7 md:grid-cols-12">
        {/* Column 1: Brand & Contact */}
        <div className="space-y-3 md:col-span-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 text-base font-semibold text-oma-text"
          >
            <Image
              src="/images/oma-logo.png"
              alt=""
              width={28}
              height={28}
              className="h-7 w-auto"
            />
            <span>Oma Services</span>
          </Link>
          <p className="max-w-sm text-oma-text2">
            UK supply teaching, articulation, kids development, consulting,
            speaking, media and digital engineering for schools.
          </p>
          <div className="space-y-1 pt-2 text-oma-text2">
            <div>
              Address: 14 Britten Place Sullivan Court, Biggleswade,
              Bedfordshire SG18 8RE.
            </div>
            <div>
              Phone (UK):{" "}
              <a
                href="tel:+447587337870"
                className="font-medium text-oma-text transition-colors duration-150 hover:text-oma-text2"
              >
                +44 7587 337870
              </a>
            </div>
            <div>
              Email:{" "}
              <a
                href="mailto:partnerships@oma.services"
                className="font-medium text-oma-text transition-colors duration-150 hover:text-oma-text2"
              >
                partnerships@oma.services
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="space-y-3 md:col-span-4">
          <div className="font-medium text-oma-text">Services</div>
          <ul className="space-y-2.5">
            <li>
              <Link href="/teaching" className="text-oma-text2 hover:text-oma-text">
                UK Supply Teaching
              </Link>
            </li>
            <li>
              <Link href="/diction" className="text-oma-text2 hover:text-oma-text">
                Articulation &amp; Kids Development
              </Link>
            </li>
            <li>
              <Link href="/speaking" className="text-oma-text2 hover:text-oma-text">
                Speaking &amp; Events
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-oma-text2 hover:text-oma-text">
                School Growth Consulting
              </Link>
            </li>
            <li>
              <Link href="/web-design" className="text-oma-text2 hover:text-oma-text">
                Websites, Mobile &amp; Web Apps
              </Link>
            </li>
            <li>
              <Link href="/media" className="text-oma-text2 hover:text-oma-text">
                Media &amp; Content Production
              </Link>
            </li>
            <li>
              <Link href="/literacy" className="text-oma-text2 hover:text-oma-text">
                Reading &amp; Writing (Virtual &amp; In-Person)
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Connect */}
        <div className="space-y-3 md:col-span-3">
          <div className="font-medium text-oma-text">Connect</div>
          <ul className="space-y-2.5">
            <li>
              <Link href="/about" className="text-oma-text2 hover:text-oma-text">
                About
              </Link>
            </li>
            <li>
              <Link href="/registration" className="text-oma-text2 hover:text-oma-text">
                OMA Diction Awards
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-oma-text2 hover:text-oma-text">
                Book consultation
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/447587337870"
                target="_blank"
                rel="noopener noreferrer"
                className="text-oma-text2 hover:text-oma-text"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@dictionoracle8254"
                target="_blank"
                rel="noopener noreferrer"
                className="text-oma-text2 hover:text-oma-text"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-4 border-t border-oma-line px-7 pt-6 text-xs text-oma-text3">
        <span>&copy; {new Date().getFullYear()} Oma Services</span>
        <span>Biggleswade, Bedfordshire, UK</span>
      </div>
    </footer>
  );
}
