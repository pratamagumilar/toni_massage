import { orderSteps } from "@/lib/site";
import CtaButton from "./CtaButton";
import Section, { SectionHeading } from "./Section";
import { HandIcon } from "./icons";

export default function HowToOrder() {
  return (
    <Section id="cara-order" className="bg-batik-950">
      <SectionHeading
        eyebrow="Cara Order Mudah"
        title={
          <>
            Tiga Langkah, <span className="text-gold-gradient">Pijat Siap Datang</span>
          </>
        }
        subtitle="Tidak perlu aplikasi, tidak perlu daftar. Cukup satu pesan WhatsApp, sisanya kami urus."
      />

      <ol className="relative mt-12 grid gap-6 lg:grid-cols-3">
        {/* Garis penghubung antar langkah */}
        <div
          aria-hidden
          className="absolute top-16 right-8 left-8 hidden h-px bg-gradient-to-r from-transparent via-gold-600/45 to-transparent lg:block"
        />

        {orderSteps.map((item) => (
          <li
            key={item.step}
            className="surface-card surface-card-hover relative flex flex-col items-center gap-4 p-6 text-center lg:p-7"
          >
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/50 bg-batik-950 text-gold-500">
              <span className="font-display text-xl font-bold">{item.step}</span>
            </span>
            <h3 className="font-display text-lg font-semibold text-cream-50">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-cream-200/75">
              {item.desc}
            </p>
          </li>
        ))}
      </ol>

      <div className="surface-card mt-10 flex flex-col items-center gap-5 border-gold-600/30 bg-gradient-to-r from-batik-800 via-batik-900 to-batik-800 p-6 text-center sm:flex-row sm:text-left lg:p-8">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold-600/40 bg-batik-950 text-gold-500">
          <HandIcon className="h-7 w-7" />
        </span>
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-cream-50">
            Butuh pijat darurat malam ini?
          </h3>
          <p className="mt-1 text-sm text-cream-200/75">
            Langsung kirim pesan, terapis kami berangkat selama masih tersedia.
          </p>
        </div>
        <CtaButton location="how_to_order" size="lg" className="w-full sm:w-auto">
          Booking Sekarang
        </CtaButton>
      </div>
    </Section>
  );
}
