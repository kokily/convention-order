import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SessionWrapper from '@/wrapper/SessionWrapper';
import QueryWrapper from '@/wrapper/QueryWrapper';
import ToastWrapper from '@/wrapper/ToastWrapper';
import 'react-toastify/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '컨벤션 커퓌 주문',
  description: '사적 페이지',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <SessionWrapper>
          <QueryWrapper>
            {children}
            <ToastWrapper />
          </QueryWrapper>
        </SessionWrapper>
      </body>
    </html>
  );
}
