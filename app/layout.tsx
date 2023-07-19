import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '../components/Navbar';
import Header from '@/components/Header';

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
