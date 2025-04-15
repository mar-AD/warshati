
import { labsData } from "@/lib/data"
import LabsCards from "./LabsCards"
import lines from "/public/images/IntegrationScolaire/hero/Lines.png"
import { motion } from "framer-motion"
import { FadeUp } from "@/lib/animations"
import Image from "next/image"
import image_1 from "/public/images/SmartEducationPlatform/SmartEducationPlatform-18.png"

const ThirdLibsSection = () => {
    return (
        <div className="flex flex-col items-center justify-center relative gap-y-3 px-5 sm:px-14 md:px-14 lg:px-36 ">

            <motion.div
            variants={FadeUp(0.3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex !items-center gap-x-2 relative bg-white p-3 lg:px-5 border justify-center rounded-xl max-w-[90%]"
            >
            <Image src={lines} className="absolute -left-9 -top-8" alt="" />
            <div className="bg-violet-700/20 p-2 rounded-lg flex items-center">
                <Image className="size-6 lg:size-9 fill-violet-700" src={image_1} alt="" />
            </div>
            <h1
                className={`text-violet-800 font-bold text-center font-Vazirmatn 
                lg:text-5xl md:text-3xl text-xl`}
            >
                Digital Skills Lab
            </h1>
            </motion.div>

            <div className="pt-28 md:pt-32 lg:pt-44 relative">
            <div className="flex flex-wrap justify-center gap-24">
                {labsData[2].map((item, index) => (
                <LabsCards key={index} item={item} />
                ))}
            </div>
            </div>
    
        </div>
    );
};

export default ThirdLibsSection
