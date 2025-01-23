import "../globals.css";
import clsx from "clsx";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const favicon = "/icons/golf_club.svg";
const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout(
  { children, params }: Props
) {

  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale} suppressHydrationWarning>
      <head>
        <title>Golf Shop</title>
        <link rel="icon" href={favicon} type="image/svg+xml" /> 
      </head>

      <body className={ clsx(inter.className, "flex h-full flex-col")}>
        <NextIntlClientProvider messages={messages}>
          {/* <Mavigation/> */}
          {children}
        </NextIntlClientProvider>
      </body>

    </html>
  );
}
