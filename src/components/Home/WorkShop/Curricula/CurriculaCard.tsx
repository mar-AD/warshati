import { FadeRight } from "@/lib/animations"
import { CurriculaType } from "@/lib/types"
import { motion } from "framer-motion"
const CurriculaCard = ({ item: { Icon, ...rest } }: { item: CurriculaType }) => {
    return (
        <motion.div
            variants={FadeRight(rest.delay)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }} className="border-4 border-violet-800 bg-white hover:bg-violet-800 transition-[background-color_color] duration-500 py-5 px-6 rounded-3xl flex flex-col gap-y-3 hover:text-white font-Poppins text-violet-800 group overflow-hidden lg:min-h-32 min-h-20 justify-center">
            <p className="h-0 group-hover:h-32 group-hover:visible group-hover:opacity-100 invisible opacity-0 duration-500 transition-[height_visibility] text-white max-md:text-sm">{rest.description}</p>
            <div className="flex justify-between items-center lg:gap-3">
                <h1 className="lg:text-4xl md:text-2xl text-xl font-semibold group-hover:my-3">{rest.title}</h1>
                <p className="md:p-2.5 p-1.5 group-hover:bg-white group-hover:text-violet-800 bg-violet-800 rounded-full text-white duration-500"><Icon /></p>
            </div>
        </motion.div>
    )
}

export default CurriculaCard