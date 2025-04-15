"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
const pathname = usePathname();
const hideHeaderFooter = pathname.endsWith("/Commencer");

return (
<>
    {!hideHeaderFooter && <Header />}
    {children}
    {!hideHeaderFooter && <Footer />}
</>
);
}
