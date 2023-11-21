import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Infusion | Panggil tim medis ke rumah anda",
  description:
    "layanan medis di rumah pasien. Tim medis berpengalaman seperti perawat dan dokter yang datang untuk pemantauan, pemberian obat dan infus, serta edukasi pasien. Keuntungan dari layanan klinik home.infusion termasuk kenyamanan, privasi, dan pengurangan risiko infeksi yang mungkin timbul di lingkungan rumah sakit.",
  generator: "Next.js",
  applicationName: "Home Infusion Clinic",
  keywords: [
    "homeinfusion",
    "infusion",
    "clinic",
    "home",
    "klinik",
    "homeklinik",
    "klinik rumah",
    "panggil dokter ke rumah",
  ],
  metadataBase: new URL("https://homeinfusionclinic.com/"),
  creator: "IT Partnerhsip BEM FILKOM UB 2023",
  alternates: {
    canonical: "https://homeinfusionclinic.com/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Panggil Dokter ke Rumah Anda!",
    description:
      "layanan medis di rumah pasien. Tim medis berpengalaman seperti perawat dan dokter yang datang untuk pemantauan, pemberian obat dan infus, serta edukasi pasien. Keuntungan dari layanan klinik home infusion termasuk kenyamanan, privasi, dan pengurangan risiko infeksi yang mungkin timbul di lingkungan rumah sakit.",
    url: "https://homeinfusionclinic.com/",
    siteName: "Home Infusion Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* {Google Analytics} */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* {Google Search Console} */}
        <meta
          name="google-site-verification"
          content="LyEFLwI4omGWA4bVyhsQfZaY17hoFgKp3PeRXc-irp0"
        />
        <meta property="og:image" content="/favicon-32x32.png" />
        <meta property="og:image:alt" content="HomeInfusionClinic" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={mont.className}>{children}</body>
    </html>
  );
}
