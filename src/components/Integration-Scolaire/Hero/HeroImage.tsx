import Image from "next/image"
import image from "/public/images/Integration-Scolaire/hero/hero_image.jpg"
import { FadeUp } from "@/lib/animations"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
const HeroImage = () => {
    return (
        <motion.div
             variants={FadeUp(.2)}
             initial="initial"
             whileInView="animate"
             viewport={{once:true}}
         className="flex items-center justify-center mt-32 relative">
            <div className="rounded-lg w-[1800px] h-[790px] overflow-hidden">
                <Image src={image} alt="" className="-translate-y-28"/>
            </div>
            <button className="absolute bg-violet-800 p-3 text-white rounded-full">
                <Play className="fill-white" />
            </button>
        </motion.div>
    )
}

export default HeroImage