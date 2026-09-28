import { keluhanList } from "@/lib/site";
import CtaButton from "./CtaButton";
import Section, { SectionHeading } from "./Section";
import { keluhanIconMap } from "./icons";

export default function Keluhan() {
  return (
    <Section id="keluhan" batik>
      <SectionHeading
        eyebrow="Keluhan yang Dibantu"
        title={
          <>
            Badan Pegal &amp; Masuk Angin?{" "}
            <span className="text-gold-gradient">Kami Paham Rasanya</span>
          </>
        }
        subtitle="Urut tradisional Jawa dengan tekanan yang pas membantu meredakan keluhan berikut. Bukan sekadar pijat biasa, tetapi terapi yang disesuaikan dengan kondisi tubuh Anda."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {keluhanList.map((item) => {
          const Icon = keluhanIconMap[item.icon];
          return (
            <li
              key={item.title}
              className="surface-card surface-card-hover group flex gap-4 p-5 lg:p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-600/35 bg-batik-950/70 text-gold-500 transition-colors group-hover:border-gold-500/70 group-hover:text-gold-400">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-cream-50 lg:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cream-200/75">
                  {item.desc}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-12 flex flex-col items-center gap-4 text-center">
        <p className="text-sm text-cream-200/80 sm:text-base">
          Keluhan Anda tidak ada di daftar?{" "}
          <strong className="text-cream-50">Konsultasi gratis</strong> lewat
          WhatsApp, kami bantu rekomendasikan paket yang cocok.
        </p>
        <CtaButton location="keluhan_section" size="lg">
          Tanya Kondisi Saya via WhatsApp
        </CtaButton>
      </div>
    </Section>
  );
}
