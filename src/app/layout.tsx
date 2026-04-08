import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import { jsonLd } from '@/lib/schema';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: 'Blake Fisher',
  description: 'Business student, Eagle Scout, entrepreneur, and outdoor athlete based in Boulder, Colorado.',
  openGraph: {
    title: 'Blake Fisher',
    description: 'Built on the mountain. Rooted in the work.',
    url: 'https://blakefish.com',
    siteName: 'Blake Fisher',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
