"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import CtaButton from "./CtaButton";
import { Container } from "./Section";
import { LotusIcon } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gold-600/25 bg-batik-950/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-18">
          <a href="#hero" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-600/50 bg-batik-800/80 text-gold-500">
              <LotusIcon className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-semibold text-cream-50 sm:text-lg">
                Kang Toni
              </span>
              <span className="text-[10px] tracking-[0.16em] text-gold-500 uppercase">
                Pijat Tradisional Jawa
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-cream-200/85 transition-colors hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 text-xs text-cream-200/70 xl:flex">
              <span className="h-2 w-2 animate-pulse rounded-full bg-wa-500" />
              {site.hours}
            </span>
            <CtaButton
              location="header"
              className="hidden sm:inline-flex"
              size="md"
            >
              WhatsApp
            </CtaButton>
            <CtaButton
              location="header_mobile_icon"
              iconOnly
              className="!px-3 !py-3 sm:hidden"
            >
              WhatsApp
            </CtaButton>
          </div>
        </div>
      </Container>
    </header>
  );
}
