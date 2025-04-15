"use client"
import Image from "next/image"
import lines from "/public/images/IntegrationScolaire/hero/Lines.png"
import flight from "/public/images/Home/hero/flight.png";
import { motion } from "framer-motion"
import { FadeUp } from "@/lib/animations"
import image_1 from "/public/images/SmartEducationPlatform/SmartEducationPlatform-26.png"
import ComposantesDuProgrammeCard from "./ComposantesDuProgrammeCards"
import { ComposantesDuProgrammeCardData } from "@/lib/data"
import WarshatiSmartEducationPlatform from "./WarshatiSmartEducationPlatform"

const ComposantesDuProgramme = () => {
    return (
        <>
        <div className="relative px-5 sm:px-14 md:px-14 lg:px-14 pt-16  pb-16 md:pb-32 lg:pb-32">
            <Image src={flight} alt="" className=" absolute top-0 -left-0 w-[2.3rem] sm:w-[6rem] md:w-[10rem] lg:w-72"/>
            <div className="flex flex-col items-center justify-center relative gap-y-3">
                    <motion.div
                        variants={FadeUp(.3)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="flex !items-center gap-x-2 relative bg-white p-3 lg:px-5 border justify-center rounded-xl max-w-[90%]">
                        <Image src={lines} className="absolute -left-9 -top-8" alt=""/>
                        <div className=" bg-violet-700/20 p-2 rounded-lg flex items-center">
                            <Image className="size-6 lg:size-9 fill-violet-700" src={image_1} alt="" />
                        </div>
                        <h1 className={`text-violet-800 font-bold text-center font-Vazirmatn 
                            lg:text-5xl md:text-3xl text-xl`}>
                            Composantes du Programme
                        </h1>
                    </motion.div>
                    
                    <div className="flex flex-wrap justify-center gap-6 lg:gap-16 mt-10 sm:mt-12 md:mt-16 lg:mt-32">
                {
                    ComposantesDuProgrammeCardData.map((item, index) => (
                        <ComposantesDuProgrammeCard index={index} item={item} key={index} />
                    ))
                }
            </div>
            </div>
        </div>
        
        <WarshatiSmartEducationPlatform />

        </>
        
    )
}

export default ComposantesDuProgramme