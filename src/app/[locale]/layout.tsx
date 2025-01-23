import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Golf Shop',
  description: 'Online shopping platform for golf equipment',
};

const tabIcon = "/icons/golf_club.svg";

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {

  // @ts-ignore
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href={tabIcon} type="image/svg+xml" />
      </head>

      <body className={inter.className}>

      <NextIntlClientProvider locale={locale}>
        <div className='flex flex-col min-h-screen max-w-4xl mx-auto'>
          <Header />
          <div className='flex-grow mt-20'>{children}</div>
          <Footer />
        </div>
      </NextIntlClientProvider>

      </body>
    </html>
  );
}
