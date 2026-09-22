import type { Metadata } from "next";
import "./globals.css";

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
      <body className="font-sans antialiased bg-paper text-ink">{children}</body>
    </html>
  );
}
