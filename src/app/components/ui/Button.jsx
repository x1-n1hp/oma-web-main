import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-oma font-medium transition-[background-color,border-color,color,transform] duration-150 active:translate-y-px";

const variants = {
  primary:
    "h-[46px] px-[22px] text-[15px] bg-oma-crimson text-oma-onCrimson border border-transparent hover:-translate-y-0.5 hover:bg-oma-crimsonHover",
  outline:
    "h-[46px] px-[22px] text-[15px] bg-transparent text-oma-text border border-oma-lineStrong hover:-translate-y-0.5 hover:border-oma-text",
  outlineSm:
    "h-10 px-4 text-sm bg-transparent text-oma-text border border-oma-lineStrong hover:border-oma-text",
  link:
    "group text-[15px] text-oma-text hover:text-oma-text2",
};

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}) {
  const cls = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
