import { trustBadges } from "@/lib/site";
import { Container } from "./Section";
import { trustIconMap } from "./icons";

export default function TrustBadges() {
  return (
    <section className="relative border-y border-gold-600/20 bg-batik-900/70">
      <Container>
        <ul className="grid gap-px overflow-hidden py-2 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge, index) => {
            const Icon = trustIconMap[badge.icon];
            return (
              <li
                key={badge.title}
                className={`flex items-start gap-4 px-4 py-6 ${
                  index !== trustBadges.length - 1
                    ? "lg:border-r lg:border-gold-600/15"
                    : ""
                }`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-600/40 bg-batik-800 text-gold-500">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-semibold text-cream-50">
                    {badge.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-cream-200/75">
                    {badge.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
