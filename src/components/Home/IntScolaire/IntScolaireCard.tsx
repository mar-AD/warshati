import { FadeRight } from "@/lib/animations"
import { IntScolaireType } from "@/lib/types"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"
const IntScolaireCard = ({ item: { Icon, ...rest } }: { item: IntScolaireType }) => {
    return (
        <motion.div
            variants={FadeRight(rest.delay)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="border p-8 rounded-2xl space-y-6 w-fit hover:bg-violet-500 font-Poppins hover:text-white group duration-500"
            >
            <h2 className="font-bold lg:text-2xl text-lg flex gap-3 items-center">
                <span
                className={cn(
                    "w-10 h-10 p-2 rounded-xl flex items-center justify-center group-hover:bg-violet-100 flex-shrink-0",
                    rest.bgColor,
                    rest.textColor
                )}
                >
                    <Image src={Icon} alt="" width={30} height={30} className="w-8 md:w-10" />
                </span>
                {rest.title}
            </h2>
            <div className="flex items-center">
                <p className="ml-2 text-[16px] text-stone-500 group-hover:text-white">
                {rest.description}
                </p>
            </div>
        </motion.div>

        )
}

export default IntScolaireCard