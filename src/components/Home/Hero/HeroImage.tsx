import Image from "next/image"
import image_1 from "/public/images/Home/hero/image_1.png"
import image_2 from "/public/images/Home/hero/image_2.png"
import image from "/public/images/Home/hero/image.png"
import circles from "/public/images/Home/digitalLab/circles.png"
import { FadeLeft, FadeRight } from "@/lib/animations"
import { motion } from "framer-motion"
const HeroImage = () => {
    return (
        <div className="flex max-lg:flex-col justify-center items-center mt-32 gap-20">
            <motion.div
                variants={FadeRight(.3)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative flex justify-center items-center">
                <div className="w-full h-full border border-violet-700 absolute inset-0 rounded-full translate-x-5 -translate-y-5"></div>
                <Image className="absolute -left-6 z-0 -top-16 w-32" src={image} alt="" />
                <Image className="absolute -left-72 z-0 -top-0 w-96" src={circles} alt="" />
                <div className="overflow-hidden lg:w-[500px] lg:h-[500px] w-72 h-72 rounded-full border border-violet-700 -scale-x-100">
                    <Image src={image_2} className="scale-[1.7]" alt="image_2" />
                </div>
            </motion.div>
            <motion.div
                variants={FadeLeft(.3)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="relative flex justify-center">
                <div className="w-full h-full border border-violet-700 absolute inset-0 rounded-full -translate-x-6 -translate-y-6"></div>
                <Image className="absolute -right-44 z-0 -top-44 w-96" src={circles} alt="" />
                <div className="overflow-hidden lg:w-[500px] lg:h-[500px] w-72 h-72 rounded-full border border-violet-700">

                    <Image className="scale-[1.7]" src={image_1} alt="image_1" />
                </div>
            </motion.div>
        </div>
    )
}

export default HeroImage