import './globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Providers } from '@/shared/providers/Providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'jr.matviyuk',
  description: 'personal website of Frontend developer Matviyuk Vladislav',
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/favicon.ico" sizes="any"/>
    </head>
    <body className={ `${ geistSans.variable } ${ geistMono.variable } antialiased h-full` }>
    <Providers>
      { children }
    </Providers>
    </body>
    </html>
  );
}
