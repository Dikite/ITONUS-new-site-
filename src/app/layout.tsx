import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/app/reusable/footer"
import Navbar from "@/app/reusable/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ITONUS TECH PVT LTD",
  description:
    "Learn about ITONUS TECH PVT LTD, the sister company of MOSSAD SERVICES PTE LTD, delivering enterprise IT infrastructure, network solutions, and turnkey project expertise across Singapore and India",

  openGraph: {
    title: "ITONUS TECH PVT LTD",
    description:
      "Enterprise IT infrastructure, network solutions, cloud services, and turnkey project expertise.",
    url: "https://itonus.vercel.app/",
    siteName: "ITONUS TECH",
    images: [
      {
        url: "https://itonus.vercel.app/logo-full.png", // <-- Your actual logo path
        width: 1200,
        height: 630,
        alt: "ITONUS TECH LOGO",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ITONUS TECH PVT LTD",
    description:
      "Enterprise IT infrastructure, network solutions, cloud services, and turnkey project expertise.",
    images: ["https://itonus.vercel.app/logo-full.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* ✅ Navbar will appear on all pages */}
        <Navbar />

        {/* Page Content */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
