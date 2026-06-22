import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: `${siteConfig.name} Portfolio`,
  category: "Technology",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Senior AI/ML Engineer & IT Consultant`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@dimasrahmatn",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#07111F",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  jobTitle: "Senior AI/ML Engineer",
  description: siteConfig.description,
  email: `mailto:${siteConfig.email}`,
  telephone: `+${siteConfig.phoneIntl}`,
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "MLOps",
    "Generative AI",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "AI Agents",
    "Computer Vision",
    "Natural Language Processing",
    "Full Stack Development",
    "Cloud Architecture",
    "IT Consulting",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Enterprise AI Practice",
  },
  sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.whatsapp],
  worksFor: {
    "@type": "Organization",
    name: "Independent AI/ML Consultancy",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
  },
};

const jsonLdProfessional = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${siteConfig.name} — AI/ML Engineering & IT Consulting`,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  email: siteConfig.email,
  telephone: `+${siteConfig.phoneIntl}`,
  priceRange: "$$$",
  areaServed: "Worldwide",
  serviceType: [
    "AI Strategy Consulting",
    "Machine Learning Solutions",
    "Enterprise AI Systems",
    "Predictive Analytics",
    "AI Agent Development",
    "Generative AI Solutions",
    "Custom Web Applications",
    "Digital Transformation",
    "MLOps Deployment",
    "Cloud Architecture",
  ],
  provider: {
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Senior AI/ML Engineer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfessional) }}
        />
      </head>
      <body className="font-sans bg-navy-900 text-white antialiased selection:bg-cyan-accent/30">
        {children}
      </body>
    </html>
  );
}
