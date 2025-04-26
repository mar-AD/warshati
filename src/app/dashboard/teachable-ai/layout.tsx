import Sidebar from "@/components/Dashboard/SideBar/SideBar";
import { Geist, Geist_Mono } from "next/font/google";
import '../../globals.css';
import Navbar from "@/components/Dashboard/NavBar/NavBar";
import { TeachableAINavItems } from "@/lib/data";

interface DashboardLayoutProps {
    children: React.ReactNode
}

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata = {
    title: 'Warshati - Dashboard',
    description: 'Smart Education Platform Dashboard',
    icons: '/images/logos/favicon.ico'
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => (
    <html lang="">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-hidden`}>
        <div className="flex overflow-hidden h-screen">
            <Sidebar navItems={TeachableAINavItems} />

            <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-auto">{children}</main>
            </div>
        </div>
        </body>
    </html>
);
export default DashboardLayout;
