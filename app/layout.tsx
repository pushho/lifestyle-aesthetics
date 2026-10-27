import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteFloats } from "./components/SiteFloats";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lifestyle Aesthetics | Solutions for Aesthetic Clinics",
  description:
    "Dubai-based B2B distributor of aesthetic injectables, professional skincare, and medical devices for clinics across the UAE, Qatar, Bahrain, Oman, Egypt, and Kuwait.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        {children}
        <SiteFloats />
      </body>
    </html>
  );
}
