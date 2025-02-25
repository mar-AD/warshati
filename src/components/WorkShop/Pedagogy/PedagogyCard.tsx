"use client"
import { cn } from "@/lib/utils";
import { ArrowRightCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ParcoursType } from "@/lib/types";
const PedagogyCard = ({ item }:{item:ParcoursType}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className={cn("flex flex-col justify-center border items-center bg-white p-8 rounded-3xl gap-10 shadow-2xl shadow-black/20 lg:min-h-72 min-h-56",
            isExpanded && "border-violet-900"
        )}>
            <Image src={item.image} className="lg:w-40 w-28" alt="" />
            <div className={cn("flex items-start justify-between w-full gap-3",
                isExpanded && "flex-col"
            )}>
                <div className="font-Poppins space-y-2 overflow-hidden">
                    <h1 className="font-extrabold lg:text-lg text-violet-700">{item.title}</h1>
                    <AnimatePresence>
                        {
                            isExpanded &&
                            <motion.p
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className={"text-stone-500 !max-w-[21rem] max-lg:text-sm overflow-hidden"}>{item.description}</motion.p>
                        }
                    </AnimatePresence>
                </div>
                <button onClick={toggleDescription} className="bg-violet-800 text-white py-3 lg:px-5 px-4 rounded-xl flex justify-center place-self-end outline-none">
                    <ArrowRightCircle className={cn("max-lg:size-4 transition-transform duration-300",
                        isExpanded ? "rotate-180" : ""
                    )} />
                </button>
            </div>
        </div>
    )
}

export default PedagogyCard