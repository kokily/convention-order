import { Inter } from 'next/font/google';
import SessionWrapper from '@/wrapper/SessionWrapper';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={inter.className}>
                <SessionWrapper>
                    {children}
                </SessionWrapper>
            </body>
        </html>
    );
}
