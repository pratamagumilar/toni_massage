import Image from "next/image";
import { site } from "@/lib/site";
import CtaButton from "./CtaButton";
import { Container } from "./Section";
import { BoltIcon, CheckIcon, StarIcon } from "./icons";

const quickPoints = [
  "Terapis berpengalaman & bertenaga",
  "Datang ke rumah, hotel, apartemen, kost",
  "Bayar setelah selesai, tanpa biaya tersembunyi",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="batik-bg relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      {/* Cahaya hangat di belakang hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gold-600/12 blur-3xl"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Kolom teks */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-600/45 bg-batik-800/70 px-4 py-2 text-xs font-semibold tracking-wide text-gold-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa-500 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-wa-500" />
              </span>
              Siap Terima Panggilan Sekarang - {site.hours}
            </span>

            <h1 className="mt-6 text-4xl leading-[1.1] font-semibold sm:text-5xl lg:text-[3.4rem]">
              <span className="text-gold-gradient">
                Pijat Tradisional Jawa Panggilan 24 Jam
              </span>
              <span className="mt-2 block text-2xl text-cream-50 sm:text-3xl lg:text-[2.1rem]">
                Bugar Kembali Tanpa Perlu Keluar Rumah
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-200/85 sm:text-lg">
              Terapis berpengalaman, bertenaga, &amp; terpercaya. Langsung
              dipanggil ke <strong className="text-cream-50">Rumah</strong>,{" "}
              <strong className="text-cream-50">Hotel</strong>,{" "}
              <strong className="text-cream-50">Apartemen</strong>, atau{" "}
              <strong className="text-cream-50">Kost</strong> Anda.
            </p>

            <ul className="mt-7 flex flex-col gap-2.5 text-left">
              {quickPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-cream-200/90 sm:text-base"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-wa-500/15 text-wa-500">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:w-auto">
              <CtaButton location="hero" size="lg" className="animate-pulse-cta">
                Pesan Sekarang via WhatsApp
              </CtaButton>
              <CtaButton
                location="hero"
                variant="call"
                size="lg"
                className="whitespace-nowrap"
              >
                Telepon Cepat
              </CtaButton>
            </div>

            {/* Bukti sosial */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex text-gold-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <span className="text-sm text-cream-200/80">
                  <strong className="text-cream-50">
                    {site.rating.value}/5
                  </strong>{" "}
                  ({site.rating.count.toLocaleString("id-ID")} pelanggan)
                </span>
              </div>
              <span className="hidden h-4 w-px bg-gold-600/40 sm:block" />
              <div className="flex items-center gap-2 text-sm text-cream-200/80">
                <BoltIcon className="h-4 w-4 text-gold-500" />
                Terapis tiba rata-rata{" "}
                <strong className="text-cream-50">{site.responseTime}</strong>
              </div>
            </div>
          </div>

          {/* Kolom visual */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-gold-600/35 bg-batik-900 shadow-[0_40px_90px_-40px_rgba(212,175,55,0.45)]">
              <Image
                src="/kang-toni.svg"
                alt={`Ilustrasi ${site.name} berbusana adat Jawa dengan latar batik`}
                width={720}
                height={760}
                priority
                sizes="(max-width: 1024px) 90vw, 480px"
                className="h-auto w-full"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-batik-950/80 via-transparent to-transparent"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-gold-600/30 bg-batik-950/80 px-4 py-3 backdrop-blur-sm">
                <div>
                  <p className="font-display text-sm font-semibold text-cream-50">
                    Kang Toni
                  </p>
                  <p className="text-xs text-cream-200/75">
                    Terapis Tradisional Jawa
                  </p>
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-wa-500/15 px-3 py-1.5 text-xs font-semibold text-wa-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-wa-500" />
                  Online
                </span>
              </div>
            </div>

            {/* Lencana melayang */}
            <div className="animate-float-slow absolute -top-3 -left-2 rounded-2xl border border-gold-600/40 bg-batik-800/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:-left-6">
              <p className="font-display text-lg font-semibold text-gold-400">
                24 Jam
              </p>
              <p className="text-[11px] text-cream-200/75">Setiap hari</p>
            </div>
            <div className="absolute -right-2 -bottom-4 rounded-2xl border border-gold-600/40 bg-batik-800/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:-right-6">
              <p className="font-display text-lg font-semibold text-gold-400">
                Sejak 2014
              </p>
              <p className="text-[11px] text-cream-200/75">
                Ratusan pelanggan setia
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
