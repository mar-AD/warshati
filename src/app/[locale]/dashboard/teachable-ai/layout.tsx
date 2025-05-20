import Sidebar from "@/components/Dashboard/SideBar/SideBar";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Dashboard/NavBar/NavBar";
import { TeachableAINavItems } from "@/lib/data";
import "react-toastify/dist/ReactToastify.css";
import { createTranslator, NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import Providers from "@/components/Dashboard/TeachableAI/AppliedAI/providers/NextUIProviders";
import { notFound } from "next/navigation";
import { locales } from '@/i18n/config';
import "../../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Warshati - Dashboard",
  description: "Smart Education Platform Dashboard",
  icons: "/images/logos/favicon.ico",
};

export function generateStaticParams() {
    return locales.map(locale => ({ locale }));
  }

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  if (!messages) notFound();

  const t = createTranslator({ locale, messages, namespace: 'dashboard.sideBar' });
  const navItems = TeachableAINavItems(t);

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-hidden`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <div className="flex overflow-hidden h-screen">
              <Sidebar navItems={navItems} />
              <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
                <Navbar />
                <main className="flex-1 overflow-auto">{children}</main>
              </div>
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
