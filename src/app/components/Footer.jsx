import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-oma-line bg-oma-bg py-10 text-sm text-oma-text3">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col justify-between gap-6 px-7 md:flex-row md:items-center">
        <div className="space-y-1">
          <div className="font-medium text-oma-text">
            &copy; {new Date().getFullYear()} Oma Services
          </div>
          <div>
            Address: 14 Britten Place Sullivan Court, Biggleswade, Bedfordshire SG18 8RE.
          </div>
          <div>
            Phone (UK):{" "}
            <a
              href="tel:+447391285441"
              className="text-oma-text2 transition-colors duration-150 hover:text-oma-text"
            >
              +44 7391 285441
            </a>
          </div>
        </div>

        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          <Link href="/" className="text-oma-text2 transition-colors duration-150 hover:text-oma-text">
            Home
          </Link>
          <Link href="/services" className="text-oma-text2 transition-colors duration-150 hover:text-oma-text">
            Services
          </Link>
          <Link href="/about" className="text-oma-text2 transition-colors duration-150 hover:text-oma-text">
            About
          </Link>
          <Link href="/contact" className="text-oma-text2 transition-colors duration-150 hover:text-oma-text">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
