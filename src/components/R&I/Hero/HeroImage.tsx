import { FadeRight } from "@/lib/animations"
import { motion } from "framer-motion"
import Image from "next/image"
import hero_img_0 from "/public/images/R&I/hero/hero_img_0.jpg"
import hero_img_1 from "/public/images/R&I/hero/hero_img_1.jpg"
import { Pause } from "lucide-react"
import { cn } from "@/lib/utils"

const HeroImage = () => {
    return (
        <motion.div
            variants={FadeRight(.2)}
            initial="initial"
            animate="animate"
            className="relative flex max-lg:flex-col gap-4 w-auto items-center justify-center">
            <div
                className={cn("flex justify-center items-center"
                )}>
                <Image src={hero_img_0} alt="" />
                <button className="absolute bg-black /50 backdrop-blur-lg p-3 rounded-full text-white cursor-pointer active:scale-75 duration-700">
                    <Pause size={24} />

                </button>
            </div>
            <div
                className={cn(" 2xl:absolute -right-[25rem]  top-44 flex justify-center items-center"
                )}>
                <Image src={hero_img_1} alt="" />
                <button className="absolute bg-black /50 backdrop-blur-lg p-3 rounded-full text-white cursor-pointer active:scale-75 duration-700">
                    <Pause size={24} />
                </button>
            </div>
        </motion.div >
    )
}

export default HeroImage