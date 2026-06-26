import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { site } from "@/lib/site";
import { Providers } from "@/providers";

import "@/styles/globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const viewport: Viewport = {
  themeColor: [
    { color: "#F5F2EF", media: "(prefers-color-scheme: light)" },
    { color: "#2C2420", media: "(prefers-color-scheme: dark)" },
  ],
};

export const metadata: Metadata = {
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  description: site.description,
  keywords: [
    "url shortener",
    "link shortener",
    "short links",
    "hopduck",
    "link management",
  ],
  openGraph: {
    description: site.description,
    images: [
      {
        alt: site.name,
        height: 630,
        url: site.ogImage,
        width: 1200,
      },
    ],
    locale: "en_US",
    siteName: site.name,
    title: site.name,
    type: "website",
    url: site.url,
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    index: true,
  },
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  twitter: {
    card: "summary_large_image",
    creator: site.creator,
    description: site.description,
    images: [site.ogImage],
    title: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased font-sans`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
