
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
import LayoutWrapper from '@/components/LayoutWrapper';
import './globals.css';
import { locales } from '@/i18n/config';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata = {
  title: 'Warshati - Smart Education Platform',
  description: 'Smart Education Platform',
  icons: '/images/logos/favicon.ico'
};

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale(); // get current locale safely
  const messages = await getMessages(); //loads messages via middleware
  // const dir = locale === "ar" ? "rtl" : "ltr";
  if (!messages) notFound();

  return (
    <html lang={locale} >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
