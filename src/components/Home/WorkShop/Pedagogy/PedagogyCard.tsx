"use client"
import { cn } from "@/lib/utils";
import { ArrowRightCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ParcoursType } from "@/lib/types";
import { FadeRight } from "@/lib/animations";
const PedagogyCard = ({ item }:{item:ParcoursType}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <motion.div
            variants={FadeRight(item.delay!)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }} 
            animate={{ 
                height: isExpanded 
                    ? "max(20rem, 100%)" 
                    : "16rem" 
            }}
            transition={{ duration: 0.4 }}
            className={cn(
                "flex flex-col justify-between border items-center bg-white p-8 md:p-4 rounded-3xl gap-6 shadow-lg shadow-black/20 overflow-hidden",
                "min-h-64 max-h-[26rem] md:max-h-[460px] transition-all",
                isExpanded && "border-violet-900 mb-6"
            )}
        >

            <Image 
                src={item.image} 
                className={cn(
                    "object-contain transition-all duration-300", 
                    isExpanded ? "lg:w-40 md:w-32 sm:w-28 w-24" : "lg:w-40 md:w-36 sm:w-32 w-28",
                    item.title === "Esprit Scientifique & Curiosité"
                        ? "lg:w-[8.4rem] md:w-28 sm:w-24 w-24"
                        : ""
                )}
                alt="" 
            />

            <div className={cn("flex items-start justify-between w-full gap-3 transition-all", 
                isExpanded ? "flex-col" : "flex-row"
            )}>
                <div className="font-Poppins space-y-2 flex-1 overflow-hidden">
                    <h1 className="font-extrabold lg:text-lg text-violet-700">{item.title}</h1>

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.p
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-stone-500 max-lg:text-sm overflow-hidden"
                            >
                                {item.description}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                <button 
                    onClick={toggleDescription} 
                    className="bg-violet-800 text-white py-3 lg:px-5 px-4 rounded-xl flex justify-center outline-none"
                >
                    <ArrowRightCircle 
                        className={cn("max-lg:size-4 transition-transform duration-300", 
                            isExpanded ? "rotate-180" : ""
                        )} 
                    />
                </button>
            </div>
        </motion.div>
    )
}

export default PedagogyCard