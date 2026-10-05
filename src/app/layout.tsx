import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Algoel | Impossible. Maybe.',
  description:
    'We acquire and improve iconic products. Supported by proprietary technologies and an elite team of engineers, scientists, and designers.',
  keywords: [
    'Algoel',
    'Bending Spoons',
    'Mobile Apps',
    'Iconic Products',
    'Tech Studio',
    'Digital Products',
  ],
  authors: [{ name: 'Algoel Technologies' }],
  creator: 'Algoel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://algoel.vercel.app',
    title: 'Algoel | Impossible. Maybe.',
    description: 'We acquire and improve iconic products.',
    siteName: 'Algoel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Algoel | Impossible. Maybe.',
    description: 'We acquire and improve iconic products.',
  },
};

export const viewport = {
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className="min-h-full flex flex-col bg-black text-white selection:bg-[#72E5FF] selection:text-black"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
