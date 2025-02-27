"use client"

import { FadeOut } from "@/lib/animations"
import { FAQType } from "@/lib/types"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import { useRef, useState } from "react"

const FAQCard = ({ index, faq }:{index:number,faq:FAQType}) => {
    const [opened, setOpened] = useState<boolean>(false)
    const ref = useRef<(HTMLParagraphElement | null)[]>([])

    return (
        <motion.div
        variants={FadeOut(faq.delay)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }} key={index} className={cn("border p-5  rounded-3xl flex items-start justify-between",
            opened && "bg-violet-400/50 border-2 border-violet-800"
        )}>
            <div className="space-y-5 w-full">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="size-8 flex justify-center items-center bg-light-gray rounded-full">{(index + 1) >= 10 ? index + 1 : "0" + (index + 1)}</span>
                        <h3 className="font-semibold lg:text-lg text-sm">{faq.title}</h3>
                    </div>
                    <Plus onClick={() => setOpened(prev => !prev)} className={cn("lg:size-7 size-6 text-violet-600 transition-transform duration-500",
                        opened && "rotate-45"
                    )} size={30} />
                </div>
                <AnimatePresence>

                    {
                        opened &&
                        <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: .5 }}
                            ref={(el) => {
                                ref.current.push(el)
                            }} className={cn("lg:text-sm text-xs text-stone-800 max-w-[45rem] overflow-hidden duration-500 transition-[width] h-0",

                            )} >{faq.content}</motion.p>
                    }
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default FAQCard