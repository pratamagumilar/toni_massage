import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import Analytics from "@/components/Analytics";
import { faqs, services, site } from "@/lib/site";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

function getMetadataBase(): URL {
  try {
    return new URL(site.url);
  } catch {
    return new URL("https://pijatkangtoni.id");
  }
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: `${site.tagline} - Pijat Panggilan ke Rumah, Hotel & Apartemen`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "pijat panggilan 24 jam",
    "pijat tradisional jawa",
    "pijat panggilan bandung",
    "pijat panggilan cimahi",
    "urut tradisional jawa",
    "kerokan masuk angin",
    "pijat refleksi kaki",
    "pijat hotel bandung",
    "pijat sehat keluarga",
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  formatDetection: {
    telephone: true,
    address: false,
    email: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: site.url,
    siteName: site.name,
    title: `${site.tagline} - Bugar Kembali Tanpa Perlu Keluar Rumah`,
    description: site.description,
    images: [
      {
        url: "/kang-toni.svg",
        width: 720,
        height: 760,
        alt: `${site.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.tagline} - Kang Toni`,
    description: site.description,
    images: ["/kang-toni.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  category: "health",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a1108",
  colorScheme: "dark",
};

/** Structured data LocalBusiness agar tampil di Google Local Ads / Maps. */
function LocalBusinessJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/kang-toni.svg`,
    telephone: site.phoneNumber,
    priceRange: "Rp 150.000",
    openingHours: site.openingHours,
    areaServed: [
      "Bandung",
      "Cimahi",
      "Lembang",
      "Soreang",
      "Padalarang",
    ].map((name) => ({ "@type": "City", name })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bandung",
      addressRegion: "Jawa Barat",
      addressCountry: "ID",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: `${service.name} (${service.duration})`,
        description: service.desc,
      },
    })),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${cinzel.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <LocalBusinessJsonLd />
        <Analytics />
      </body>
    </html>
  );
}
