import type { Metadata } from 'next';
import { Inter, Montserrat, Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';

import './globals.css';

const Header = dynamic(() => import('@/components/header'), { ssr: false });
const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Oneleaf Salon',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(`${inter.variable} ${montserrat.variable} ${poppins.variable}`, 'min-h-dvh')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
