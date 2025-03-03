"use client"
import {  FadeUp } from "@/lib/animations"
import { collaborationData } from "@/lib/data"
import { motion } from "framer-motion"
import CollaborationCard from "./CollaborationCard"
const Collaboration = () => {
    return (
        <div className="lg:px-10 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 bg-light-gray">
            <div className="space-y-5">
                <motion.h1
                    variants={FadeUp(.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }} className="font-bold lg:text-[70px] md:text-3xl text-2xl text-center !leading-tight text-violet-800">Travaillons ensemble</motion.h1>
                <motion.div
                    variants={FadeUp(.3)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }} className="flex justify-center">
                    <p className="font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[55rem] md:max-w-[40rem] max-w-[25rem] text-center">Nous collaborons avec des universités, des laboratoires, et des entreprises pour renforcer nos
                        capacités en recherche et innovation.</p>
                </motion.div>
            </div>
            <div className="flex items-start gap-20 justify-center flex-wrap">
                {
                    collaborationData.map((item, index) => (
                        <CollaborationCard key={index} item={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Collaboration