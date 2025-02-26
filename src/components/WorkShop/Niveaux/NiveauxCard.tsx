import { FadeRight } from "@/lib/animations"
import { niveauxType } from "@/lib/types"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"
const NiveauxCard = ({ item }: { item: niveauxType }) => {
    return (
        <motion.div
        variants={FadeRight(item.delay!)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }} className={cn("shadow-2xl border-2 duration-500 rounded-2xl flex flex-col items-center justify-between gap-3 h-[27rem] p-6 font-Inter relative xl:hover:!-translate-y-20",
            item.bgColor,
            item.borderColor
        )}>
            <Image src={item.num} className="absolute top-7 left-7" alt="" />
            <div className=" flex justify-center items-center flex-col h-full">
                <Image src={item.image} className="w- p-2" alt="" />
            </div>
            <h1 className="text-3xl font-bold">
                {item.title}
            </h1>
            <p className="text-sm text-center">
                {item.description}
            </p>
        </motion.div>
    )
}

export default NiveauxCard