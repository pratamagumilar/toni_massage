import { ethicsDisclaimer, faqs } from "@/lib/site";
import CtaButton from "./CtaButton";
import Section, { SectionHeading } from "./Section";
import { ChevronDownIcon, NoIcon, ShieldIcon } from "./icons";

export default function Faq() {
  return (
    <Section id="faq" className="bg-batik-950">
      <SectionHeading
        eyebrow="FAQ & Etika Layanan"
        title={
          <>
            Pertanyaan yang{" "}
            <span className="text-gold-gradient">Sering Ditanyakan</span>
          </>
        }
        subtitle="Kami menjawab pertanyaan paling umum agar Anda tenang sebelum memesan."
      />

      {/* Kartu komitmen etika - penting untuk kepatuhan Google Ads */}
      <div className="mx-auto mt-10 flex max-w-3xl flex-col items-start gap-4 rounded-2xl border border-wa-500/30 bg-wa-500/8 p-5 sm:flex-row sm:items-center sm:p-6">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-wa-500/40 bg-batik-950/60 text-wa-500">
          <ShieldIcon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="font-display text-base font-semibold text-cream-50">
            Komitmen Etika &amp; Legalitas
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-cream-100/85">
            {ethicsDisclaimer}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group surface-card overflow-hidden transition-colors open:border-gold-500/50"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left font-medium text-cream-50 marker:content-none">
              <span className="text-sm sm:text-base">{faq.q}</span>
              <ChevronDownIcon className="h-5 w-5 shrink-0 text-gold-500 transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className="border-t border-gold-600/20 px-5 py-4">
              <p className="text-sm leading-relaxed text-cream-200/80">
                {faq.a}
              </p>
            </div>
          </details>
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-gold-600/25 bg-batik-900/60 p-6 text-center">
        <span className="flex items-center gap-2 text-sm font-semibold text-gold-400">
          <NoIcon className="h-4 w-4" />
          Tidak melayani hal asusila / plus-plus
        </span>
        <p className="text-sm text-cream-200/80">
          Kami berkomitmen menyediakan layanan kebugaran keluarga yang bersih,
          sopan, dan profesional. Terapis kami dibekali aturan kerja yang tegas.
        </p>
        <CtaButton location="faq_section" size="lg">
          Masih Ragu? Chat Kami Dulu
        </CtaButton>
      </div>
    </Section>
  );
}
