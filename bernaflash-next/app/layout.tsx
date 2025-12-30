import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Snowfall from "@/components/Snowfall";
import TelegramTracker from "@/components/TelegramTracker";
import FeedbackButton from "@/components/FeedbackButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vocab Flash - İnteraktif İngilizce Kelime Öğrenme Platformu",
  description: "9. Sınıf, 11. Sınıf YDT ve genel İngilizce kelime oyunları. Hangman, Taboo, Team Competition ve daha fazlası ile eğlenceli öğrenme deneyimi.",
  keywords: [
    "İngilizce kelime öğrenme",
    "vocabulary games",
    "9. sınıf İngilizce",
    "11. sınıf YDT",
    "İngilizce oyunları",
    "interaktif eğitim",
    "kelime oyunları",
    "Hangman oyunu",
    "Taboo oyunu",
    "İngilizce eğitim",
    "online İngilizce",
    "Vocab Flash"
  ],
  authors: [{ name: "Vocab Flash" }],
  creator: "Vocab Flash",
  publisher: "Vocab Flash",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bernaflash.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Vocab Flash - İnteraktif İngilizce Kelime Öğrenme",
    description: "9. Sınıf, YDT ve genel İngilizce kelime oyunları ile eğlenceli öğrenme",
    url: 'https://bernaflash.vercel.app',
    siteName: 'Vocab Flash',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vocab Flash - İnteraktif İngilizce Kelime Öğrenme",
    description: "Hangman, Taboo ve daha fazlası ile İngilizce kelime öğrenin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Google Search Console verification tag eklenebilir
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Snowfall />
        <TelegramTracker />
        {children}
      </body>
    </html>
  );
}
