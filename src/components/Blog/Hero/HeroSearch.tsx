"use client"
import { FadeDown, FadeOut } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Search } from "lucide-react"
import { useState } from "react"
const HeroSearch = () => {
    const data: string[] = [
        "Smart Workshops",
        "STEAM",
        "Coding",
        "Mequettes interactives",
        "creativite",
        "IoT",
        "Intelligence artificielle"
    ]
    const [isOpen, setIsOpen] = useState(false)
    return (
        <motion.div
            variants={FadeDown(.2)}
            initial="initial"
            animate="animate"
            className="absolute bg-white rounded-xl flex lg:w-4/5 w-full lg:px-10 gap-4 px-5 py-2 lg:py-5 z-50 lg:top-56 items-center">
            <button onClick={() => setIsOpen(prev => !prev)} className="flex items-center gap-x-3 lg:text-base text-sm">
                Catégories 
                
                <ChevronDown className={cn("duration-500",isOpen?"rotate-180":"rotate-0")} />
            </button>
            <input type="text" className="w-full h-12 outline-none lg:text-base text-sm" placeholder="Search..." />
            <button className="bg-violet-800 hover:bg-violet-900 duration-500 text-violet-200 lg:p-3 p-1.5 rounded-full">
                <Search className="size-4 lg:size-6" />
            </button>
            <AnimatePresence>
                {
                    isOpen &&
                    <motion.div
                        variants={FadeOut(.2)}
                        initial="initial"
                        animate="animate"
                        exit="initial"
                        className="bg-white/70 backdrop-blur-lg absolute p-5 rounded-xl lg:top-24 top-20 left-0 lg:w-1/4 w-full">
                        {
                            data.map(item => (
                                <div key={item} className="capitalize p-3 hover:bg-white  rounded-lg duration-200 cursor-pointer">
                                    {item}
                                </div>
                            ))
                        }
                    </motion.div>
                }
            </AnimatePresence>
        </motion.div>
    )
}

export default HeroSearch