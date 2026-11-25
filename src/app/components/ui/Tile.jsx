import Link from "next/link";

export default function Tile({ title, description, href = "/contact", className = "" }) {
  return (
    <Link
      href={href}
      className={`group flex min-h-[220px] flex-col justify-between gap-10 rounded-oma border border-oma-line bg-oma-s1 p-7 text-oma-text transition-[border-color,background-color] duration-150 hover:border-oma-lineStrong hover:bg-oma-s2 ${className}`}
    >
      <div>
        <h3 className="mb-2 text-2xl font-semibold tracking-[-0.02em] text-oma-text">
          {title}
        </h3>
        <p className="text-[15px] leading-relaxed text-oma-text2">
          {description}
        </p>
      </div>
      <span
        aria-hidden="true"
        className="inline-block text-xl text-oma-text3 transition-[transform,color] duration-150 group-hover:translate-x-1 group-hover:text-oma-text"
      >
        &rarr;
      </span>
    </Link>
  );
}
