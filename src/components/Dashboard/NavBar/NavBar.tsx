"use client";

import { useEffect, useRef, useState } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import LangSwitcher from "../LangSwitcher";
import Search from "./SearchBar";
import Sidebar from "../SideBar/SideBar";
import useMediaQuery from "@/lib/UseMediaQuery";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    const isDesktop = useMediaQuery("(min-width: 1200px)");
    
    const toggleDarkMode = () => setDarkMode(!darkMode);
    const toggleSidebar = () => setSidebarOpen((prev) => !prev);
    
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
            <header className="w-full bg-white dark:bg-gray-900 py-6 px-[30px] flex items-center justify-between relative ">
                <div className="flex items-center gap-4">
                    {hydrated && !isDesktop && (
                        <button onClick={toggleSidebar}>
                        <Menu size={24} />
                        </button>
                    )}
                    <Search />
                </div>

                <div className="flex items-center gap-4">
                <LangSwitcher />
                <button
                    onClick={toggleDarkMode}
                    className="w-[100px] h-9 bg-violet-800 rounded-full relative transition-all duration-300"
                >
                    <div className="absolute inset-0 flex justify-between items-center px-2 z-10">
                    <Moon
                        size={18}
                        className={cn(
                        "transition-opacity duration-300",
                        darkMode ? "text-white" : "text-black"
                        )}
                    />
                    <Sun
                        size={18}
                        className={cn(
                        "transition-opacity duration-300",
                        darkMode ? "text-black" : "text-white"
                        )}
                    />
                    </div>
                    <span
                    className={cn(
                        "absolute top-[4px] left-[4px] w-7 h-7 rounded-full border border-white transition-transform duration-300 z-0 bg-white",
                        darkMode ? "translate-x-16" : "translate-x-0"
                    )}
                    />
                </button>
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
                    />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
