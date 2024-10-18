import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@app/globals.css';
import React from 'react';
import ThemeProvider from '@/components/layouts/theme-provider';
import NavBar from '@/components/layouts/navbar';
import SideBar from '@/components/layouts/sidebar';
import Footer from '@/components/layouts/footer';
import Divider from '@/components/ui/divider';

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
  title: 'Koy Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <Divider orientation='horizontal' />
          <SideBar />
          <main>{children}</main>
          <Divider orientation='horizontal' />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
