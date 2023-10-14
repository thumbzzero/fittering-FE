import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '핏터링 - Fittering',
  description:
    '핏터링(Fittering, Fit + Filtering)을 통해 체형 분석을 쉽게 하고, 나의 체형에 fit한 옷을 구매해보세요!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
