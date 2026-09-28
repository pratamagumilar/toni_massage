import { ethicsDisclaimer, navLinks, site } from "@/lib/site";
import CtaButton from "./CtaButton";
import { Container } from "./Section";
import { ClockIcon, LotusIcon, PhoneIcon, PinIcon, ShieldIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="batik-bg relative border-t border-gold-600/25 bg-batik-900/80 pb-28 lg:pb-12">
      <Container>
        {/* Ajakan terakhir */}
        <div className="flex flex-col items-center gap-5 border-b border-gold-600/20 py-12 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Siap Bugar Kembali{" "}
            <span className="text-gold-gradient">Malam Ini?</span>
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-cream-200/80 sm:text-base">
            Kirim pesan sekarang, sebutkan lokasi dan jam yang Anda inginkan.
            Terapis Kang Toni siap datang ke tempat Anda.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <CtaButton location="footer_cta" size="lg">
              Pesan via WhatsApp
            </CtaButton>
            <CtaButton location="footer_cta" variant="call" size="lg">
              Telepon Sekarang
            </CtaButton>
          </div>
        </div>

        {/* Grid footer */}
        <div className="grid gap-10 py-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-600/50 bg-batik-800 text-gold-500">
                <LotusIcon className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg font-semibold text-cream-50">
                  Kang Toni
                </span>
                <span className="text-[10px] tracking-[0.16em] text-gold-500 uppercase">
                  Pijat Tradisional Jawa
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-200/70">
              {site.description}
            </p>
            <p className="mt-4 flex items-start gap-2 rounded-xl border border-wa-500/25 bg-wa-500/8 px-4 py-3 text-xs leading-relaxed text-cream-100/85">
              <ShieldIcon className="mt-0.5 h-4 w-4 shrink-0 text-wa-500" />
              {ethicsDisclaimer}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-[0.14em] text-gold-400 uppercase">
              Navigasi
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-200/75 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-[0.14em] text-gold-400 uppercase">
              Kontak &amp; Jam Buka
            </h3>
            <ul className="mt-4 flex flex-col gap-3.5 text-sm text-cream-200/75">
              <li className="flex items-start gap-2.5">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span>{site.hours}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span>Melayani {site.city}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <a
                  href={`tel:${site.phoneNumber.replace(/[^\d+]/g, "")}`}
                  className="transition-colors hover:text-gold-400"
                >
                  {site.phoneNumber}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-gold-600/20 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-cream-200/55">
            &copy; {year} {site.name}. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-xs text-cream-200/55">
            Layanan pijat kesehatan keluarga &middot; Melayani dengan etika
          </p>
        </div>
      </Container>
    </footer>
  );
}
