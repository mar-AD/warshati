"use client"
import Image from "next/image"
import lines from "/public/images/IntegrationScolaire/hero/Lines.png"
import { motion } from "framer-motion"
import { FadeUp } from "@/lib/animations"
import image_1 from "/public/images/SmartEducationPlatform/SmartEducationPlatform-25.png"
import SmartPedFrameworkCard from "./SmartPedFrameworkCard"
import TeacherProDevelopment from "./TeacherProDevelopment "

const SmartPedFramework = () => {
    return (
        <>
        <div className="bg-light-gray px-5 sm:px-14 md:px-14 lg:px-14 pt-16  pb-16">
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
                            lg:text-5xl md:text-3xl text-xl `}>
                            Smart Pedagogical Framework
                        </h1>
                    </motion.div>
                    
                    <SmartPedFrameworkCard />
            </div>
        </div>
        
        <TeacherProDevelopment />

        </>
        
    )
}

export default SmartPedFramework