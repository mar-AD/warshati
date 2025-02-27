import { FadeRight } from "@/lib/animations"
import { IntScolaireType } from "@/lib/types"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
const IntScolaireCard = ({ item: { Icon, ...rest } }: { item: IntScolaireType }) => {
    return (
        <motion.div
        variants={FadeRight(rest.delay)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }} className="border p-8 rounded-3xl space-y-6 w-fit hover:bg-violet-500 font-Poppins hover:text-white group duration-500">
            <h2 className="font-bold lg:text-2xl text-lg flex gap-3 items-center">
                <span className={cn("p-2 rounded-xl flex items-center justify-center group-hover:bg-violet-100",
                    rest.bgColor,
                    rest.textColor
                )}>{<Icon />}</span>
                {rest.title}
            </h2>
            <div className="flex items-center">
                <p className="ml-2 text-sm text-stone-400 group-hover:text-white">{rest.description}</p>
            </div>
        </motion.div>
        )
}

export default IntScolaireCard