"use client";

import type { ReactNode } from "react";
import { telLink, trackConversion, waLink } from "@/lib/tracking";
import { PhoneIcon, WhatsAppIcon } from "./icons";

type Variant = "wa" | "call";
type Size = "md" | "lg";

type Props = {
  /** Dipakai untuk label analytics, misal "hero", "sticky_bar". */
  location: string;
  variant?: Variant;
  size?: Size;
  /** Pesan WhatsApp kustom; default pesan booking. */
  message?: string;
  className?: string;
  children?: ReactNode;
  /** Sembunyikan label teks (misal hanya ikon). */
  iconOnly?: boolean;
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-3 text-sm gap-2",
  lg: "px-7 py-4 text-base gap-2.5",
};

export default function CtaButton({
  location,
  variant = "wa",
  size = "md",
  message,
  className = "",
  children,
  iconOnly = false,
}: Props) {
  const isWa = variant === "wa";
  const href = isWa ? waLink(message) : telLink();
  const event = isWa ? "whatsapp_click" : "phone_call";

  const label = children ?? (isWa ? "Pesan Sekarang via WhatsApp" : "Panggil Sekarang");

  return (
    <a
      href={href}
      target={isWa ? "_blank" : undefined}
      rel={isWa ? "noopener noreferrer" : undefined}
      onClick={() => trackConversion(event, { location })}
      className={[
        "inline-flex items-center justify-center rounded-full font-bold",
        "transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0",
        isWa
          ? "btn-wa shadow-[0_12px_34px_-12px_rgba(37,211,102,0.75)]"
          : "border border-gold-600/60 bg-batik-800/70 text-cream-100 hover:border-gold-500 hover:bg-batik-700",
        sizeClasses[size],
        className,
      ].join(" ")}
    >
      {isWa ? (
        <WhatsAppIcon className="h-5 w-5 shrink-0" />
      ) : (
        <PhoneIcon className="h-5 w-5 shrink-0" />
      )}
      {!iconOnly && <span>{label}</span>}
      {iconOnly && <span className="sr-only">{label}</span>}
    </a>
  );
}
