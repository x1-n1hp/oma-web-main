export default function Section({ children, className = "", id }) {
  return (
    <section
      id={id}
      className={`relative border-t border-oma-line py-24 md:py-32 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1200px] px-7">{children}</div>
    </section>
  );
}
