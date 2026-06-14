import "./globals.css";
import type { Metadata } from "next";
import localFont from 'next/font/local'
import PageTransition from "@/components/PageTransition";

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

const grandSlang = localFont({
  src: "../assets/fonts/GrandSlang.ttf",
  variable: '--font-grandslang',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${grandSlang.className} ${montserrat.className} antialiased`}>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
