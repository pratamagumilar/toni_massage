"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { telLink, trackConversion, waLink } from "@/lib/tracking";
import { PhoneIcon, WhatsAppIcon } from "./icons";

type BarProps = {
  label: string;
  location: string;
  message?: string;
  variant: "wa" | "call";
  className?: string;
};

function BarButton({
  label,
  location,
  message,
  variant,
  className = "",
}: BarProps) {
  const isWa = variant === "wa";
  const href = isWa ? waLink(message) : telLink();

  return (
    <a
      href={href}
      target={isWa ? "_blank" : undefined}
      rel={isWa ? "noopener noreferrer" : undefined}
      onClick={() =>
        trackConversion(isWa ? "whatsapp_click" : "phone_call", { location })
      }
      className={`inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold transition-transform active:scale-[0.98] ${className}`}
    >
      {isWa ? (
        <WhatsAppIcon className="h-5 w-5 shrink-0" />
      ) : (
        <PhoneIcon className="h-5 w-5 shrink-0" />
      )}
      {label}
    </a>
  );
}

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-gold-600/30 bg-batik-950/95 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="px-3 pt-3">
        <div className="mb-2 flex items-center justify-center gap-2 text-[11px] font-medium text-cream-200/70">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa-500 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-wa-500" />
          </span>
          {site.hours} &middot; Terapis siap meluncur
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <BarButton
            variant="wa"
            location="sticky_bar"
            label="Pesan via WhatsApp"
            className="btn-wa w-full shadow-[0_10px_28px_-12px_rgba(37,211,102,0.9)]"
          />
          <BarButton
            variant="call"
            location="sticky_bar"
            label="Telepon"
            className="border border-gold-600/50 bg-batik-800 px-4 text-cream-100"
          />
        </div>
      </div>
    </div>
  );
}
