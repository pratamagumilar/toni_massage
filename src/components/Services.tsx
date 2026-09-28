import { services, site } from "@/lib/site";
import CtaButton from "./CtaButton";
import Section, { SectionHeading } from "./Section";
import { CheckIcon, ClockIcon, SparkleIcon } from "./icons";

export default function Services() {
  return (
    <Section id="layanan" className="bg-batik-950">
      <SectionHeading
        eyebrow="Menu Layanan & Tarif"
        title={
          <>
            Harga Jelas Sejak Awal,{" "}
            <span className="text-gold-gradient">Tanpa Biaya Tersembunyi</span>
          </>
        }
        subtitle="Tarif di bawah adalah harga resmi dan final di area layanan kami. Tanpa biaya tersembunyi."
      />

      <ul className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
        {services.map((service) => (
          <li
            key={`${service.name}-${service.duration}`}
            className={`surface-card surface-card-hover relative flex flex-col p-6 sm:p-7 ${
              service.highlight
                ? "border-gold-500/60 shadow-[0_24px_60px_-30px_rgba(212,175,55,0.7)]"
                : ""
            }`}
          >
            {service.highlight && (
              <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-3 py-1 text-[11px] font-bold tracking-wide text-batik-950 uppercase shadow-md">
                <SparkleIcon className="h-3 w-3" />
                Layanan Utama
              </span>
            )}

            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg leading-snug font-semibold text-cream-50">
                {service.name}
              </h3>
              <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-gold-600/40 bg-batik-950/70 px-3 py-1 text-xs font-semibold text-gold-400">
                <ClockIcon className="h-3.5 w-3.5" />
                {service.duration}
              </span>
            </div>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-cream-200/75">
              {service.desc}
            </p>

            <div className="mt-5 flex items-end justify-between gap-3 border-t border-gold-600/20 pt-5">
              <div>
                <p className="text-[11px] tracking-[0.14em] text-cream-200/55 uppercase">
                  Tarif Paket
                </p>
                <p className="font-display text-2xl font-semibold text-gold-gradient">
                  {service.price}
                </p>
              </div>
              <CtaButton
                location={`service_${service.duration.replace(/\s/g, "")}`}
                message={`Halo Kang Toni, saya mau booking ${service.name} (${service.duration}) seharga ${service.price}. Lokasi saya di [Sebutkan Area/Hotel] untuk jam [Sebutkan Jam]. Apakah bisa?`}
                className="!px-4 !py-2.5 !text-xs"
              >
                Booking
              </CtaButton>
            </div>
          </li>
        ))}

        {/* Kartu info tambahan */}
        <li className="surface-card flex flex-col justify-center gap-4 border-gold-600/30 bg-gradient-to-br from-batik-800 to-batik-900 p-6">
          <h3 className="font-display text-lg font-semibold text-cream-50">
            Sudah termasuk
          </h3>
          <ul className="flex flex-col gap-2.5">
            {[
              "Minyak pijat & handuk bersih",
              "Peralatan kerokan higienis",
              "Terapis sopan & berpengalaman",
              "Bayar setelah selesai (tunai/transfer)",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-cream-200/85"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-wa-500/15 text-wa-500">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="rounded-xl border border-gold-600/20 bg-batik-950/60 px-4 py-3 text-xs leading-relaxed text-cream-200/70">
            Tambahan biaya transportasi hanya berlaku di luar{" "}
            {site.city.split("&")[0].trim()} dan akan diinfokan sebelum terapis
            berangkat.
          </p>
        </li>
      </ul>
    </Section>
  );
}
