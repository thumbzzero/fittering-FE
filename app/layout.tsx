import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import MobileNavbar from '@/components/Navbar/MobileNavbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fittering',
  description: 'fit + filtering',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        {children}
        <MobileNavbar />
      </body>
    </html>
  );
}
