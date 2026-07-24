import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./premium.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Royal Classes | Science, NEET, JEE & MHT-CET Coaching in Jogeshwari",
  description:
    "Structured coaching for XI, XII Science, NEET, JEE, MHT-CET and board exams at Royal Classes, Jogeshwari East, Mumbai. Admissions open for 2026–2027.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
