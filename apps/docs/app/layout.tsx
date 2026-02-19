import type { Metadata } from "next";
import localFont from "next/font/local";

import { SiteLayout } from "../components/SiteLayout";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Maintania AI",
  description:
    "Maintainer intelligence platform that automates issue triage and documentation-backed responses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
