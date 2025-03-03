import { FadeRight } from "@/lib/animations"
import { ParcoursType } from "@/lib/types"
import { motion } from "framer-motion"
import Image from "next/image"
const CollaborationCard = ({item}:{item:ParcoursType}) => {
    return (
        <motion.div
            variants={FadeRight(item.delay!)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }} className="group hover:bg-violet-800 hover:text-white space-y-10 lg:w-1/3 w-fit rounded-xl border duration-500 p-8 shadow-2xl shadow-black/10">
            <div className="flex gap-x-4 items-center">
                <Image className="bg-slate-200 p-1.5 rounded-lg w-12 group-hover:bg-white" src={item.image} alt={item.title} />
                <h1 className="font-semibold group-hover:text-white text-2xl">{item.title}</h1>
            </div>
            <p className="text-sm">{item.description}</p>
        </motion.div>
    )
}

export default CollaborationCard