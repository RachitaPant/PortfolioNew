import "./globals.css";
import type { Metadata, Viewport } from "next";
import {
  Inter,
  Reenie_Beanie,
  Permanent_Marker,
  Rock_Salt,
  Gloria_Hallelujah,
  Shadows_Into_Light,
  Kalam,
} from "next/font/google";
import { ReactNode } from "react";

/*
 * All seven families are self-hosted through next/font: downloaded at build
 * time, served same-origin with immutable caching, and given an automatically
 * generated fallback with matching metrics (size-adjust / ascent-override) so
 * the swap from fallback to webfont does not shift layout.
 *
 * Only the two faces that render above the fold are preloaded. The five
 * decorative marker faces appear well down the page, so preloading them would
 * put ~150 kB of fonts in front of the hero image on the critical path; they
 * still load same-origin, just at normal priority.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const reenieBeanie = Reenie_Beanie({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-handwritten",
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: false,
  variable: "--font-marker1",
});

const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: false,
  variable: "--font-marker2",
});

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: false,
  variable: "--font-marker3",
});

const shadowsIntoLight = Shadows_Into_Light({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: false,
  variable: "--font-marker4",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: false,
  variable: "--font-marker5",
});

const fontVariables = [
  inter.variable,
  reenieBeanie.variable,
  permanentMarker.variable,
  rockSalt.variable,
  gloriaHallelujah.variable,
  shadowsIntoLight.variable,
  kalam.variable,
].join(" ");

export const metadata: Metadata = {
  title: "Rachita's Portfolio",
  description: "A notebook-style portfolio showcasing my career journey.",
};

export const viewport: Viewport = {
  themeColor: "#f5e9d4",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="paper-body w-full">{children}</body>
    </html>
  );
}
