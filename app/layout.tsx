import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Jonas de Boer",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ""; // "" locally, "/repo" on GH pages

  return (
    <html lang="en"
      style={{
        ["--jbmono-woff2" as any]: `${base}/static/fonts/JetBrainsMono-Regular.woff2`,
        ["--jbmono-ttf" as any]: `${base}/static/fonts/JetBrainsMono-Regular.ttf`,
      }}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
