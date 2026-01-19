import type { Metadata, Viewport } from 'next';
import { RecoilProvider } from '@/components/providers/recoil-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import localFont from 'next/font/local';
import '@app/globals.css';
import React from 'react';
import { NavBar } from '@/components/layouts/navbar';
import { SideBar } from '@/components/layouts/sidebar';
import { AdBar } from '@/components/layouts/adbar';
import { Footer } from '@/components/layouts/footer';
import { Divider } from '@/components/ui/divider';

const geistSans = localFont({
  src: '../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  verification: {
    google: 'google-site-verification=YagmCLzmi83zPoQ8vd4fQ6OHPsiNjYdkGWSyhMmViSo',
  },
  title: {
    template: '%s | Koy Blog',
    default: 'Koy Blog',
  },
  description: '개발과 성장에 대한 생각을 공유하는 기술 블로그입니다.',
  metadataBase: new URL('https://koy-blog.vercel.app'),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <RecoilProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NavBar />
            <Divider orientation="horizontal" />
            <div className="flex flex-row min-h-screen">
              <SideBar />
              <main className="w-full min-w-0">{children}</main>
              <AdBar />
            </div>
            <Divider orientation="horizontal" />
            <Footer />
          </ThemeProvider>
        </RecoilProvider>
      </body>
    </html>
  );
}
