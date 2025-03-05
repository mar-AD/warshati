import Image from "next/image"
import image from "/public/images/IntegrationScolaire/hero/hero_image.jpg"
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
         className="flex items-center justify-center lg:mt-32 mt-16 relative border">
            <div className="rounded-lg lg:w-[1800px] lg:h-[790px] h-56 overflow-hidden">
                <Image src={image} alt="" className="lg:-translate-y-28 -translate-y-8"/>
            </div>
            <button className="absolute bg-violet-800 p-3 text-white rounded-full">
                <Play className="fill-white" />
            </button>
        </motion.div>
    )
}

export default HeroImage