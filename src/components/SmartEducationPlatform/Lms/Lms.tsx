"use client"
import Image from "next/image"
import lines from "/public/images/IntegrationScolaire/hero/Lines.png"
import { motion } from "framer-motion"
import { FadeUp } from "@/lib/animations"
import image_1 from "/public/images/SmartEducationPlatform/SmartEducationPlatform-1.png"
import LmsCards from "./LmsCards"
import { lmsData } from "@/lib/data"
import InnovationLabs from "./InnovationLabs"



const Lms = () => {
    return (
        <>
        <div className="bg-light-gray px-5 sm:px-14 md:px-14 lg:px-36 pb-32 lg:pt-16">
            <div className="relative">
                <div className="flex flex-col items-center justify-center relative gap-y-3">

                    <motion.div
                        variants={FadeUp(.3)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="flex !items-center gap-x-2 relative bg-white p-3 lg:px-5 border justify-center rounded-xl"
                    >
                        <Image src={lines} className="absolute -left-9 -top-8" alt="" />
                        <div className="bg-violet-700/20 p-2 rounded-lg flex items-center">
                            <Image className="size-6 lg:size-9 fill-violet-700" src={image_1} alt="" />
                        </div>
                        <h1 className={`text-violet-800 font-bold text-center font-Vazirmatn 
                            text-[2.5rem] lg:text-5xl md:text-3xl text-xl}`}>
                            Learning Management System (LMS)
                        </h1>
                    </motion.div>

                    <motion.h1
                        variants={FadeUp(.5)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-[#262626] font-Poppins max-w-[50rem] sm:max-w-[55rem] md:max-w-[75rem] lg:max-w-[89rem] text-center lg:text-[38px] md:text-2xl text-lg font-medium !leading-relaxed"
                    >
                        Un système de gestion permettant l&apos;administration fluide des cours, des élèves et des enseignants. Iloffre :
                    </motion.h1>

                </div>

                <div className="pt-14 md:pt-24 lg:pt-28 relative">
                    <div className="flex flex-wrap justify-center gap-12">
                        {lmsData.map((item, index) => (
                        <LmsCards key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <InnovationLabs/>

        </>
    )
}

export default Lms