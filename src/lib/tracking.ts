import { site, waMessageDefault } from "./site";

/** Bangun link WhatsApp dengan pesan otomatis (pre-filled). */
export function waLink(message: string = waMessageDefault): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Link telepon siap pakai (menghapus spasi & tanda hubung). */
export function telLink(): string {
  return `tel:${site.phoneNumber.replace(/[^\d+]/g, "")}`;
}

type ConversionPayload = {
  /** Label tombol / lokasi pemanggilan, misal "hero" atau "sticky_bar". */
  location: string;
  /** Harga atau nama paket jika relevan. */
  value?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Kirim event konversi ke GA4 (gtag) dan GTM (dataLayer).
 * Dipanggil setiap kali tombol WhatsApp / Telepon ditekan.
 */
export function trackConversion(
  event: "whatsapp_click" | "phone_call",
  { location, value }: ConversionPayload,
): void {
  if (typeof window === "undefined") return;

  const payload = {
    event,
    event_category: "engagement",
    event_label: location,
    button_location: location,
    ...(value ? { value } : {}),
  };

  try {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push(payload);
    window.gtag?.("event", event, payload);
  } catch {
    // Jangan pernah gagalkan navigasi pengguna karena analytics.
  }
}
