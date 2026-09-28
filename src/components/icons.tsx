import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.82c2.17 0 4.2.84 5.73 2.37a8.07 8.07 0 0 1 2.37 5.73c0 4.47-3.64 8.1-8.11 8.1a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.11.82.83-3.04-.19-.31a8.03 8.03 0 0 1-1.24-4.26c0-4.46 3.63-8.09 8.1-8.09h.08zm-3.1 4.06c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.7 2.72 4.23 3.71 2.1.83 2.53.66 2.99.62.46-.04 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.1-.22-.16-.46-.28-.24-.12-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.12-.17.24-.65.81-.8.98-.14.16-.29.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.35-1.68-.14-.24-.02-.37.1-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.36-.75-1.85-.2-.48-.4-.42-.55-.42l-.47-.01z" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.26-1.26a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.3l6.5-.9L12 2.5z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2.4} aria-hidden="true" {...props}>
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M13 2 4.5 13.5H11l-1 8.5 9-12h-6.5L13 2z" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.5 6.5l2.5 2.5M15 15l2.5 2.5M17.5 6.5 15 9M9 15l-2.5 2.5" />
    </svg>
  );
}

export function BackIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 3a4 4 0 0 0-4 4v3a4 4 0 1 0 8 0V7a4 4 0 0 0-4-4z" />
      <path d="M5 21c0-3.3 3.1-5 7-5s7 1.7 7 5" />
    </svg>
  );
}

export function WindIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M3 8h10a2.5 2.5 0 1 0-2.5-2.5M3 12h14a2.5 2.5 0 1 1-2.5 2.5M3 16h7a2 2 0 1 1-2 2" />
    </svg>
  );
}

export function BatteryIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <rect x="2" y="8" width="17" height="9" rx="2" />
      <path d="M22 11v3" />
      <path d="M5.5 11.5v2.5M9 11.5v2.5" />
    </svg>
  );
}

export function LoadIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M4 20h16M6 20V9l6-4 6 4v11" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />
    </svg>
  );
}

export function PulseIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M2 12h4l2.5-6 3.5 12 2.5-6H22" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function NoIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function LotusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 3c1.8 1.6 2.8 3.6 2.8 5.6 0 .6-.1 1.2-.3 1.8 1-.8 2.2-1.3 3.5-1.3.5 0 1 .06 1.5.2-.5 3.2-2.7 5.9-5.7 7.3h-3.6C7.2 15.2 5 12.5 4.5 9.3c.5-.14 1-.2 1.5-.2 1.3 0 2.5.5 3.5 1.3-.2-.6-.3-1.2-.3-1.8C9.2 6.6 10.2 4.6 12 3z" />
      <path d="M3 19.2c2.9 1.4 6 2.1 9 2.1s6.1-.7 9-2.1c-.9-.5-1.9-.5-2.8-.1-2 1-4 1.5-6.2 1.5s-4.2-.5-6.2-1.5c-.9-.4-1.9-.4-2.8.1z" />
    </svg>
  );
}

export function HandIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12" />
      <path d="M11 12V4.5a1.5 1.5 0 0 1 3 0V12" />
      <path d="M14 12V6.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-.5a6.5 6.5 0 0 1-6.5-6.5V12a1.5 1.5 0 0 1 3 0" />
    </svg>
  );
}

export const trustIconMap = {
  clock: ClockIcon,
  shield: ShieldIcon,
  bolt: BoltIcon,
  sparkle: SparkleIcon,
};

export const keluhanIconMap = {
  back: BackIcon,
  wind: WindIcon,
  battery: BatteryIcon,
  load: LoadIcon,
  moon: MoonIcon,
  pulse: PulseIcon,
};
