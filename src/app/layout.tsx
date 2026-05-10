import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kyawminthu.dev"),
  title: "Kyaw Min Thu — Portfolio",
  description:
    "Building practical applications of Robotics and AI to transform public safety, sanitation, and retail.",
  openGraph: {
    title: "Kyaw Min Thu — Portfolio",
    description:
      "Building practical applications of Robotics and AI to transform public safety, sanitation, and retail.",
    url: "https://kyawminthu.dev",
    siteName: "Kyaw Min Thu",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kyaw Min Thu Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyaw Min Thu — Portfolio",
    description:
      "Building practical applications of Robotics and AI to transform public safety, sanitation, and retail.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
