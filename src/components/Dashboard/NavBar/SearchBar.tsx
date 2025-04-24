"use client"

import { FadeOut } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Search } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const tags = [
        "Smart Workshops",
        "STEAM",
        "Coding",
        "Interactive prototypes",
        "Creativity",
        "IoT",
        "Artificial Intelligence"
]

const HeroSearch = () => {
    const [isOpen, setIsOpen] = useState(false)

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
    }, []);

    return (
        <div
        ref={dropdownRef}
        className=" relative flex flex-row justify-between bg-light-gray border rounded-3xl w-auto sm:w-[314px] md:w-[314px] lg:w-[314px] h-[40px] pl-5 pr-2 items-center ">
            <button
                onClick={() => setIsOpen(prev => !prev)}
                className="flex items-center gap-x-2 lg:text-[11px] text-[8px]"
            >
                Category
                <ChevronDown
                className={cn("duration-500 size-4", isOpen ? "rotate-180" : "rotate-0")}
                />
            </button>
            <button className="bg-violet-800 hover:bg-violet-900 duration-500 text-violet-200 p-1 rounded-full">
                <Search className="size-5 " />
            </button>

            <AnimatePresence>
                {isOpen && (
                <motion.div
                    variants={FadeOut(0.2)}
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    className="bg-light-gray border backdrop-blur-lg absolute p-5 rounded-3xl top-12 left-0 w-full z-10"
                >
                    {tags.map(tag => (
                    <div
                        key={tag}
                        onClick={() => setIsOpen(false)}
                        className="capitalize p-3 hover:bg-white rounded-lg duration-200 cursor-pointer lg:text-[11px] text-[8px]"
                    >
                        {tag}
                    </div>
                    ))}
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default HeroSearch
