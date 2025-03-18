import { FadeRight } from "@/lib/animations"
import { CurriculaType } from "@/lib/types"
import { motion } from "framer-motion"
import Image from "next/image"
const CurriculaCard = ({ item: { Icon, ...rest } }: { item: CurriculaType }) => {
    return (
        <motion.div
            variants={FadeRight(rest.delay)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="border-4 border-violet-800 bg-white hover:bg-violet-800 transition-[background-color_color] duration-500 py-5 px-6 rounded-3xl flex flex-col gap-y-3 hover:text-white font-Poppins text-violet-800 group overflow-hidden min-h-20 md:min-h-[280px] lg:min-h-32 justify-between"
            >
            <div className="max-h-0 group-hover:max-h-[200px] overflow-y-auto transition-all duration-500 text-white max-md:text-sm scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
                {rest.description}
            </div>
            
            <div className="flex justify-between items-center lg:gap-3">
                <h1 className="text-4xl xl:text-xl 2xl:text-4xl font-semibold group-hover:my-3">
                {rest.title}
                </h1>
                <p className="md:p-2.5 p-1.5 group-hover:bg-white group-hover:text-violet-800 bg-violet-800 rounded-full text-white duration-500">
                {typeof Icon === "function" ? (
                        <Icon />
                    ) : (
                        <Image src={Icon} alt={rest.title} />
                    )}
                </p>
            </div>
        </motion.div>

    )
}

export default CurriculaCard