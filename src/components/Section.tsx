import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Terapkan ornamen batik di background. */
  batik?: boolean;
  /** Kelas tambahan untuk container dalam. */
  innerClassName?: string;
};

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export default function Section({
  id,
  children,
  className = "",
  batik = false,
  innerClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-16 sm:py-20 lg:py-24 ${batik ? "batik-bg" : ""} ${className}`}
    >
      <Container className={innerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
}) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-600/40 bg-batik-800/60 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-gold-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed text-cream-200/80 sm:text-lg ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
