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
    <html lang="ko" className={inter.className}>
      <body className="flex flex-col w-full px-4 lg:px-0 max-w-screen-lg mx-auto mb-[6rem] md:mb-0">
        <Header />
        <main className="grow">{children}</main>
        <MobileNavbar />
      </body>
    </html>
  );
}
