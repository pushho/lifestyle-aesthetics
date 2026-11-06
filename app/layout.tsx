import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SiteFloats } from "./components/SiteFloats";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lifestyle Aesthetics | Aesthetic Products & Devices Distributor",
  description:
    "Dubai-based B2B distributor of aesthetic injectables, clinical peels, and medical devices across the UAE, Qatar, Bahrain, Oman, Egypt, and Kuwait.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <SiteFloats />
      </body>
    </html>
  );
}
