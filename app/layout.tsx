import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apex Dental | Your Smile, Perfected.",
  description: "Trusted dental care — same-day appointments available. Painless procedures, state-of-the-art equipment, and flexible payment plans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#CBD6DC] text-[#1A1A2E] font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
