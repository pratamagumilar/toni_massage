/**
 * Pusat konfigurasi bisnis.
 * Ubah nilai di file ini (atau lewat environment variable) tanpa menyentuh komponen.
 */

function resolveSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (envUrl) {
    return envUrl.startsWith("http://") || envUrl.startsWith("https://")
      ? envUrl
      : `https://${envUrl}`;
  }

  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProd) {
    return `https://${vercelProd}`;
  }

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }

  return "https://pijatkangtoni.id";
}

export const site = {
  name: 'Pijat Tradisional Jawa "Kang Toni"',
  shortName: "Kang Toni",
  tagline: "Pijat Tradisional Jawa Panggilan 24 Jam",
  description:
    "Layanan pijat tradisional Jawa panggilan 24 jam ke rumah, hotel, apartemen & kost. Terapis berpengalaman, bertenaga, higienis, dan profesional. Bugar kembali tanpa perlu keluar rumah.",
  url: resolveSiteUrl(),

  /** Format internasional tanpa tanda + dan tanpa spasi. Contoh: 6283100592361 */
  whatsappNumber:
    process.env.NEXT_PUBLIC_WA_NUMBER?.trim() || "6283100592361",
  /** Nomor telepon untuk tombol "Panggil Sekarang" (format lokal). */
  phoneNumber:
    process.env.NEXT_PUBLIC_PHONE_NUMBER?.trim() || "+62 831-0059-2361",

  city: "Bandung & Sekitarnya",
  hours: "Buka 24 Jam, Setiap Hari",
  responseTime: "30 - 45 menit",

  rating: { value: 4.9, count: 1287 },

  /** Jam operasional untuk structured data. */
  openingHours: "Mo-Su 00:00-23:59",
} as const;

export const waMessageDefault =
  "Halo Kang Toni, saya mau booking pijat tradisional panggilan. Lokasi saya di [Sebutkan Area/Hotel] untuk jam [Sebutkan Jam]. Apakah bisa?";

export const trustBadges = [
  {
    title: "Siap 24 Jam",
    desc: "Panggilan malam, subuh, atau hari libur tetap kami layani.",
    icon: "clock" as const,
  },
  {
    title: "Real Pijat Sehat",
    desc: "Murni terapi kesehatan tradisional, bukan layanan plus-plus.",
    icon: "shield" as const,
  },
  {
    title: "Panggilan Cepat",
    desc: `Terapis tiba di lokasi rata-rata ${site.responseTime}.`,
    icon: "bolt" as const,
  },
  {
    title: "Higienis & Rapi",
    desc: "Handuk bersih, minyak wangi alami, dan terapis berpenampilan sopan.",
    icon: "sparkle" as const,
  },
];

export const keluhanList = [
  {
    title: "Pegal-pegal & Otot Kaku",
    desc: "Punggung, pundak, leher, dan pinggang terasa kaku setelah duduk lama.",
    icon: "back" as const,
  },
  {
    title: "Masuk Angin & Perut Kembung",
    desc: "Dibantu dengan kerokan dan urut tradisional Jawa yang hangat.",
    icon: "wind" as const,
  },
  {
    title: "Lelah, Letih & Badan Lesu",
    desc: "Stamina drop setelah aktivitas padat, badan terasa berat.",
    icon: "battery" as const,
  },
  {
    title: "Kecapean Aktivitas Padat",
    desc: "Lembur kerja, perjalanan jauh, atau beban angkat yang berulang.",
    icon: "load" as const,
  },
  {
    title: "Susah Tidur (Insomnia) & Stres",
    desc: "Relaksasi otot dan pikiran agar tidur kembali nyenyak.",
    icon: "moon" as const,
  },
  {
    title: "Darah Kurang Lancar / Kesemutan",
    desc: "Urut melancarkan peredaran darah pada kaki dan tangan.",
    icon: "pulse" as const,
  },
];

export type ServiceItem = {
  name: string;
  duration: string;
  price: string;
  desc: string;
  highlight?: boolean;
};

export const services: ServiceItem[] = [
  {
    name: "Pijat Tradisional Jawa Full Body",
    duration: "60 Menit",
    price: "Rp 150.000",
    desc: "Urut tradisional seluruh badan dengan teknik khas Jawa. Fokus meredakan pegal linu, melancarkan peredaran darah, dan mengembalikan kesegaran tubuh.",
    highlight: true,
  },
];

