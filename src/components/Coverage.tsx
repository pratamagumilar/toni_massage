import { areas, site } from "@/lib/site";
import CtaButton from "./CtaButton";
import Section, { SectionHeading } from "./Section";
import { BoltIcon, PinIcon } from "./icons";

export default function Coverage() {
  return (
    <Section id="area" batik>
      <SectionHeading
        eyebrow="Area Layanan"
        title={
          <>
            Melayani <span className="text-gold-gradient">Bandung</span> &amp;
            Sekitarnya
          </>
        }
        subtitle={`Estimasi waktu tiba di bawah ini dihitung dari saat order dikonfirmasi. Di luar jam sibuk biasanya terapis tiba lebih cepat.`}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Daftar area */}
        <ul className="grid gap-3 sm:grid-cols-2">
          {areas.map((area) => (
            <li
              key={area.name}
              className="surface-card flex items-center justify-between gap-3 px-4 py-3.5"
            >
              <span className="flex items-center gap-2.5 text-sm font-medium text-cream-100">
                <PinIcon className="h-4 w-4 shrink-0 text-gold-500" />
                {area.name}
              </span>
              <span className="shrink-0 rounded-full bg-batik-950/70 px-3 py-1 text-[11px] font-semibold text-gold-400">
                {area.eta}
              </span>
            </li>
          ))}
        </ul>

        {/* Peta sederhana + info */}
        <div className="surface-card flex flex-col gap-5 p-5 lg:p-6">
          <div>
            <h3 className="font-display text-lg font-semibold text-cream-50">
              Cara Cek Area Anda
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream-200/75">
              Kirim lokasi Anda lewat WhatsApp. Kami cek terapis terdekat dan
              infokan estimasi kedatangan secara pasti sebelum Anda memutuskan
              booking.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-gold-600/25 bg-batik-950/70 p-5">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(212,175,55,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.18) 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />
            <div className="relative flex flex-col items-center gap-3 py-6 text-center">
              <span className="relative flex h-16 w-16 items-center justify-center">
                <span className="absolute h-full w-full animate-ping rounded-full bg-gold-500/20" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/60 bg-batik-800 text-gold-500">
                  <PinIcon className="h-6 w-6" />
                </span>
              </span>
              <p className="font-display text-base font-semibold text-cream-50">
                Bandung &amp; Sekitarnya
              </p>
              <p className="max-w-xs text-xs leading-relaxed text-cream-200/70">
                Termasuk hotel, apartemen, kantor, dan kost di area yang
                tercantum.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-wa-500/25 bg-wa-500/8 px-4 py-3.5">
            <BoltIcon className="mt-0.5 h-5 w-5 shrink-0 text-wa-500" />
            <p className="text-sm leading-relaxed text-cream-100">
              Rata-rata terapis tiba dalam{" "}
              <strong className="text-wa-500">{site.responseTime}</strong> di
              area utama Bandung &amp; sekitarnya.
            </p>
          </div>

          <CtaButton
            location="area_section"
            size="lg"
            message="Halo Kang Toni, saya mau cek area layanan. Lokasi saya di [Sebutkan Area/Hotel]. Apakah terapis bisa datang ke sana?"
            className="w-full"
          >
            Cek Area Saya Sekarang
          </CtaButton>
        </div>
      </div>
    </Section>
  );
}
