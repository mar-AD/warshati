"use client";


import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { usePathname } from "@/i18n/navigation";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
const pathname = usePathname();
const hideHeaderFooter = pathname.endsWith("/Commencer") || pathname.startsWith("/dashboard");

return (
<>
    {!hideHeaderFooter && <Header />}
    {children}
    {!hideHeaderFooter && <Footer />}
</>
);
}
