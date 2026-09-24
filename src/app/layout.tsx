import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Algoel — Mobile App Studio & Digital Publisher | iOS & Android',
  description:
    'Algoel is a premier software company and mobile publisher. We design, engineer, and publish category-defining iOS and Android applications with over 52M+ downloads worldwide.',
  keywords: [
    'Algoel',
    'Mobile App Publisher',
    'iOS App Studio',
    'Android App Publisher',
    'App Store',
    'Google Play',
    'Mobile Apps',
    'SwiftUI',
    'Jetpack Compose',
    'Product Studio',
  ],
  authors: [{ name: 'Algoel Technologies Inc.' }],
  creator: 'Algoel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://algoel.com',
    title: 'Algoel — Mobile App Studio & Digital Publisher',
    description:
      'We craft, engineer, and publish category-defining mobile applications for the App Store & Google Play. Over 52 million downloads worldwide.',
    siteName: 'Algoel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Algoel — Mobile App Studio & Digital Publisher',
    description:
      'We craft, engineer, and publish category-defining mobile applications for the App Store & Google Play.',
    creator: '@algoelapps',
  },
};

export const viewport = {
  themeColor: '#05070c',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#05070c] text-zinc-100 selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
