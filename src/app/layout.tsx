import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Antimicrobial Use Guide — ICMR 2019",
  description:
    "A searchable clinical reference for empiric and directed antibiotic therapy, based on the ICMR Treatment Guidelines for Antimicrobial Use in Common Syndromes, 2nd Edition (2019).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sourceSerif.variable} font-sans antialiased bg-paper text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