export const areas = [
  { name: "Bandung Kota (Pusat)", eta: "25-35 menit" },
  { name: "Bandung Utara (Dago, Setiabudi)", eta: "30-40 menit" },
  { name: "Bandung Selatan (Buahbatu, Kopo)", eta: "30-45 menit" },
  { name: "Bandung Timur (Antapani, Arcamanik)", eta: "35-45 menit" },
  { name: "Bandung Barat (Pasteur, Sukajadi)", eta: "30-40 menit" },
  { name: "Cimahi & Sekitarnya", eta: "35-50 menit" },
  { name: "Lembang", eta: "45-60 menit" },
  { name: "Jatinangor & Cileunyi", eta: "45-60 menit" },
];

export const orderSteps = [
  {
    step: "01",
    title: "Chat / Telepon Kami",
    desc: "Klik tombol WhatsApp atau telepon. Pesan sudah otomatis terisi, tinggal sebutkan area dan jam.",
  },
  {
    step: "02",
    title: "Terapis Meluncur",
    desc: `Kami konfirmasi harga dan tarif. Terapis berangkat dan tiba rata-rata ${site.responseTime}.`,
  },
  {
    step: "03",
    title: "Pijat & Bugar Kembali",
    desc: "Terapi berjalan sesuai durasi. Bayar setelah selesai, tunai atau transfer. Tidak ada biaya tersembunyi.",
  },
];

export const testimonials = [
  {
    name: "Bu Ratna",
    role: "Ibu rumah tangga - Dago",
    quote:
      "Masuk angin saya langsung enak setelah dikerok. Terapisnya sopan, bertenaga, dan datang tepat waktu walau sudah jam 11 malam.",
    rating: 5,
  },
  {
    name: "Pak Dedi",
    role: "Karyawan swasta - Asia Afrika",
    quote:
      "Pundak kaku karena lembur terus. Dipijat 60 menit rasanya seperti badan baru. Harga jelas di awal, tidak ada tambahan aneh-aneh.",
    rating: 5,
  },
  {
    name: "Sarah",
    role: "Tamu hotel - Riau, Bandung",
    quote:
      "Baru sampai Bandung dan badan remuk setelah perjalanan jauh. Pesan lewat WhatsApp, 40 menit terapis sudah sampai kamar hotel.",
    rating: 5,
  },
  {
    name: "Pak Hendra",
    role: "Wiraswasta - Buahbatu",
    quote:
      "Sudah langganan untuk orang tua saya. Urutannya mantap dan tidak asal-asalan. Yang penting jelas layanan kesehatannya saja.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Apakah layanan ini benar-benar murni pijat kesehatan?",
    a: "Benar. Kami hanya melayani pijat tradisional Jawa untuk kebugaran dan relaksasi keluarga. Tidak melayani hal asusila atau plus-plus dalam bentuk apa pun. Terapis kami bekerja profesional, sopan, dan sesuai etika.",
  },
  {
    q: "Berapa lama terapis sampai ke lokasi saya?",
    a: `Rata-rata ${site.responseTime} setelah order dikonfirmasi, tergantung jarak dan kondisi lalu lintas. Untuk area Bandung dan sekitarnya di luar jam sibuk biasanya lebih cepat.`,
  },
  {
    q: "Apakah benar bisa dipanggil tengah malam?",
    a: "Ya. Kami buka 24 jam setiap hari, termasuk malam, dini hari, dan hari libur. Silakan chat atau telepon kapan saja, kami balas selama terapis masih tersedia.",
  },
  {
    q: "Bagaimana cara pembayarannya?",
    a: "Pembayaran dilakukan setelah terapi selesai, bisa tunai langsung ke terapis atau transfer bank / e-wallet. Harga sudah pasti sejak awal, tidak ada biaya tersembunyi.",
  },
  {
    q: "Apakah terapis membawa perlengkapan sendiri?",
    a: "Ya. Terapis membawa minyak pijat, handuk bersih, dan perlengkapan kerokan. Anda hanya perlu menyediakan tempat yang nyaman, seperti kasur, sofa, atau matras.",
  },
  {
    q: "Bolehkah saya minta terapis perempuan atau laki-laki?",
    a: "Bisa, silakan sampaikan preferensi Anda saat memesan lewat WhatsApp. Kami akan sesuaikan dengan jadwal terapis yang tersedia di area Anda.",
  },
];

/** Disclaimer etika yang wajib tampil demi kepatuhan Google Ads. */
export const ethicsDisclaimer =
  "Layanan murni pijat kesehatan tradisional keluarga. Tidak melayani hal asusila/plus-plus.";

export const navLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Area Layanan", href: "#area" },
  { label: "Cara Order", href: "#cara-order" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
];
