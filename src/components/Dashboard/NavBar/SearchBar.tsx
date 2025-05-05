"use client";

import { ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeOut } from "@/lib/animations";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";

const tags = [
    "smart_workshops",
    "steam",
    "coding",
    "interactive_prototypes",
    "creativity",
    "iot",
    "ai"
];

interface SearchBarProps {
    onSearchClick?: () => void;
    className?: string;
}

export const SearchBar = ({ onSearchClick, className }: SearchBarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    const t = useTranslations("dashboard.sideBar");

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div
        ref={dropdownRef}
        className={cn(
            "relative flex flex-row justify-between border rounded-3xl w-[314px] h-[40px] pl-5 pr-2 items-center",
            "bg-light-gray text-black border-zinc-300",
            "dark:bg-zinc-900 dark:text-white dark:border-zinc-700",
            className
        )}
        >
            <button
                onClick={() => setIsOpen(prev => !prev)}
                className="flex items-center gap-x-2 text-[11px]"
            >
                {t("category")}
                <ChevronDown
                className={cn("duration-500 size-4", isOpen ? "rotate-180" : "rotate-0")}
                />
            </button>
            <button
                className="bg-violet-800 hover:bg-violet-900 duration-500 text-violet-200 p-1 rounded-full"
                onClick={onSearchClick}
            >
                <Search className="size-5" />
            </button>

            <AnimatePresence>
                {isOpen && (
                <motion.div
                    variants={FadeOut(0.2)}
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    className={cn(
                    "absolute z-50 top-12 left-0 w-full border p-5 rounded-3xl backdrop-blur-lg",
                    "bg-light-gray border-zinc-300",
                    "dark:bg-zinc-900 dark:border-zinc-700"
                    )}
                >
                    {tags.map(tag => (
                        <div
                            key={tag}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                            "capitalize p-3 rounded-lg duration-200 cursor-pointer text-[11px]",
                            "text-zinc-600 hover:bg-white",
                            "dark:text-zinc-200 dark:hover:bg-zinc-800"
                            )}
                        >
                            {t(`tags.${tag}`)}
                        </div>
                    ))}
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
