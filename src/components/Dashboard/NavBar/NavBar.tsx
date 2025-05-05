"use client";

import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import LangSwitcher from "./LangSwitcher";
import { usePathname } from "next/navigation";
import Sidebar from "../SideBar/SideBar";
import useMediaQuery from "@/lib/UseMediaQuery";
import { motion, AnimatePresence } from "framer-motion";
import { DigitalLiteracyNavItems, TeachableAINavItems } from "@/lib/data";
import { SearchComponent } from "./SearchComponent";
import { NavItem } from "@/lib/types";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTranslations } from "next-intl";


const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    const isDesktop = useMediaQuery("(min-width: 1200px)");
    
    const t = useTranslations('dashboard.sideBar');
    
    const toggleSidebar = () => setSidebarOpen((prev) => !prev);

    const pathname = usePathname()
    let sideBarNavItems: NavItem[];
    if(pathname.includes('/dashboard/teachable-ai')){
        sideBarNavItems = TeachableAINavItems(t)
    }else if(pathname.includes('/dashboard/digital-literacy')){
        sideBarNavItems = DigitalLiteracyNavItems(t)
    }else {
        sideBarNavItems = [];
    }
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node)
            ) {
                setSidebarOpen(false);
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    

    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
    setHydrated(true);
    }, []);


    return (
        <>
            <header className="w-full bg-white dark:bg-dark-blue py-6 px-[30px] flex items-center justify-between relative ">
                <div className="flex items-center gap-4">
                    {hydrated && !isDesktop && (
                        <button onClick={toggleSidebar}>
                        <Menu size={24} />
                        </button>
                    )}
                    <SearchComponent />
                </div>

                <div className="flex items-center gap-4">
                    <LangSwitcher />

                    <ThemeSwitcher />
                </div>
            </header>

            <AnimatePresence>
                {hydrated && !isDesktop && sidebarOpen && (
                    <motion.div
                    ref={sidebarRef}
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    exit={{ x: -300 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 z-30 h-screen"
                    >
                    <Sidebar
                        showToggleButton={false}
                        forceShowOnMobile={true}
                        onLinkClick={() => setSidebarOpen(false)}
                        navItems={sideBarNavItems}
                    />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
