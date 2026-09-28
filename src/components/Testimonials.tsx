import { site, testimonials } from "@/lib/site";
import Section, { SectionHeading } from "./Section";
import { StarIcon } from "./icons";

export default function Testimonials() {
  return (
    <Section id="testimoni" batik>
      <SectionHeading
        eyebrow="Testimoni Pelanggan"
        title={
          <>
            Dipercaya <span className="text-gold-gradient">Ratusan Pelanggan</span>{" "}
            Setia
          </>
        }
        subtitle={`Rating rata-rata ${site.rating.value}/5 dari ${site.rating.count.toLocaleString("id-ID")} ulasan pelanggan di rumah, hotel, dan apartemen.`}
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2">
        {testimonials.map((item) => (
          <li key={item.name} className="surface-card flex flex-col gap-4 p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-600/40 bg-batik-950 font-display text-base font-semibold text-gold-400">
                  {item.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-cream-50">
                    {item.name}
                  </p>
                  <p className="text-xs text-cream-200/65">{item.role}</p>
                </div>
              </div>
              <div className="flex text-gold-500">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </div>
            </div>
            <p className="text-sm leading-relaxed text-cream-200/85 italic">
              &ldquo;{item.quote}&rdquo;
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-4 rounded-2xl border border-gold-600/25 bg-batik-900/60 p-6 sm:grid-cols-3">
        {[
          { value: "10+", label: "Tahun pengalaman" },
          { value: "1.200+", label: "Pelanggan dilayani" },
          { value: "24/7", label: "Siap dipanggil" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-semibold text-gold-gradient">
              {stat.value}
            </p>
            <p className="mt-1 text-xs tracking-wide text-cream-200/70 uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
